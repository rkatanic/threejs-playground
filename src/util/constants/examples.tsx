import BasicGeometry from "../../components/examples/BasicGeometry";
import DistortedSphere from "../../components/examples/DistortedSphere";
import WaveShader from "../../components/examples/wave-shader/WaveShader";
import ThreeSixtyView from "../../components/examples/ThreeSixtyView";

export const EXAMPLES = [
  {
    title: "Basic Geometry",
    number: "01",
    url: "basic-geometry",
    description: "Basic geometry examples with simple state managment.",
    component: <BasicGeometry />,
  },
  {
    title: "Distorted Sphere",
    number: "02",
    url: "distorted-sphere",
    description: "An example of mesh distort material on sphere geometry.",
    component: <DistortedSphere />,
  },
  {
    title: "Wave Shader",
    number: "03",
    url: "wave-shader",
    description: "Example of wave shader attached on plane geometry.",
    component: <WaveShader />,
  },

  {
    title: "360° View",
    number: "04",
    url: "360-view",
    description: "360° view made using sphere geometry with image texture.",
    component: <ThreeSixtyView />,
  },
];
