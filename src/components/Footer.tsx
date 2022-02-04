import { useState } from "react";
import { GITHUB_LINK, LINKEDIN_LINK } from "../util/constants/links";
import { ReactComponent as ChevronRightIcon } from "../assets/icons/chevron-right.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/linkedin.svg";

import "./Footer.css";

const Footer = (): JSX.Element => {
  const paragraphs = [
    <p>
      Main goal was to document learning progress, <br /> to create some kind of
      reminder for later.
    </p>,
    <p>
      Working with 3D graphics in browser is fascinating, <br /> hence I could
      not resist to not try it out.
    </p>,
    <p>
      This project is built in React, <br />
      with react-three-fiber renderer for Three.js.
    </p>,
  ];
  const [activeParagraph, setActiveParagraph] = useState(0);
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-go-to-top" onClick={() => window.scrollTo(0, 0)}>
          <span>TO TOP</span>
          <div className="footer-go-to-top-icons">
            <ChevronRightIcon />
            <ChevronRightIcon />
            <ChevronRightIcon />
          </div>
        </div>

        <h3>ABOUT</h3>
        <div className="footer-content-about">
          {paragraphs.map((p, i) => (
            <div key={i}>
              <div
                className={`pinpoint ${
                  activeParagraph === i ? "pinpoint-active" : ""
                }`}
                onClick={() => setActiveParagraph(i)}
              ></div>
              {activeParagraph === i && (
                <div className="footer-content-about-txt">{p}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-links">
        <a
          className="footer-link"
          target="_blank"
          rel="noreferrer"
          href={GITHUB_LINK}
        >
          <GithubIcon />
        </a>
        <a
          className="footer-link"
          target="_blank"
          rel="noreferrer"
          href={LINKEDIN_LINK}
        >
          <LinkedinIcon />
        </a>
      </div>
      <div className="header-line"></div>

      <p className="footer-copyright">
        © {new Date().getFullYear().toString()}, Radivoje Katanić. No rights
        reserved.
        <br />
        Feel free to replicate or copy anything you find interesting on this
        place.
        <br />
        This is a free world. Atleast I think so.
      </p>
    </div>
  );
};

export default Footer;
