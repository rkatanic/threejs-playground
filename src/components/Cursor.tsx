import { useEffect, useRef } from "react";

import "./Cursor.css";

const Cursor = (): JSX.Element => {
  const cursor = useRef<any>();
  const cursorOutline = useRef<any>();
  const delay = 4;
  const cursorEnlarged = useRef(false);
  const endx = useRef(window.innerWidth / 2);
  const endy = useRef(window.innerHeight / 2);
  const _X = useRef(0);
  const _Y = useRef(0);
  const requestRef = useRef<any>(null);

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      cursor.current.style.transform = "translate( -50%, -50%) scale(0.75)";
      cursorOutline.current.style.transform =
        "translate( -50%, -50%) scale(1.5);";
    } else {
      cursor.current.style.transform = "translate( -50%, -50%) scale(1)";
      cursorOutline.current.style.transform =
        "translate( -50%, -50%) scale(1) ";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };
  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseMoveEvent = (e: any) => {
    endx.current = e.pageX;
    endy.current = e.pageY;
    cursor.current.style.top = endy.current + "px";
    cursor.current.style.left = endx.current + "px";
  };

  const animateDotOutline = () => {
    _X.current += (endx.current - _X.current) / delay;
    _Y.current += (endy.current - _Y.current) / delay;
    cursorOutline.current.style.top = _Y.current + "px";
    cursorOutline.current.style.left = _X.current + "px";
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorOutline} className="cursor-dot-outline"></div>
      <div ref={cursor} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;
