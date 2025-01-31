const G_FORCE = 1; // 중력 상수 (단순화를 위해 1로 설정)

export function computeAcceleration(bodies: CelestialBody[]) {
  const accelerations = bodies.map(() => ({ ax: 0, ay: 0 }));

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        const dx = bodies[j].x - bodies[i].x;
        const dy = bodies[j].y - bodies[i].y;
        const r = Math.sqrt(dx * dx + dy * dy) + 1e-9; // 0으로 나누는 걸 방지
        const force = (G_FORCE * bodies[j].mass) / (r * r);
        accelerations[i].ax += (force * dx) / r;
        accelerations[i].ay += (force * dy) / r;
      }
    }
  }
  return accelerations;
}
