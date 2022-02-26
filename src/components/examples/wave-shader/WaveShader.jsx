import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import "./WaveMaterial";
import painting from "../../../assets/images/painting.jpg";

const WaveShader = () => {
  const Geometry = () => {
    const material = useRef();
    const [texture] = useLoader(THREE.TextureLoader, [painting]);

    useFrame(({ clock }) => {
      if (material.current) {
        material.current.uniforms.uTime.value = clock.getElapsedTime() * 3;
      }
    });
    return (
      <mesh>
        <planeGeometry args={[1, 1.25, 200, 200]} />
        <customMaterial ref={material} attach="material" map={texture} />
      </mesh>
    );
  };

  return (
    <Canvas className="three-js-canvas" camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Geometry />
      </Suspense>
    </Canvas>
  );
};

export default WaveShader;
