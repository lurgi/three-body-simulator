const lagrangeTriangle = [
  { x: -0.5, y: -0.28867513459481287, vx: 0.37991784282579627, vy: -0.6580370064762463, mass: 1.0 },
  { x: 0.5, y: -0.28867513459481287, vx: 0.37991784282579627, vy: 0.6580370064762463, mass: 1.0 },
  { x: 0.0, y: 0.5773502691896257, vx: -0.7598356856515925, vy: 0.0, mass: 1.0 },
];

const eightShape = [
  { x: 0.97000436, y: -0.24308753, vx: 0.46620368, vy: 0.43236573, mass: 1 },
  { x: -0.97000436, y: 0.24308753, vx: 0.46620368, vy: 0.43236573, mass: 1 },
  { x: 0, y: 0, vx: -0.93240737, vy: -0.86473146, mass: 1 },
];

const brouckeStable = [
  { x: 1.5, y: 0.0, vx: 0.0, vy: 0.5, mass: 1.2 },
  { x: -1.5, y: 0.0, vx: 0.0, vy: -0.5, mass: 1.2 },
  { x: 0.0, y: 0.0, vx: 0.0, vy: 0, mass: 0.8 },
];

const superFigureEight = [
  { x: 1.015, y: -0.261, vx: 0.502, vy: 0.46, mass: 1.0 },
  { x: -1.015, y: 0.261, vx: 0.502, vy: 0.46, mass: 1.0 },
  { x: 0.0, y: 0.0, vx: -1.004, vy: -0.92, mass: 1.0 },
];

const bodiesExample = {
  lagrangeTriangle,
  eightShape,
  brouckeStable,
  superFigureEight,
};

export default bodiesExample;
