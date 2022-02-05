import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import panorama from "../../assets/images/panorama.jpeg";

const ThreeSixtyView = (): JSX.Element => {
  const Geometry = (): JSX.Element => {
    const texture = useLoader(THREE.TextureLoader, panorama);

    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
        <meshBasicMaterial
          attach="material"
          map={texture}
          side={THREE.BackSide}
        />
      </mesh>
    );
  };

  return (
    <Canvas className="three-js-canvas" camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls enableZoom={false} rotateSpeed={0.5} />
      <Suspense fallback={null}>
        <Geometry />
      </Suspense>
    </Canvas>
  );
};

export default ThreeSixtyView;
