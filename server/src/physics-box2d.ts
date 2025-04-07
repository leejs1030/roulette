import { IPhysics } from './IPhysics';
import { StageDef } from './data/maps';
import {
  b2World,
  b2Vec2,
  b2Body,
  b2BodyDef,
  b2FixtureDef,
  b2PolygonShape,
  b2EdgeShape,
  b2CircleShape,
  b2BodyType,
} from '@flyover/box2d';
import { MapEntity, MapEntityState } from './types/MapEntity.type';

export class Box2dPhysics implements IPhysics {
  private gravity: b2Vec2;
  private world: b2World;

  private marbleMap: { [id: number]: b2Body } = {};
  private entities: ({ body: b2Body } & MapEntityState)[] = [];

  private deleteCandidates: b2Body[] = [];

  constructor() {
    this.gravity = new b2Vec2(0, 10);
    this.world = new b2World(this.gravity);
    console.log('@flyover/box2d ready');
  }

  // init is no longer needed as initialization happens in constructor
  async init(): Promise<void> {
    // This method can be removed or left empty if IPhysics requires it.
    // For now, let's keep it empty to satisfy the interface if needed.
    return Promise.resolve();
  }


  clear(): void {
    this.clearEntities();
  }

  clearMarbles(): void {
    Object.values(this.marbleMap).forEach((body) => {
      this.world.DestroyBody(body);
    });
    this.marbleMap = {};
  }

  createStage(stage: StageDef): void {
    this.createEntities(stage.entities);
  }

  createEntities(entities?: MapEntity[]) {
    if (!entities) return;

    const bodyTypes = {
      static: b2BodyType.b2_staticBody,
      kinematic: b2BodyType.b2_kinematicBody,
    } as const;

    entities.forEach((entity) => {
      const bodyDef = new b2BodyDef();
      bodyDef.type = bodyTypes[entity.type]; // Use direct assignment or SetType if available
      const body = this.world.CreateBody(bodyDef);

      const fixtureDef = new b2FixtureDef();
      fixtureDef.density = entity.props.density;
      fixtureDef.restitution = entity.props.restitution;

      let shape;
      switch (entity.shape.type) {
        case 'box':
          shape = new b2PolygonShape();
          // Assuming SetAsBox takes center and angle separately in @flyover/box2d
          // Or perhaps just width/height if center is implicitly (0,0) relative to body
          // Let's assume width/height for now, adjust if needed.
          shape.SetAsBox(entity.shape.width / 2, entity.shape.height / 2); // Box2D often uses half-width/height
          fixtureDef.shape = shape;
          body.CreateFixture(fixtureDef);
          break;
        case 'polyline':
          // b2EdgeShape is often used for static ground. For dynamic polylines, b2ChainShape might be needed.
          // Let's stick to b2EdgeShape for now, assuming it works similarly.
          for (let i = 0; i < entity.shape.points.length - 1; i++) {
            const p1 = entity.shape.points[i];
            const p2 = entity.shape.points[i + 1];
            const v1 = new b2Vec2(p1[0], p1[1]);
            const v2 = new b2Vec2(p2[0], p2[1]);
            const edgeShape = new b2EdgeShape(); // Create new shape for each segment
            edgeShape.Set(v1, v2); // Use Set instead of SetTwoSided
            // Set density to 0 for static edge shapes
            body.CreateFixture({ shape: edgeShape, density: 0 });
          }
          break;
        case 'circle':
          shape = new b2CircleShape();
          shape.m_radius = entity.shape.radius; // Use m_radius property assignment
          fixtureDef.shape = shape;
          body.CreateFixture(fixtureDef);
          break;
      }

      body.SetAngularVelocity(entity.props.angularVelocity);
      // Use SetTransformVec if SetTransform takes separate position and angle
      body.SetTransformVec(new b2Vec2(entity.position.x, entity.position.y), 0);
      this.entities.push({
        body,
        x: entity.position.x,
        y: entity.position.y,
        angle: 0,
        shape: entity.shape,
        life: entity.props.life ?? -1,
      });
    });
  }

