import { MeshReflectorMaterial, Stage, OrbitControls } from "@react-three/drei";
import { Suspense, useLayoutEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import file from "./car.glb";

import "./Model.css";

const Model = () => {
  const colors = [
    { key: "purple", value: "#6e34eb" },
    { key: "red", value: "#ff4545" },
    { key: "orange", value: "#ff9436" },
    { key: "green", value: "#43db3d" },
    { key: "blue", value: "#59b7ff" },
  ];

  const [currentColor, setCurrentColor] = useState(colors[0]);

  const Car = () => {
    const { scene, materials } = useLoader(GLTFLoader, file);

    useLayoutEffect(() => {
      Object.assign(materials["Car Texture"], {
        roughness: 2,
        metalness: 4,
        emissive: new THREE.Color(currentColor.value),
        envMapIntensity: 2.5,
      });
      Object.assign(materials["Carbon"], {
        roughness: 0.5,
        metalness: 0.5,
        emissive: new THREE.Color("#010101"),
        envMapIntensity: 1.5,
      });
      Object.assign(materials["Carbon.001"], {
        roughness: 0.5,
        metalness: 0.3,
        emissive: new THREE.Color("#010101"),
        envMapIntensity: 2.5,
      });
      Object.assign(materials["Carbon.002"], {
        roughness: 0.5,
        metalness: 0.1,
        emissive: new THREE.Color("#000000"),
        envMapIntensity: 0.5,
      });
    }, [scene, materials, currentColor]);

    return <primitive object={scene} scale={0.01} />;
  };

  return (
    <>
      <div className="options">
        {colors.map((color) => (
          <div
            onClick={() => setCurrentColor(color)}
            className="options-color"
            key={color.key}
            style={{ background: color.value }}
          ></div>
        ))}
      </div>
      <Canvas className="three-js-canvas" shadows camera={{ fov: 40 }}>
        <Suspense fallback={null}>
          <Stage intensity={0.75} contactShadow={false}>
            <Car />
          </Stage>
          <OrbitControls
            minDistance={0.5}
            maxDistance={1}
            autoRotate
            autoRotateSpeed={10}
            maxPolarAngle={Math.PI / 2.5}
          />
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
              blur={[100, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={100}
              metalness={0.5}
              roughness={1}
              depthScale={0.5}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
            />
          </mesh>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Model;
