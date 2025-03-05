import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const BubblesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // ✅ Set up Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // ✅ Handle window resizing
    const resizeCanvas = () => {
      camera.left = -window.innerWidth / 2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = -window.innerHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resizeCanvas);

    // ✅ Create Floating 2D Circles
    const bubbles: { mesh: THREE.Mesh; velocity: THREE.Vector2 }[] = [];
    const bubbleGeometry = new THREE.CircleGeometry(20, 32); // ✅ 2D Circle Geometry

    // ✅ Neon Green Outline with Transparent Fill
    const bubbleMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00, // Neon green
      transparent: true,
      opacity: 0.1, // Make the inside transparent
      wireframe: true, // ✅ Keeps the outline effect
    });

    for (let i = 0; i < 100; i++) { // ✅ Increased bubble count
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      bubble.position.set(
        (Math.random() - 0.5) * window.innerWidth,
        (Math.random() - 0.5) * window.innerHeight,
        0
      );

      // ✅ Random velocity for movement
      const velocity = new THREE.Vector2(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );

      scene.add(bubble);
      bubbles.push({ mesh: bubble, velocity });
    }

    // ✅ Animate Bubbles (Move & Bounce)
    const animate = () => {
      requestAnimationFrame(animate);

      bubbles.forEach(({ mesh, velocity }) => {
        mesh.position.x += velocity.x;
        mesh.position.y += velocity.y;

        // ✅ Bounce off screen edges
        if (mesh.position.x > window.innerWidth / 2 || mesh.position.x < -window.innerWidth / 2) {
          velocity.x *= -1;
        }
        if (mesh.position.y > window.innerHeight / 2 || mesh.position.y < -window.innerHeight / 2) {
          velocity.y *= -1;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeChild(renderer.domElement);
      bubbles.forEach(({ mesh }) => scene.remove(mesh));
      bubbleGeometry.dispose();
      bubbleMaterial.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0, // ✅ Keeps the bubbles behind UI elements
        pointerEvents: "none", // ✅ Allows clicking on UI elements
      }}
    />
  );
};

export default BubblesBackground;
