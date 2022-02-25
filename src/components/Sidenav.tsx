import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { EXAMPLES } from "../util/constants/examples";
import { ReactComponent as ChevronDownIcon } from "../assets/icons/chevron-down.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as FileTextIcon } from "../assets/icons/file-text.svg";
import { ReactComponent as BoxIcon } from "../assets/icons/box.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import DarkModeSwitch from "./DarkModeSwitch";

import "./Sidenav.css";

const Sidenav = (): JSX.Element => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);

  const nav = useRef<any>();

  const handleClickOutside = (event: Event): void => {
    if (nav && !nav.current.contains(event.target)) {
      setShowNav(false);
    }
  };

  const handleShowNavClose = (): void => {
    setShowNav(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`nav ${showNav ? "nav-open" : ""}`}>
      <div
        className="nav-toggle"
        onClick={() => setShowNav((prevState: boolean) => !prevState)}
      >
        <MenuIcon />
      </div>
      <div ref={nav} className={`nav-menu ${showNav ? "nav-menu-open" : ""}`}>
        <div>
          <NavLink to="/" onClick={handleShowNavClose}>
            <h3 className="nav-header">
              <div className="nav-header-logo">
                <BoxIcon />
              </div>
              Three.js Playground
            </h3>
          </NavLink>
          <hr />
          <ul>
            <li className="nav-item" onClick={handleShowNavClose}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link-active" : ""}`
                }
              >
                <HomeIcon />
                <span>About</span>
              </NavLink>
            </li>
            <li onClick={handleShowNavClose}>
              <NavLink
                to="/examples/basic-geometry"
                className={`nav-link ${
                  location.pathname.includes("examples")
                    ? "nav-link-active"
                    : ""
                }`}
              >
                <FileTextIcon />
                <span>Examples</span>
                <ChevronDownIcon />
              </NavLink>
            </li>
            <div className="examples">
              {EXAMPLES.map((example) => (
                <li
                  key={example.title}
                  className="nav-item"
                  onClick={handleShowNavClose}
                >
                  <NavLink
                    to={`/examples/${example.url}`}
                    className={({ isActive }) =>
                      `nav-link nav-link-example ${
                        isActive ? "nav-link-active" : ""
                      }`
                    }
                  >
                    {example.title}
                  </NavLink>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <DarkModeSwitch />
      </div>
    </nav>
  );
};

export default Sidenav;
