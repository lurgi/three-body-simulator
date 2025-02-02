const G_FORCE = 1; // 중력 상수 (단순화)

export function computeAcceleration(bodies: CelestialBody[]) {
  const accelerations = new Array(bodies.length).fill(null).map(() => ({ ax: 0, ay: 0 }));

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        const dx = bodies[j].x - bodies[i].x;
        const dy = bodies[j].y - bodies[i].y;
        const rSquared = dx * dx + dy * dy;

        if (rSquared < 1e-6) continue; // 너무 작은 거리에서 무한대 힘을 방지

        const r = Math.sqrt(rSquared);
        const force = (G_FORCE * bodies[j].mass) / rSquared;
        const ax = (force * dx) / r;
        const ay = (force * dy) / r;

        accelerations[i].ax += ax;
        accelerations[i].ay += ay;
      }
    }
  }
  return accelerations;
}
