import { IPhysics } from '../IPhysics';
import { StageDef, gamestate, MapEntity } from 'common';
import * as fs from 'fs';
import * as path from 'path';
import { MapEntityState } from '../types/MapEntity.type';

// 올바른 Box2D 모듈 경로로 변경
import Box2DFactory from 'box2d-wasm';

export class Box2dPhysics implements IPhysics {
  private Box2DInstance!: typeof Box2D & EmscriptenModule;
  private gravity!: Box2D.b2Vec2;
  private world!: Box2D.b2World;
  private initialized: boolean = false;

  private marbleMap: { [id: number]: Box2D.b2Body } = {};
  private entities: ({ body: Box2D.b2Body } & gamestate.IMapEntityState)[] = [];

  private deleteCandidates: Box2D.b2Body[] = [];

  // Helper function to destroy Box2D objects if a destroy method exists
  private destroyObject(obj: any): void {
    if (obj && typeof this.Box2DInstance.destroy === 'function') {
      this.Box2DInstance.destroy(obj);
    }
  }

  async init(): Promise<void> {
    try {
      // WASM 파일 직접 로드
      const wasmBinary = await this.loadWasmBinary();
      this.Box2DInstance = await Box2DFactory({ wasmBinary });

      this.gravity = new this.Box2DInstance.b2Vec2(0, 10);
      this.world = new this.Box2DInstance.b2World(this.gravity);
      // Note: this.gravity is created with `new` and might need destruction.
      // However, it's often managed by the world or is a simple struct.
      // For now, we assume it doesn't need explicit destruction unless docs say otherwise.
      this.initialized = true; // 초기화 완료 플래그 설정
      // console.log('box2d ready');
    } catch (error) {
      // console.error('Box2D 초기화 실패:', error);
      throw error;
    }
  }

  // WebAssembly 바이너리 파일 경로 수정
  private async loadWasmBinary(): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      let wasmPath: string = path.resolve(__dirname, '../../../assets/dist/umd/Box2D.wasm');

