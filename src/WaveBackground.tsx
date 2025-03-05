import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WavePlane: React.FC = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x * 5 + time) * 0.5 + Math.cos(y * 5 + time) * 0.5;
      }

      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={mesh} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <meshStandardMaterial color="#1e293b" wireframe />
    </mesh>
  );
};

const WaveBackground: React.FC = () => {
  return (
    <Canvas
      className="absolute inset-0 -z-10"
      camera={{ position: [0, 5, 10], fov: 60 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <WavePlane />
    </Canvas>
  );
};

export default WaveBackground;
