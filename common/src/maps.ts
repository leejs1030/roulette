import * as protoRoot from './proto/generated/game-state';

type VectorLike = { x: number; y: number };

type EntityPhysicalProps = {
  density: number;
  restitution: number;
  angularVelocity: number;
  life?: number;
};

export interface MapEntity {
  position: VectorLike;
  type: 'static' | 'kinematic';
  shape: {
    boxShape?: {
      type: protoRoot.gamestate.EntityShapeType;
      width: number;
      height: number;
      rotation: number;
    };
    circleShape?: {
      type: protoRoot.gamestate.EntityShapeType;
      radius: number;
    };
    polylineShape?: {
      type: protoRoot.gamestate.EntityShapeType;
      rotation: number;
      points: { x: number; y: number }[];
    };
  };
  props: EntityPhysicalProps;
}

export type StageDef = {
  title: string;
  entities?: MapEntity[];
  goalY: number;
  zoomY: number;
};

export const stages: StageDef[] = [
  {
    title: 'Wheel of fortune',
    goalY: 111,
    zoomY: 106.75,
    entities: [
      {
        position: { x: 0, y: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            points: [
              { x: 16.5, y: -300 },
              { x: 9.25, y: -300 },
              { x: 9.25, y: 8.5 },
              { x: 2, y: 19.25 },
              { x: 2, y: 26 },
              { x: 9.75, y: 30 },
              { x: 9.75, y: 33.5 },
              { x: 1.25, y: 41 },
              { x: 1.25, y: 53.75 },
              { x: 8.25, y: 58.75 },
              { x: 8.25, y: 63 },
              { x: 9.25, y: 64 },
              { x: 8.25, y: 65 },
              { x: 8.25, y: 99.25 },
              { x: 15.1, y: 106.75 },
              { x: 15.1, y: 111.75 },
            ],
            rotation: 0,
          },
        },
        type: 'static',
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 16.5, y: -300 },
              { x: 16.5, y: 9.25 },
              { x: 9.5, y: 20 },
              { x: 9.5, y: 22.5 },
              { x: 17.5, y: 26 },
              { x: 17.5, y: 33.5 },
              { x: 24, y: 38.5 },
              { x: 19, y: 45.5 },
              { x: 19, y: 55.5 },
              { x: 24, y: 59.25 },
              { x: 24, y: 63 },
              { x: 23, y: 64 },
              { x: 24, y: 65 },
              { x: 24, y: 100.5 },
              { x: 16, y: 106.75 },
              { x: 16, y: 111.75 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 12.75, y: 37.5 },
              { x: 7, y: 43.5 },
              { x: 7, y: 49.75 },
              { x: 12.75, y: 53.75 },
              { x: 12.75, y: 37.5 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 14.75, y: 37.5 },
              { x: 14.75, y: 43 },
              { x: 17.5, y: 40.25 },
              { x: 14.75, y: 37.5 },
            ],
          },
        },
      },
      {
        position: { x: 15.5, y: 30 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.4, height: 0.4, rotation: -45 } },
        type: 'static',
        props: { density: 1, angularVelocity: 0, restitution: 1 },
      },
      {
        position: { x: 15.5, y: 32 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.4, height: 0.4, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.5, y: 28 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.4, height: 0.4, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 30 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.4, height: 0.4, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 32 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.4, height: 0.4, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 28 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.4, height: 0.4, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.4, y: 66.6 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: 45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11.3, y: 66.6 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: 45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 66.6 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: 45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.1, y: 66.6 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: 45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17, y: 66.6 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: 45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18.9, y: 66.6 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: 45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.699999999999996, y: 66.6 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: 45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.7, y: 66.6 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: 45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.4, y: 69.1 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11.3, y: 69.1 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 69.1 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.1, y: 69.1 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17, y: 69.1 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18.9, y: 69.1 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.699999999999996, y: 69.1 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.7, y: 69.1 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 1.2, height: 0.2, rotation: -45 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.5, y: 92 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.75, y: 92 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 16, y: 92 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.25, y: 92 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 92 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11, y: 95 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 14.25, y: 95 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17.5, y: 95 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.75, y: 95 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.5, y: 98 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.75, y: 98 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 16, y: 98 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.25, y: 98 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 98 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 0.5, height: 0.5, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 8, y: 75 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 12, y: 75 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -3.5, restitution: 0 },
      },
      {
        position: { x: 16, y: 75 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 20, y: 75 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -3.5, restitution: 0 },
      },
      {
        position: { x: 24, y: 75 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 14, y: 106.75 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -1.2, restitution: 0 },
      },
    ],
  },
  {
    title: 'BubblePop',
    goalY: 83,
    zoomY: 78,
    entities: [
      {
        type: 'static',
        position: { x: 10.375, y: -108.5 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 6.125, y: -191.5 },
              { x: -1.125, y: -191.5 },
              { x: -1.125, y: 108.5 },
              { x: -1.125, y: 151.5 },
              { x: -6.125, y: 158.5 },
              { x: -1.125, y: 161.5 },
              { x: -1.125, y: 179.5 },
              { x: -0.9128679656440362, y: 179.7498817789222 },
              { x: -1.125, y: 179.9997635578444 },
              { x: -1.125, y: 183.5 },
              { x: 1.625, y: 188.5 },
              { x: 1.625, y: 191.5 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 16.25, y: -108.5 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 0.25, y: -191.5 },
              { x: 0.25, y: 158.5 },
              { x: 3.25, y: 162.5 },
              { x: 2.25, y: 164.5 },
              { x: 3.25, y: 166.5 },
              { x: 0.25, y: 169.5 },
              { x: 0.25, y: 179.5 },
              { x: 0.03786796564403616, y: 179.75925677892224 },
              { x: 0.25, y: 179.9997635578444 },
              { x: 0.25, y: 183.5 },
              { x: -3.25, y: 188.5 },
              { x: -3.25, y: 191.5 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 55.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 0, y: -3.25 },
              { x: 1, y: -1.75 },
              { x: 0, y: 0.25 },
              { x: 1, y: 2.25 },
              { x: 0, y: 3.25 },
              { x: -1, y: 0.25 },
              { x: 0, y: -3.25 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 10.375, y: 48.25 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: -1.125, y: -2.75 },
              { x: -4.125, y: 1.25 },
              { x: -1.125, y: 2.75 },
              { x: 4.125, y: 2.25 },
              { x: -1.125, y: -2.75 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 10.15625, y: 26.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: -0.90625, y: -0.75 },
              { x: 0.90625, y: 0.75 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 15.59375, y: 26.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 0.90625, y: -0.75 },
              { x: -0.90625, y: 0.75 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 12.875, y: 29.25 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: -1.8125, y: 0.75 },
              { x: 0, y: -0.75 },
              { x: 1.8125, y: 0.75 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 10.15625, y: 31.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: -0.90625, y: -0.75 },
              { x: 0.90625, y: 0.75 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 15.59375, y: 31.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 0.90625, y: -0.75 },
              { x: -0.90625, y: 0.75 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 12.875, y: 34.25 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: -1.8125, y: 0.75 },
              { x: 0, y: -0.75 },
              { x: 1.8125, y: 0.75 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 9.25, y: 18 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 11.25, y: 18 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 13.25, y: 18 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 15.25, y: 18 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 10.5, y: 19 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 12.5, y: 19 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 14.5, y: 19 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 19 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 9.25, y: 20 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 11.25, y: 20 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 13.25, y: 20 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 15.25, y: 20 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 10.5, y: 21 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 12.5, y: 21 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 14.5, y: 21 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 21 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 9.25, y: 22 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 11.25, y: 22 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 13.25, y: 22 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 15.25, y: 22 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 10.5, y: 23 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 12.5, y: 23 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 14.5, y: 23 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 23 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 0.3, height: 0.3 } },
      },
      {
        type: 'static',
        position: { x: 9.400000000000002, y: 39 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 6, height: 6 } },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 43 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0.7853981633974483, width: 6, height: 6 } },
      },
      {
        type: 'kinematic',
        position: { x: 10.7, y: 10 },
        props: { angularVelocity: 10, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 1, height: 0.2 } },
      },
      {
        type: 'kinematic',
        position: { x: 14.7, y: 10 },
        props: { angularVelocity: -10, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 1, height: 0.2 } },
      },
      {
        type: 'kinematic',
        position: { x: 12.7, y: 10 },
        props: { angularVelocity: 10, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 1, height: 0.2 } },
      },
      {
        type: 'kinematic',
        position: { x: 10.7, y: 14 },
        props: { angularVelocity: -3, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 4, height: 0.2 } },
      },
      {
        type: 'kinematic',
        position: { x: 14.7, y: 14 },
        props: { angularVelocity: 3, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 4, height: 0.2 } },
      },
      {
        type: 'kinematic',
        position: { x: 11.2, y: 44 },
        props: { angularVelocity: -5, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 1, height: 0.2 } },
      },
      {
        type: 'kinematic',
        position: { x: 10.3, y: 75 },
        props: { angularVelocity: 8, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 2, height: 0.2 } },
      },
      {
        type: 'kinematic',
        position: { x: 15.462132034355964, y: 75 },
        props: { angularVelocity: -8, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 2, height: 0.2 } },
      },
      {
        type: 'static',
        position: { x: 11, y: 65 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
      {
        type: 'static',
        position: { x: 13, y: 65 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
      {
        type: 'static',
        position: { x: 15, y: 65 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
      {
        type: 'static',
        position: { x: 12, y: 67.5 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
      {
        type: 'static',
        position: { x: 14, y: 67.5 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
      {
        type: 'static',
        position: { x: 13, y: 69.77058813837772 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1.6 } },
      },
      {
        type: 'static',
        position: { x: 10.7, y: 77.5 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1.6 } },
      },
      {
        type: 'static',
        position: { x: 14.7, y: 77.5 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1.6 } },
      },
      {
        type: 'static',
        position: { x: 12.625, y: 80 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 3 } },
      },
      {
        type: 'static',
        position: { x: 12.625, y: 80 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 2.4 } },
      },
      {
        type: 'kinematic',
        position: { x: 12.625, y: 56.00000000000001 },
        props: { angularVelocity: -8, density: 1, restitution: 0 },
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, rotation: 0, width: 2, height: 0.2 } },
      },
      {
        type: 'static',
        position: { x: 9.947604593262161, y: 62.59581680393866 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
      {
        type: 'static',
        position: { x: 11.947604593262161, y: 62.59581680393866 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
      {
        type: 'static',
        position: { x: 13.947604593262161, y: 62.59581680393866 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
      {
        type: 'static',
        position: { x: 15.828283102570442, y: 62.59581680393866 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { circleShape: { type: protoRoot.gamestate.EntityShapeType.circle, radius: 1 } },
      },
    ],
  },
  {
    title: 'Pot of greed',
    goalY: 111,
    zoomY: 110,
    entities: [
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 17, y: -300 },
              { x: 9, y: -300 },
              { x: 9, y: 8.5 },
              { x: 2, y: 15 },
              { x: 6, y: 61.5 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 7, y: 71 },
              { x: 9, y: 101 },
              { x: 8, y: 100.5 },
              { x: 6, y: 100 },
              { x: 5, y: 90 },
              { x: 4, y: 70 },
              { x: 7, y: 71 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 17, y: -300 },
              { x: 17, y: 8.5 },
              { x: 24, y: 15 },
              { x: 20, y: 61.5 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 19, y: 71 },
              { x: 17, y: 101 },
              { x: 18, y: 100.5 },
              { x: 20, y: 100 },
              { x: 21, y: 90 },
              { x: 22, y: 70 },
              { x: 19, y: 71 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 11, y: 88 },
              { x: 12, y: 90 },
              { x: 12, y: 112 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 15, y: 88 },
              { x: 14, y: 90 },
              { x: 14, y: 112 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 12, y: 102 },
              { x: 11, y: 103 },
              { x: 9, y: 104 },
              { x: 8, y: 104 },
              { x: 6, y: 103 },
              { x: 5, y: 102 },
              { x: 4, y: 100 },
              { x: 3, y: 90 },
              { x: 2, y: 70 },
              { x: 3, y: 65 },
              { x: 4, y: 63 },
              { x: 5, y: 62 },
              { x: 6, y: 61.5 },
            ],
          },
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          polylineShape: {
            type: protoRoot.gamestate.EntityShapeType.polyline,
            rotation: 0,
            points: [
              { x: 14, y: 102 },
              { x: 15, y: 103 },
              { x: 17, y: 104 },
              { x: 18, y: 104 },
              { x: 20, y: 103 },
              { x: 21, y: 102 },
              { x: 22, y: 100 },
              { x: 23, y: 90 },
              { x: 24, y: 70 },
              { x: 23, y: 65 },
              { x: 22, y: 63 },
              { x: 21, y: 62 },
              { x: 20, y: 61.5 },
            ],
          },
        },
      },
      {
        position: { x: 13, y: 20 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 6, height: 6, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13, y: 55 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 6, height: 6, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 8, y: 37 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 4, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18, y: 37 },
        type: 'static',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 4, rotation: 0.7853981633974483 } },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11, y: 12 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -3, restitution: 0 },
      },
      {
        position: { x: 15, y: 12 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 3, restitution: 0 },
      },
      {
        position: { x: 8, y: 104 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 2, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 6, y: 103 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 3, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 4, y: 100 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 3, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 3.5, y: 95 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 3, y: 90 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.75, y: 85 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.5, y: 80 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.25, y: 75 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2, y: 70 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 18, y: 104 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 2, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 20, y: 103 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 3, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 22, y: 100 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 3, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 95 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23, y: 90 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.25, y: 85 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.5, y: 80 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.75, y: 75 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 24, y: 70 },
        type: 'kinematic',
        shape: { boxShape: { type: protoRoot.gamestate.EntityShapeType.box, width: 4, height: 0.2, rotation: 0 } },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
    ],
  },
];
