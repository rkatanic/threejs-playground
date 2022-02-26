import { useEffect } from "react";
import { useIsDarkMode, useSetDarkMode } from "../context/GlobalContext";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg";

import "./DarkModeSwitch.css";

const DarkModeSwitch = (): JSX.Element => {
  const isDarkMode = useIsDarkMode();
  const toggleDarkMode = useSetDarkMode();

  useEffect(() => {
    const shouldShowDarkMode = (): void => {
      if (isDarkMode) {
        window.localStorage.removeItem("dark-mode");
        window.document.body.classList.remove("day-mode");
      } else {
        window.localStorage.setItem("dark-mode", "false");
        window.document.body.classList.add("day-mode");
      }
    };
    shouldShowDarkMode();
  }, [isDarkMode]);

  return (
    <div className="dark-mode-switch">
      <div className="theme-switch">
        <div
          className={`theme-switch-button ${isDarkMode ? "active" : ""}`}
        ></div>
        <div
          className={`theme-switch-item ${!isDarkMode ? "active" : ""}`}
          onClick={() => toggleDarkMode(false)}
        >
          <SunIcon />
          <span>Light</span>
        </div>
        <div
          className={`theme-switch-item ${isDarkMode ? "active" : ""}`}
          onClick={() => toggleDarkMode(true)}
        >
          <MoonIcon />
          <span>Dark</span>
        </div>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
