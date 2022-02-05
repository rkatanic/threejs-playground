import { useEffect, useState } from "react";

import "./ScrollProgress.css";

const ScrollProgress = (): JSX.Element => {
  const [scroll, setScroll] = useState(0);

  const onScroll = (): void => {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-bar">
      <div
        className="scroll-bar-percent"
        style={{ height: `${scroll}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
