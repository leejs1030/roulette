import { MapEntity } from './types/MapEntity.type';

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
          type: 'polyline',
          points: [
            [16.5, -300],
            [9.25, -300],
            [9.25, 8.5],
            [2, 19.25],
            [2, 26],
            [9.75, 30],
            [9.75, 33.5],
            [1.25, 41],
            [1.25, 53.75],
            [8.25, 58.75],
            [8.25, 63],
            [9.25, 64],
            [8.25, 65],
            [8.25, 99.25],
            [15.1, 106.75],
            [15.1, 111.75],
          ],
          rotation: 0,
        },
        type: 'static',
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [16.5, -300],
            [16.5, 9.25],
            [9.5, 20],
            [9.5, 22.5],
            [17.5, 26],
            [17.5, 33.5],
            [24, 38.5],
            [19, 45.5],
            [19, 55.5],
            [24, 59.25],
            [24, 63],
            [23, 64],
            [24, 65],
            [24, 100.5],
            [16, 106.75],
            [16, 111.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [12.75, 37.5],
            [7, 43.5],
            [7, 49.75],
            [12.75, 53.75],
            [12.75, 37.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [14.75, 37.5],
            [14.75, 43],
            [17.5, 40.25],
            [14.75, 37.5],
          ],
        },
      },
      {
        position: { x: 15.5, y: 30 },
        shape: { type: 'box', width: 0.4, height: 0.4, rotation: -45 },
        type: 'static',
        props: { density: 1, angularVelocity: 0, restitution: 1 },
      },
      {
        position: { x: 15.5, y: 32 },
        type: 'static',
        shape: { type: 'box', width: 0.4, height: 0.4, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.5, y: 28 },
        type: 'static',
        shape: { type: 'box', width: 0.4, height: 0.4, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 30 },
        type: 'static',
        shape: { type: 'box', width: 0.4, height: 0.4, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 32 },
        type: 'static',
        shape: { type: 'box', width: 0.4, height: 0.4, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.5, y: 28 },
        type: 'static',
        shape: { type: 'box', width: 0.4, height: 0.4, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.4, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11.3, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.1, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18.9, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.699999999999996, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.7, y: 66.6 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: 45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.4, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11.3, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13.2, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 15.1, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18.9, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.699999999999996, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.7, y: 69.1 },
        type: 'static',
        shape: { type: 'box', width: 1.2, height: 0.2, rotation: -45 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.5, y: 92 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.75, y: 92 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 16, y: 92 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.25, y: 92 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 92 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11, y: 95 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 14.25, y: 95 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 17.5, y: 95 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 20.75, y: 95 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 9.5, y: 98 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 12.75, y: 98 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 16, y: 98 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 19.25, y: 98 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 98 },
        type: 'static',
        shape: { type: 'box', width: 0.5, height: 0.5, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 8, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 12, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -3.5, restitution: 0 },
      },
      {
        position: { x: 16, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 20, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -3.5, restitution: 0 },
      },
      {
        position: { x: 24, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 3.5, restitution: 0 },
      },
      {
        position: { x: 14, y: 106.75 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
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
          type: 'polyline',
          rotation: 0,
          points: [
            [6.125, -191.5],
            [-1.125, -191.5],
            [-1.125, 108.5],
            [-1.125, 151.5],
            [-6.125, 158.5],
            [-1.125, 161.5],
            [-1.125, 179.5],
            [-0.9128679656440362, 179.7498817789222],
            [-1.125, 179.9997635578444],
            [-1.125, 183.5],
            [1.625, 188.5],
            [1.625, 191.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 16.25, y: -108.5 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [0.25, -191.5],
            [0.25, 158.5],
            [3.25, 162.5],
            [2.25, 164.5],
            [3.25, 166.5],
            [0.25, 169.5],
            [0.25, 179.5],
            [0.03786796564403616, 179.75925677892224],
            [0.25, 179.9997635578444],
            [0.25, 183.5],
            [-3.25, 188.5],
            [-3.25, 191.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 55.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [0, -3.25],
            [1, -1.75],
            [0, 0.25],
            [1, 2.25],
            [0, 3.25],
            [-1, 0.25],
            [0, -3.25],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 10.375, y: 48.25 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [-1.125, -2.75],
            [-4.125, 1.25],
            [-1.125, 2.75],
            [4.125, 2.25],
            [-1.125, -2.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 10.15625, y: 26.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [-0.90625, -0.75],
            [0.90625, 0.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 15.59375, y: 26.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [0.90625, -0.75],
            [-0.90625, 0.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 12.875, y: 29.25 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [-1.8125, 0.75],
            [0, -0.75],
            [1.8125, 0.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 10.15625, y: 31.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [-0.90625, -0.75],
            [0.90625, 0.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 15.59375, y: 31.75 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [0.90625, -0.75],
            [-0.90625, 0.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 12.875, y: 34.25 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [-1.8125, 0.75],
            [0, -0.75],
            [1.8125, 0.75],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 9.25, y: 18 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 11.25, y: 18 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 13.25, y: 18 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 15.25, y: 18 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 10.5, y: 19 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 12.5, y: 19 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 14.5, y: 19 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 19 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 9.25, y: 20 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 11.25, y: 20 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 13.25, y: 20 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 15.25, y: 20 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 10.5, y: 21 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 12.5, y: 21 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 14.5, y: 21 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 21 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 9.25, y: 22 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 11.25, y: 22 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 13.25, y: 22 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 15.25, y: 22 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 10.5, y: 23 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 12.5, y: 23 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 14.5, y: 23 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 23 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 0.3, height: 0.3 },
      },
      {
        type: 'static',
        position: { x: 9.400000000000002, y: 39 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 6, height: 6 },
      },
      {
        type: 'static',
        position: { x: 16.5, y: 43 },
        props: { angularVelocity: 0, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0.7853981633974483, width: 6, height: 6 },
      },
      {
        type: 'kinematic',
        position: { x: 10.7, y: 10 },
        props: { angularVelocity: 10, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 1, height: 0.2 },
      },
      {
        type: 'kinematic',
        position: { x: 14.7, y: 10 },
        props: { angularVelocity: -10, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 1, height: 0.2 },
      },
      {
        type: 'kinematic',
        position: { x: 12.7, y: 10 },
        props: { angularVelocity: 10, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 1, height: 0.2 },
      },
      {
        type: 'kinematic',
        position: { x: 10.7, y: 14 },
        props: { angularVelocity: -3, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 4, height: 0.2 },
      },
      {
        type: 'kinematic',
        position: { x: 14.7, y: 14 },
        props: { angularVelocity: 3, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 4, height: 0.2 },
      },
      {
        type: 'kinematic',
        position: { x: 11.2, y: 44 },
        props: { angularVelocity: -5, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 1, height: 0.2 },
      },
      {
        type: 'kinematic',
        position: { x: 10.3, y: 75 },
        props: { angularVelocity: 8, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 2, height: 0.2 },
      },
      {
        type: 'kinematic',
        position: { x: 15.462132034355964, y: 75 },
        props: { angularVelocity: -8, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 2, height: 0.2 },
      },
      {
        type: 'static',
        position: { x: 11, y: 65 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
      },
      {
        type: 'static',
        position: { x: 13, y: 65 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
      },
      {
        type: 'static',
        position: { x: 15, y: 65 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
      },
      {
        type: 'static',
        position: { x: 12, y: 67.5 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
      },
      {
        type: 'static',
        position: { x: 14, y: 67.5 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
      },
      {
        type: 'static',
        position: { x: 13, y: 69.77058813837772 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1.6 },
      },
      {
        type: 'static',
        position: { x: 10.7, y: 77.5 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1.6 },
      },
      {
        type: 'static',
        position: { x: 14.7, y: 77.5 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1.6 },
      },
      {
        type: 'static',
        position: { x: 12.625, y: 80 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 3 },
      },
      {
        type: 'static',
        position: { x: 12.625, y: 80 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 2.4 },
      },
      {
        type: 'kinematic',
        position: { x: 12.625, y: 56.00000000000001 },
        props: { angularVelocity: -8, density: 1, restitution: 0 },
        shape: { type: 'box', rotation: 0, width: 2, height: 0.2 },
      },
      {
        type: 'static',
        position: { x: 9.947604593262161, y: 62.59581680393866 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
      },
      {
        type: 'static',
        position: { x: 11.947604593262161, y: 62.59581680393866 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
      },
      {
        type: 'static',
        position: { x: 13.947604593262161, y: 62.59581680393866 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
      },
      {
        type: 'static',
        position: { x: 15.828283102570442, y: 62.59581680393866 },
        props: { angularVelocity: 0, density: 1, restitution: 1.5, life: 1 },
        shape: { type: 'circle', radius: 1 },
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
          type: 'polyline',
          rotation: 0,
          points: [
            [17, -300],
            [9, -300],
            [9, 8.5],
            [2, 15],
            [6, 61.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [7, 71],
            [9, 101],
            [8, 100.5],
            [6, 100],
            [5, 90],
            [4, 70],
            [7, 71],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [17, -300],
            [17, 8.5],
            [24, 15],
            [20, 61.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [19, 71],
            [17, 101],
            [18, 100.5],
            [20, 100],
            [21, 90],
            [22, 70],
            [19, 71],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [11, 88],
            [12, 90],
            [12, 112],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [15, 88],
            [14, 90],
            [14, 112],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [12, 102],
            [11, 103],
            [9, 104],
            [8, 104],
            [6, 103],
            [5, 102],
            [4, 100],
            [3, 90],
            [2, 70],
            [3, 65],
            [4, 63],
            [5, 62],
            [6, 61.5],
          ],
        },
      },
      {
        type: 'static',
        position: { x: 0, y: 0 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
        shape: {
          type: 'polyline',
          rotation: 0,
          points: [
            [14, 102],
            [15, 103],
            [17, 104],
            [18, 104],
            [20, 103],
            [21, 102],
            [22, 100],
            [23, 90],
            [24, 70],
            [23, 65],
            [22, 63],
            [21, 62],
            [20, 61.5],
          ],
        },
      },
      {
        position: { x: 13, y: 20 },
        type: 'static',
        shape: { type: 'box', width: 6, height: 6, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 13, y: 55 },
        type: 'static',
        shape: { type: 'box', width: 6, height: 6, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 8, y: 37 },
        type: 'static',
        shape: { type: 'box', width: 4, height: 4, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 18, y: 37 },
        type: 'static',
        shape: { type: 'box', width: 4, height: 4, rotation: 0.7853981633974483 },
        props: { density: 1, angularVelocity: 0, restitution: 0 },
      },
      {
        position: { x: 11, y: 12 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -3, restitution: 0 },
      },
      {
        position: { x: 15, y: 12 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 3, restitution: 0 },
      },
      {
        position: { x: 8, y: 104 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 6, y: 103 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 4, y: 100 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 3.5, y: 95 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 3, y: 90 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.75, y: 85 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.5, y: 80 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2.25, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 2, y: 70 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: -10, restitution: 0 },
      },
      {
        position: { x: 18, y: 104 },
        type: 'kinematic',
        shape: { type: 'box', width: 2, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 20, y: 103 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 22, y: 100 },
        type: 'kinematic',
        shape: { type: 'box', width: 3, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 22.5, y: 95 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23, y: 90 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.25, y: 85 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.5, y: 80 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 23.75, y: 75 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
      {
        position: { x: 24, y: 70 },
        type: 'kinematic',
        shape: { type: 'box', width: 4, height: 0.2, rotation: 0 },
        props: { density: 1, angularVelocity: 10, restitution: 0 },
      },
    ],
  },
];
