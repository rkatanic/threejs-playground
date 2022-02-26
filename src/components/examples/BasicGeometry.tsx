import { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  Cone,
  Dodecahedron,
  OrbitControls,
  Sphere,
  Tetrahedron,
  Torus,
  TorusKnot,
} from "@react-three/drei";

import "./BasicGeometry.css";

const shapes = [
  { key: "box", value: "Box" },
  { key: "sphere", value: "Sphere" },
  { key: "cone", value: "Cone" },
  { key: "tetrahedron", value: "Tetrahedron" },
  { key: "dodecahedron", value: "Dodecahedron" },
  { key: "torus", value: "Torus" },
  { key: "torus-knot", value: "Torus Knot" },
];

const color = "hsl(160,90%,45%)";

const BasicGeometry = (): JSX.Element => {
  const [shape, setShape] = useState("box");

  const Geometry = (): JSX.Element => {
    const [clicked, setClicked] = useState(false);

    const ref = useRef<any>();

    useFrame(() => {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += 0.01;
    });

    return (
      <>
        {shape === "box" && (
          <Box
            ref={ref}
            visible
            args={[1, 1, 1]}
            onClick={() => setClicked((prevState) => !prevState)}
          >
            <meshStandardMaterial wireframe={clicked} color={color} />
          </Box>
        )}
        {shape === "sphere" && (
          <Sphere
            ref={ref}
            visible
            args={[0.75, 30, 30]}
            onClick={() => setClicked((prevState) => !prevState)}
          >
            <meshStandardMaterial wireframe={clicked} color={color} />
          </Sphere>
        )}
        {shape === "cone" && (
          <Cone
            ref={ref}
            visible
            args={[0.75, 0.75, 12]}
            onClick={() => setClicked((prevState) => !prevState)}
          >
            <meshStandardMaterial wireframe={clicked} color={color} />
          </Cone>
        )}

        {shape === "tetrahedron" && (
          <Tetrahedron
            ref={ref}
            visible
            args={[0.75]}
            onClick={() => setClicked((prevState) => !prevState)}
          >
            <meshStandardMaterial wireframe={clicked} color={color} />
          </Tetrahedron>
        )}
        {shape === "dodecahedron" && (
          <Dodecahedron
            ref={ref}
            visible
            args={[0.75]}
            onClick={() => setClicked((prevState) => !prevState)}
          >
            <meshStandardMaterial wireframe={clicked} color={color} />
          </Dodecahedron>
        )}

        {shape === "torus" && (
          <Torus
            ref={ref}
            visible
            args={[0.5, 0.15, 10, 50]}
            onClick={() => setClicked((prevState) => !prevState)}
          >
            <meshStandardMaterial wireframe={clicked} color={color} />
          </Torus>
        )}
        {shape === "torus-knot" && (
          <TorusKnot
            ref={ref}
            visible
            args={[0.5, 0.125]}
            onClick={() => setClicked((prevState) => !prevState)}
          >
            <meshStandardMaterial wireframe={clicked} color={color} />
          </TorusKnot>
        )}
      </>
    );
  };
  return (
    <div className="basic-geometry">
      <p className="options-desc">
        Click on shape <br />
        to see wireframe.
      </p>
      <div className="options">
        {shapes.map(({ key, value }) => (
          <p
            className={`${key === shape ? "options-active" : ""}`}
            key={key}
            onClick={() => setShape(key)}
          >
            {value}
          </p>
        ))}
      </div>
      <Canvas className="three-js-canvas" camera={{ position: [0, 1, 2] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[-2, 5, 2]} intensity={1.25} />
        <Suspense fallback={null}>
          <Geometry />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BasicGeometry;