  clearEntities() {
    this.entities.forEach((entity) => {
      this.world.DestroyBody(entity.body);
    });
    this.entities = [];
  }

  createMarble(id: number, x: number, y: number): void {
    const circleShape = new b2CircleShape(); // Remove this.Box2D.
    circleShape.m_radius = 0.25; // Use m_radius property

    const bodyDef = new b2BodyDef(); // Remove this.Box2D.
    bodyDef.type = b2BodyType.b2_dynamicBody; // Use b2BodyType enum
    bodyDef.position.Set(x, y); // Use position.Set

    const body = this.world.CreateBody(bodyDef);
    // Pass fixture definition object
    body.CreateFixture({ shape: circleShape, density: 1 + Math.random() });
    body.SetAwake(false);
    body.SetActive(false); // Use SetActive instead of SetEnabled
    this.marbleMap[id] = body;
  }

  shakeMarble(id: number): void {
    const body = this.marbleMap[id];
    if (body) {
      body.ApplyLinearImpulseToCenter(
        new b2Vec2(Math.random() * 10 - 5, Math.random() * 10 - 5), // Remove this.Box2D.
        true,
      );
    }
  }

  removeMarble(id: number): void {
    const marble = this.marbleMap[id];
    if (marble) {
      this.world.DestroyBody(marble);
      delete this.marbleMap[id];
    }
  }

  getMarbleIds(): number[] {
    return Object.keys(this.marbleMap).map(idStr => parseInt(idStr, 10));
  }

  getMarblePosition(id: number): { x: number; y: number; angle: number } {
    const marble = this.marbleMap[id];
    if (marble) {
      const pos = marble.GetPosition();
      return { x: pos.x, y: pos.y, angle: marble.GetAngle() };
    } else {
      return { x: 0, y: 0, angle: 0 };
    }
  }

  getEntities(): MapEntityState[] {
    // Return only serializable data needed by the frontend
    return this.entities.map((entity) => {
      const body = entity.body; // Get the body temporarily
      const position = body.GetPosition(); // Get position from body
      return {
        // Exclude the 'body' object itself
        x: position.x, // Get current x from body position
        y: position.y, // Get current y from body position
        angle: body.GetAngle(), // Get current angle from body
        shape: entity.shape, // Keep the original shape definition
        life: entity.life, // Keep the life property
      };
    });
  }

  impact(id: number): void {
    const src = this.marbleMap[id];
    if (!src) return;

    Object.values(this.marbleMap).forEach((body) => {
      if (body === src) return;

      // Manual vector subtraction
      const srcPos = src.GetPosition();
      const bodyPos = body.GetPosition();
      let distVector = new b2Vec2(bodyPos.x - srcPos.x, bodyPos.y - srcPos.y);

      const distSq = distVector.LengthSquared();

      if (distSq < 100) {
        distVector.Normalize();
        const power = 1 - distVector.Length() / 10;
        const scaleFactor = power * power * 5;
        // Manual scalar multiplication
        distVector = new b2Vec2(distVector.x * scaleFactor, distVector.y * scaleFactor);
        body.ApplyLinearImpulseToCenter(distVector, true);
      }
    });
  }

  start(): void {
    for (const key in this.marbleMap) {
      const marble = this.marbleMap[key];
      marble.SetAwake(true);
      marble.SetActive(true); // Use SetActive instead of SetEnabled
    }
  }

  step(deltaSeconds: number): void {
    this.deleteCandidates.forEach((body) => {
      this.world.DestroyBody(body);
    });
    this.deleteCandidates = [];

    this.world.Step(deltaSeconds, 6, 2);

    for (let i = this.entities.length - 1; i >= 0; i--) {
      const entity = this.entities[i];
      if (entity.life > 0) {
        // Check if contact list edge exists before accessing contact
        const edge = entity.body.GetContactList();
        if (edge && edge.contact && edge.contact.IsTouching()) {
          this.deleteCandidates.push(entity.body);
          this.entities.splice(i, 1);
        }
      }
    }
  }
}