      if (fs.existsSync(wasmPath)) {
        try {
          const buffer = fs.readFileSync(wasmPath);
          resolve(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength));
        } catch (error) {
          reject(error);
        }
      } else {
        reject(new Error(`WASM 파일을 찾을 수 없습니다. 시도한 경로: ${wasmPath}`));
      }
    });
  }

  clear(): void {
    this.clearEntities(); // Clears map entities
    this.clearMarbles(); // Clears all marbles
  }

  clearMarbles(): void {
    if (!this.world) return;
    Object.values(this.marbleMap).forEach((body) => {
      this.world.DestroyBody(body);
    });
    this.marbleMap = {};
  }

  createStage(stage: StageDef): void {
    this.createEntities(stage.entities);
  }

  createEntities(entities?: MapEntity[]) {
    if (!entities || !this.world) return;

    const bodyTypes = {
      static: this.Box2DInstance.b2_staticBody,
      kinematic: this.Box2DInstance.b2_kinematicBody,
    } as const;

    entities.forEach((entity) => {
      const bodyDef = new this.Box2DInstance.b2BodyDef();
      bodyDef.set_type(bodyTypes[entity.type as 'static' | 'kinematic']);
      const body = this.world.CreateBody(bodyDef);
      this.destroyObject(bodyDef);

      const fixtureDef = new this.Box2DInstance.b2FixtureDef();
      fixtureDef.set_density(entity.props.density);
      fixtureDef.set_restitution(entity.props.restitution);

      let shape: any;
      if (entity.shape.boxShape) {
        shape = new this.Box2DInstance.b2PolygonShape();
        const halfWidth = entity.shape.boxShape.width / 2;
        const halfHeight = entity.shape.boxShape.height / 2;
        const centerVec = new this.Box2DInstance.b2Vec2(0, 0);
        shape.SetAsBox(
          halfWidth,
          halfHeight,
          centerVec,
          entity.shape.boxShape.rotation,
        );
        this.destroyObject(centerVec);
        fixtureDef.set_shape(shape);
        body.CreateFixture(fixtureDef);
        this.destroyObject(shape);
      } else if (entity.shape.polylineShape) {
        for (let i = 0; i < entity.shape.polylineShape.points.length - 1; i++) {
          const p1Data = entity.shape.polylineShape.points[i];
          const p2Data = entity.shape.polylineShape.points[i + 1];
          const v1 = new this.Box2DInstance.b2Vec2(p1Data.x, p1Data.y);
          const v2 = new this.Box2DInstance.b2Vec2(p2Data.x, p2Data.y);
          const edgeShape = new this.Box2DInstance.b2EdgeShape();
          edgeShape.SetTwoSided(v1, v2);
          body.CreateFixture(edgeShape, 0);
          this.destroyObject(v1);
          this.destroyObject(v2);
          this.destroyObject(edgeShape);
        }
      } else if (entity.shape.circleShape) {
        shape = new this.Box2DInstance.b2CircleShape();
        shape.set_m_radius(entity.shape.circleShape.radius);
        fixtureDef.set_shape(shape);
        body.CreateFixture(fixtureDef);
        this.destroyObject(shape);
      }
      this.destroyObject(fixtureDef);

      body.SetAngularVelocity(entity.props.angularVelocity);
      const initialPos = new this.Box2DInstance.b2Vec2(entity.position.x, entity.position.y);
      let bodyInitialAngle = 0;
      if (entity.shape.polylineShape) {
        bodyInitialAngle = entity.shape.polylineShape.rotation;
      } else if (entity.shape.boxShape) {
        bodyInitialAngle = entity.shape.boxShape.rotation;
      }
      body.SetTransform(initialPos, bodyInitialAngle);
      this.destroyObject(initialPos);

      this.entities.push({
        body,
        x: entity.position.x,
        y: entity.position.y,
        angle: body.GetAngle(),
        shape: entity.shape,
        life: entity.props.life ?? -1, // life가 undefined일 경우 -1로 설정
      });
    });
  }

  clearEntities() {
    if (!this.world) return;
    this.entities.forEach((entity) => {
      this.world.DestroyBody(entity.body);
    });
    this.entities = [];
  }

  createMarble({
    id,
    x,
    y,
    isDummy = false,
    initialVelocity = { x: 0, y: 0 },
    radius,
  }: {
    id: number;
    x: number;
    y: number;
    isDummy: boolean;
    initialVelocity?: { x: number; y: number };
    radius: number;
  }) {
    if (!this.world) return;
    const circleShape = new this.Box2DInstance.b2CircleShape();
    circleShape.set_m_radius(radius);

    const bodyDef = new this.Box2DInstance.b2BodyDef();
    bodyDef.set_type(this.Box2DInstance.b2_dynamicBody);
    bodyDef.set_bullet(true); // CCD 활성화
    const initialPos = new this.Box2DInstance.b2Vec2(x, y);
    bodyDef.set_position(initialPos);
    this.destroyObject(initialPos);

    const body = this.world.CreateBody(bodyDef);
    this.destroyObject(bodyDef);

    // Create fixture
    const fixtureDef = new this.Box2DInstance.b2FixtureDef();
    fixtureDef.set_shape(circleShape);
    fixtureDef.set_density(1 + Math.random()); // 무게는 기존처럼 랜덤하게 설정
    body.CreateFixture(fixtureDef);
    this.destroyObject(fixtureDef);
    this.destroyObject(circleShape);

    if (isDummy) {
      body.SetAwake(true);
      body.SetEnabled(true);
      if (initialVelocity) {
        const impulseVec = new this.Box2DInstance.b2Vec2(initialVelocity.x * 0.1, initialVelocity.y * 0.1);
        body.ApplyLinearImpulseToCenter(impulseVec, true);
        this.destroyObject(impulseVec);
      }
    } else {
      body.SetAwake(false);
      body.SetEnabled(false);
    }
    this.marbleMap[id] = body;
  }

  shakeMarble(id: number): void {
    const body = this.marbleMap[id];
    if (body) {
      const impulse = new this.Box2DInstance.b2Vec2(Math.random() * 10 - 5, Math.random() * 10 - 5);
      body.ApplyLinearImpulseToCenter(impulse, true);
      this.destroyObject(impulse);
    }
  }

  removeMarble(id: number): void {
    if (!this.world) return;
    const marbleBody = this.marbleMap[id];
    if (marbleBody) {
      this.world.DestroyBody(marbleBody);
      delete this.marbleMap[id];
    }
  }

  getMarblePosition(id: number): { x: number; y: number; angle: number } {
    const marbleBody = this.marbleMap[id];
    if (marbleBody) {
      const pos = marbleBody.GetPosition();
      const angle = marbleBody.GetAngle();
      // Do not destroy pos here as it's a reference from GetPosition(), not newly created by `new`.
      // Box2D's GetPosition typically returns a pointer or a copy that JS GC handles if it's a JS object.
      // If it returns a direct C++ pointer via Embind/WebIDL, its lifetime is tied to the body or needs specific handling.
      // Assuming it's safe not to destroy `pos` based on typical Box2D JS wrapper behavior.
      return { x: pos.x, y: pos.y, angle: angle };
    } else {
      return { x: 0, y: 0, angle: 0 };
    }
  }

  getEntities(): gamestate.IMapEntityState[] {
    if (!this.world) return [];
    return this.entities.map((entity) => {
      const currentAngle = entity.body.GetAngle();
      entity.angle = currentAngle;
      return {
        x: entity.x,
        y: entity.y,
        angle: currentAngle,
        shape: entity.shape,
        life: entity.life,
      };
    });
  }

  applyRadialImpulse(position: { x: number; y: number }, radius: number, force: number): void {
    if (!this.world) return;
    const center = new this.Box2DInstance.b2Vec2(position.x, position.y);
    const radiusSq = radius * radius;

    for (const id in this.marbleMap) {
      const body = this.marbleMap[id];
      const marblePos = body.GetPosition(); // This is a b2Vec2, potentially needs destruction if it were `new`
      const distVector = new this.Box2DInstance.b2Vec2(marblePos.x - center.x, marblePos.y - center.y);
      // this.destroyObject(marblePos); // Assuming GetPosition() returns a direct reference or JS-managed copy

      const distSq = distVector.LengthSquared();

      if (distSq < radiusSq) {
        let impulse: any;
        const dist = Math.sqrt(distSq);
        if (dist === 0) {
          const randomAngle = Math.random() * 2 * Math.PI;
          impulse = new this.Box2DInstance.b2Vec2(force * Math.cos(randomAngle), force * Math.sin(randomAngle));
        } else {
          distVector.Normalize(); // Modifies distVector in-place
          const power = 1 - dist / radius;
          impulse = new this.Box2DInstance.b2Vec2(
            distVector.get_x() * force * power,
            distVector.get_y() * force * power,
          );
        }
        body.ApplyLinearImpulseToCenter(impulse, true);
        this.destroyObject(impulse);
      }
      this.destroyObject(distVector);
    }
    this.destroyObject(center);
  }

  start(): void {
    if (!this.world) return;
    for (const key in this.marbleMap) {
      const marbleBody = this.marbleMap[key];
      marbleBody.SetAwake(true);
      marbleBody.SetEnabled(true);
    }
  }

  step(deltaSeconds: number): void {
    if (!this.initialized || !this.world) {
      return;
    }

    // Destroy bodies marked for deletion in the previous step or by other logic
    this.deleteCandidates.forEach((body) => {
      this.world.DestroyBody(body);
    });
    this.deleteCandidates = [];

    this.world.Step(deltaSeconds, 6, 2); // velocityIterations, positionIterations

    // Process entities that might expire or be removed due to contact
    for (let i = this.entities.length - 1; i >= 0; i--) {
      const entity = this.entities[i];
      if (entity.life !== undefined && entity.life !== null && entity.life > 0) { // life가 undefined일 수 있으므로 체크 추가
        let contactEdge = entity.body.GetContactList();
        let shouldRemove = false;
        while (contactEdge) {
          if (contactEdge.get_contact().IsTouching()) {
            shouldRemove = true;
            break;
          }
          contactEdge = contactEdge.get_next();
        }

        if (shouldRemove) {
          this.deleteCandidates.push(entity.body);
          this.entities.splice(i, 1);
        }
      }
    }
  }

  public destroy(): void {
    // console.log('Destroying Box2dPhysics...');
    if (this.world) {
      this.clearMarbles();
      this.clearEntities();

      // If Box2D provides a way to destroy the world itself.
      // This is highly dependent on the specific Box2D WASM wrapper.
      // For example, if `this.Box2D.destroy(this.world)` is available:
      // this.destroyObject(this.world);
      this.world = null as any;
    }

    if (this.gravity) {
      // this.destroyObject(this.gravity); // If gravity was `new` and needs destruction
      this.gravity = null as any;
    }

    // If the Box2D module itself has a shutdown or cleanup method
    // if (this.Box2DInstance && typeof this.Box2DInstance.Exit === 'function') {
    // this.Box2D.Exit(); // Or similar cleanup if provided
    // }
    this.Box2DInstance = null as any;
    this.initialized = false;
    this.marbleMap = {};
    this.entities = [];
    this.deleteCandidates = [];
    // console.log('Box2dPhysics destroyed.');
  }
}
