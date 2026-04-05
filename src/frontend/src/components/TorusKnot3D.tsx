import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function TorusKnotMesh() {
  const meshRef = useRef<Mesh>(null);
  const wireRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.15;
      wireRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <>
      {/* Main glass torus knot */}
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1.2, 0.38, 200, 32, 2, 3]} />
        <meshPhysicalMaterial
          color="#4422aa"
          roughness={0.08}
          metalness={0.9}
          transmission={0.3}
          thickness={0.5}
          envMapIntensity={2}
          iridescence={1}
          iridescenceIOR={1.8}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive="#1a0060"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Wireframe neon overlay */}
      <mesh ref={wireRef}>
        <torusKnotGeometry args={[1.22, 0.39, 80, 16, 2, 3]} />
        <meshBasicMaterial
          color="#3EA6FF"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </>
  );
}

export default function TorusKnot3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Ambient */}
          <ambientLight intensity={0.3} />

          {/* Blue key light */}
          <pointLight position={[3, 3, 3]} intensity={80} color="#3EA6FF" />

          {/* Violet fill light */}
          <pointLight position={[-3, -2, 2]} intensity={60} color="#8B5CF6" />

          {/* Cyan rim light */}
          <pointLight position={[0, -4, -2]} intensity={40} color="#6FE7FF" />

          <TorusKnotMesh />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
