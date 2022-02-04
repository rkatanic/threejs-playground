import ExamplesSlider from "../components/ExamplesSlider";
import { ReactComponent as ChevronRightIcon } from "../assets/icons/chevron-right.svg";
import Settings from "../components/Settings";

import "./Home.css";

const Home = (): JSX.Element => {
  return (
    <div id="home">
      <div className="vr-line">
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
        <div className="vr-bubble"></div>
      </div>
      <div className="home-heading">
        <div className="home-title-container">
          <div className="home-scroll">
            <div className="home-scroll-icons">
              <ChevronRightIcon />
              <ChevronRightIcon />
              <ChevronRightIcon />
            </div>
            <span> SCROLL</span>
          </div>
          <div className="shapes">
            <div className="shape-rectangle"></div>
            <div className="vertical-line"></div>
          </div>
          <h3 className="home-title">
            <span className="home-title-binary">
              1000111 001 10 1000 10101 010 10 1110 0 101 11 0111 00100 0 110 00
              10 010 0111 101000 101 0111 0 111000 1110 1 01 0100 1 00 11 11001
              10010 1000 101 110
            </span>
            <span>THREE.JS</span> <br />
            <span>LAB</span>
          </h3>
          <div className="shapes">
            <div className="vertical-line"></div>
            <div className="shape-rectangle"></div>
          </div>
        </div>

        <h3 className="home-subtitle">
          This place is a small archive <br />
          of my personal Three.js learning journey.
        </h3>

        <div className="home-settings">
          <Settings />
        </div>
      </div>

      <ExamplesSlider />
    </div>
  );
};

export default Home;
