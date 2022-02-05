import React, { useCallback, useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  const cursorOutline = React.useRef(null);
  const cursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;

    positionRef.current.mouseX = mouseX - cursorOutline.current.clientWidth / 2;
    positionRef.current.mouseY =
      mouseY - cursorOutline.current.clientHeight / 2;
    cursor.current.style.transform = `translate3d(${
      mouseX - cursor.current.clientWidth / 2
    }px, ${mouseY - cursor.current.clientHeight / 2}px, 0)`;

    positionRef.current.key = requestAnimationFrame(handleMouseMove);
    const { destinationX, destinationY, distanceX, distanceY } =
      positionRef.current;
    if (!destinationX || !destinationY) {
      positionRef.current.destinationX = mouseX;
      positionRef.current.destinationY = mouseY;
    } else {
      positionRef.current.distanceX = (mouseX - destinationX) * 0.5;
      positionRef.current.distanceY = (mouseY - destinationY) * 0.5;
      if (
        Math.abs(positionRef.current.distanceX) +
          Math.abs(positionRef.current.distanceY) <
        0.1
      ) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.destinationX += distanceX;
        positionRef.current.destinationY += distanceY;
      }
    }
    cursorOutline.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="cursor-wrapper">
      <div className="cursor " ref={cursor}></div>
      <div className="cursor-outline" ref={cursorOutline}></div>
    </div>
  );
};

export default Cursor;
