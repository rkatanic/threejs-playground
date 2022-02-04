import { useRef, useState } from "react";
import Card from "./Card";
import IconButton from "./IconButton";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";
import { EXAMPLES } from "../util/constants/examples";

import "./ExamplesSlider.css";

const Projects = () => {
  const slider = useRef<any>();
  const [slides, setSlides] = useState(EXAMPLES);

  const handleNext = () => {
    slider.current.style.transition = `transform 0.25s`;
    slider.current.style.transform = `translateX(-20.5rem)`;
  };

  const handleNextSlide = () => {
    slider.current.style.transition = `transform 0s`;
    slider.current.style.transform = `translateX(0)`;
    const _slides = [...slides, ...slides.slice(0, 1)].slice(-slides.length);
    setSlides(_slides);
  };

  return (
    <div className="projects">
      <div className="slider-wrapper">
        <div ref={slider} className="slider" onTransitionEnd={handleNextSlide}>
          {slides.map(({ title, description, number, url }) => (
            <Card
              key={title}
              title={title}
              number={number}
              url={url}
              description={description}
            >
              <span>children</span>
            </Card>
          ))}
        </div>
        <div className="slider-btn">
          <IconButton icon={<ArrowRightIcon />} onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
