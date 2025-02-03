import { useEffect, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";
import { bodiesSubscribe, getBodiesSnapshot, updateBodies } from "./logic/CelestialBodies";
import { Bodies } from "./logic/constants";

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const celestialMeshes: THREE.Mesh[] = [];

// const light = new THREE.PointLight(0xffffff, 1);
// light.position.set(10, 10, 10);
// scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff));

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

Array(3)
  .fill(null)
  .forEach(() => {
    const geometry = new THREE.SphereGeometry(0.03, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    celestialMeshes.push(sphere);
  });

export default function Simulator() {
  const mountRef = useRef<HTMLDivElement>(null);
  const bodies = useSyncExternalStore<Bodies>(bodiesSubscribe, getBodiesSnapshot);
  const resizeAnimationFrameIdRef = useRef<number | null>(null);
  const updateBodiesAnimationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    mountRef.current.appendChild(renderer.domElement);
    const setRendererSize = () => {
      const { width, height } = mountRef.current?.getBoundingClientRect() || { width: 0, height: 0 };
      resizeAnimationFrameIdRef.current = requestAnimationFrame(() => {
        renderer.setSize(width, height);
        renderer.render(scene, camera);
      });
    };
    setRendererSize();

    const resizeObserver = new ResizeObserver(setRendererSize);
    resizeObserver.observe(mountRef.current);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      resizeObserver.disconnect();
      if (resizeAnimationFrameIdRef.current) cancelAnimationFrame(resizeAnimationFrameIdRef.current);
    };
  }, []);

  useEffect(() => {
    bodies.forEach((body, i) => {
      celestialMeshes[i].position.set(body.x, body.y, 0);
    });

    renderer.render(scene, camera);

    updateBodiesAnimationFrameIdRef.current = requestAnimationFrame(() => {
      updateBodies();
    });

    return () => {
      renderer.dispose();
      if (updateBodiesAnimationFrameIdRef.current) cancelAnimationFrame(updateBodiesAnimationFrameIdRef.current);
    };
  }, [bodies]);
  return <div ref={mountRef} className="w-full h-full" />;
}
