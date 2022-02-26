import BasicGeometry from "../../components/examples/BasicGeometry";
import DistortedSphere from "../../components/examples/DistortedSphere";
import WaveShader from "../../components/examples/wave-shader/WaveShader";
import ThreeSixtyView from "../../components/examples/ThreeSixtyView";
import Model from "../../components/examples/Model";
import GeometryGroup from "../../components/examples/GeometryGroup";

export const EXAMPLES = [
  {
    title: "Basic Geometry",
    url: "basic-geometry",
    description: "Basic geometry examples with simple state managment.",
    component: <BasicGeometry />,
    date: "03 FEB 2022",
  },
  {
    title: "Distorted Sphere",
    url: "distorted-sphere",
    description: "An example of mesh distort material on sphere geometry.",
    component: <DistortedSphere />,
    date: "03 FEB 2022",
  },
  {
    title: "Wave Shader",
    url: "wave-shader",
    description: "Example of wave shader attached on plane geometry.",
    component: <WaveShader />,
    date: "04 FEB 2022",
  },
  {
    title: "360° View",
    url: "360-view",
    description: "360° view made using sphere geometry with image texture.",
    component: <ThreeSixtyView />,
    date: "05 FEB 2022",
  },
  {
    title: "3D Model",
    url: "3d-model",
    description: "Example of 3D imported model with basic color settings.",
    component: <Model />,
    date: "06 FEB 2022",
  },

  {
    title: "Geometry Group",
    url: "geometry-group",
    description: "Basic geometry shapes grouped in one mesh.",
    component: <GeometryGroup />,
    date: "26 FEB 2022",
  },
];
