import { useEffect, useRef, useState } from "react";
import IconButton from "./IconButton";
import { COLORS, DEFAULT_COLOR_HUE } from "../util/constants/colors";
import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";
import { ReactComponent as DropIcon } from "../assets/icons/drop.svg";

import "./ColorSwitch.css";

const ColorSwitch = (): JSX.Element => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    Number(window.localStorage.getItem("color")?.valueOf())
  );
  const colorSwitch = useRef<any>();

  const handleColorSwitch = (value: number): void => {
    setSelectedColor(value);
    setColorToLocalStorage(value);
    window.document.documentElement.style.setProperty(
      "--color-hue",
      value.toString()
    );
  };

  const handleClickOutside = (event: Event): void => {
    if (colorSwitch && !colorSwitch.current.contains(event.target)) {
      setShowColorList(false);
    }
  };

  const setColorToLocalStorage = (value: number): void =>
    window.localStorage.setItem("color", value.toString());

  const handleColorListToggle = (): void => {
    setShowColorList((prevState: boolean) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    const colorValueFromLocalStorage = Number(
      window.localStorage.getItem("color")?.valueOf()
    );

    if (!COLORS.some(({ value }) => value === colorValueFromLocalStorage)) {
      setColorToLocalStorage(DEFAULT_COLOR_HUE);
    } else {
      handleColorSwitch(colorValueFromLocalStorage);
    }

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="color-switch" ref={colorSwitch}>
        <IconButton
          onClick={handleColorListToggle}
          type="outline"
          icon={<DropIcon />}
        />
        {showColorList && (
          <div className="color-list">
            {COLORS.map(
              ({ key, value }): JSX.Element => (
                <div
                  data-testid={`color-item-${value}`}
                  onClick={() => handleColorSwitch(value)}
                  key={key}
                  className="color-item"
                  style={{
                    background: `hsl(${value},72%,67%)`,
                  }}
                >
                  {selectedColor === value && <CheckIcon />}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ColorSwitch;
