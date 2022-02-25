import Card from "./Card";
import { ReactComponent as ArrowRightIcon } from "../assets/icons/arrow-right.svg";
import { EXAMPLES } from "../util/constants/examples";

import "./ExamplesSlider.css";

const Projects = () => {
  return (
    <div className="example-list-container">
      <div className="example-list">
        {EXAMPLES.map(({ title, description, number, url, date }) => (
          <Card
            date={date}
            key={title}
            title={title}
            url={url}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
