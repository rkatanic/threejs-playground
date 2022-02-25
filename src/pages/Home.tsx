import ExamplesSlider from "../components/ExamplesSlider";
import Header from "../components/Header";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/github.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/linkedin.svg";

import "./Home.css";

const Home = (): JSX.Element => {
  return (
    <div id="home">
      <Header />
      <div className="home-content">
        <div className="examples-content">
          <ExamplesSlider />
          <div className="about">
            <div className="about-card">
              <h3 className="txt-heading">About Project</h3>
              <hr />
              <p>
                This place is a small archive <br /> of my personal three.js
                learning journey.
              </p>
              <p>
                Main idea was to document learning progress, to create some kind
                of archive as reminder for later.
              </p>
              <p>
                This project is built using React, <br /> with react-three-fiber
                renderer for Three.js.
              </p>
              <hr />
              <div className="about-last-modified">
                <CheckIcon />
                <span>Last updated: 20.Feb.2022.</span>
              </div>
            </div>

            <div className="about-card">
              <h3 className="txt-heading">About Author</h3>
              <hr />
              <p>
                Radivoje Katanic is full stack developer located in Doboj,
                Bosnia & Herzegovina.
              </p>
              <hr />
              <div className="about-contact-links">
                <a className="about-contact-link">
                  <LinkedinIcon /> LinkedIn
                </a>
                <a className="about-contact-link">
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
