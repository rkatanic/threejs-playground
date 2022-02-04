import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const DistortedSphere = (): JSX.Element => {
  const Geometry = () => {
    const ref = useRef<any>();
    useFrame(() => {});

    return (
      <Sphere ref={ref} visible args={[2.2, 100, 100]}>
        <MeshDistortMaterial
          wireframe
          color={"hsl(0,0%,25%)"}
          attach="material"
          distort={0.4}
          speed={3}
        />
      </Sphere>
    );
  };
  return (
    <Canvas className="three-js-canvas" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 6, 4]} intensity={2} />
      <Suspense fallback={null}>
        <Geometry />
      </Suspense>
    </Canvas>
  );
};

export default DistortedSphere;
