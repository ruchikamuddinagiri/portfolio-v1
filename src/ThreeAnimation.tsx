import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
      opacity: 0.2,
      transparent: true,
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = Math.PI / 2; 
    plane.position.y = 5;
    scene.add(plane);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 5);
    scene.add(ambientLight, directionalLight);

    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    const clock = new THREE.Clock();
    
    const animateWaves = () => {
      const time = clock.getElapsedTime();
      const positionAttribute = geometry.attributes.position;
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        positionAttribute.setZ(i, Math.sin(x * 2 + time) + Math.cos(y * 2 + time));
      }
      positionAttribute.needsUpdate = true;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      animateWaves();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ThreeAnimation;
