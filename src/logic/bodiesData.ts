const lagrange = [
  { x: -0.5, y: -0.28867513459481287, vx: 0.37991784282579627, vy: -0.6580370064762463, mass: 1.0 },
  { x: 0.5, y: -0.28867513459481287, vx: 0.37991784282579627, vy: 0.6580370064762463, mass: 1.0 },
  { x: 0.0, y: 0.5773502691896257, vx: -0.7598356856515925, vy: 0.0, mass: 1.0 },
];

const eightShape = [
  { x: 0.97000436, y: -0.24308753, vx: 0.46620368, vy: 0.43236573, mass: 1 },
  { x: -0.97000436, y: 0.24308753, vx: 0.46620368, vy: 0.43236573, mass: 1 },
  { x: 0, y: 0, vx: -0.93240737, vy: -0.86473146, mass: 1 },
];

const brouckeHenonHadjidemetriou = [
  { x: 1.5, y: 0.0, vx: 0.0, vy: 0.5, mass: 1.2 },
  { x: -1.5, y: 0.0, vx: 0.0, vy: -0.5, mass: 1.2 },
  { x: 0.0, y: 0.0, vx: 0.0, vy: 0, mass: 0.8 },
];

const bodiesExample = {
  lagrange,
  eightShape,
  brouckeHenonHadjidemetriou,
} as const;

export type BodiesExample = keyof typeof bodiesExample;
export const keyofBodies = Object.keys(bodiesExample) as BodiesExample[];
export default bodiesExample;
