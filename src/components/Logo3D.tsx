"use client";

import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const EMBLEM_SRC = "/logo-emblem.png";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function EmblemPlaque({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, EMBLEM_SRC);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  const aspect = texture.image ? texture.image.width / texture.image.height : 432 / 408;
  const height = 2.3;
  const width = height * aspect;
  const depth = 0.16;

  const frontMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.4,
        metalness: 0.35,
        roughness: 0.35,
        side: THREE.FrontSide,
      }),
    [texture]
  );

  const edgeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#8fa3ba",
        metalness: 0.8,
        roughness: 0.3,
      }),
    []
  );

  const materials = useMemo(
    () => [edgeMaterial, edgeMaterial, edgeMaterial, edgeMaterial, frontMaterial, frontMaterial],
    [edgeMaterial, frontMaterial]
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    if (reducedMotion) {
      groupRef.current.rotation.y = 0.5;
      return;
    }
    groupRef.current.rotation.y += delta * 0.55;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.09;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh material={materials}>
        <boxGeometry args={[width, height, depth]} />
      </mesh>
    </group>
  );
}

export default function Logo3D() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 38 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[2.5, 3, 4]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-2.5, -1.5, -4]} intensity={0.9} color="#dbe7f5" />
        <pointLight position={[-3, -1.5, 2]} intensity={12} color="#0088ff" />
        <pointLight position={[3, 2, -1]} intensity={6} color="#b8c5d6" />
        <pointLight position={[0, 0, -4]} intensity={8} color="#0088ff" />
        <Suspense fallback={null}>
          <EmblemPlaque reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
