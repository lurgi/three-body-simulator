import bodiesExample from "./bodiesData";
import { computeAcceleration } from "./symplectic-leapfrog-integrator";

const DELAY_TIME = 0.005;
const listeners = new Set();

let currentBodies = "lagrangeTriangle";
let bodies = JSON.parse(JSON.stringify(bodiesExample[currentBodies]));

export function updateBodies(dt = DELAY_TIME) {
  const halfDt = dt / 2;

  // (1) 속도 절반만 업데이트
  let a = computeAcceleration(bodies);
  for (let i = 0; i < bodies.length; i++) {
    bodies[i].vx += a[i].ax * halfDt;
    bodies[i].vy += a[i].ay * halfDt;
  }

  // (2) 위치 업데이트
  for (let i = 0; i < bodies.length; i++) {
    bodies[i].x += bodies[i].vx * dt;
    bodies[i].y += bodies[i].vy * dt;
  }

  // (3) 속도 나머지 절반 업데이트
  a = computeAcceleration(bodies);
  for (let i = 0; i < bodies.length; i++) {
    bodies[i].vx += a[i].ax * halfDt;
    bodies[i].vy += a[i].ay * halfDt;
  }

  // (4) 상태 업데이트를 위한 Listener 실행
  bodies = [...bodies];
  listeners.forEach((listener) => listener());
}

export function bodiesSubscribe(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getBodiesSnapshot() {
  return bodies;
}

export function changeBodies(bodiesKey) {
  currentBodies = bodiesKey;
  bodies = JSON.parse(JSON.stringify(bodiesExample[currentBodies]));
  listeners.forEach((listener) => listener());
}
