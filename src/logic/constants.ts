export const keyofBodies = ["lagrangeTriangle", "eightShape", "brouckeStable", "superFigureEight"] as const;
export type BodiesExample = (typeof keyofBodies)[number];

export type Bodies = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
}[];
