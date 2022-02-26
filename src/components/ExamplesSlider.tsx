import Card from "./Card";
import { EXAMPLES } from "../util/constants/examples";

import "./ExamplesSlider.css";

const Projects = () => {
  return (
    <div className="example-list-container">
      <div className="example-list">
        {EXAMPLES.map(({ title, description, url, date }) => (
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
