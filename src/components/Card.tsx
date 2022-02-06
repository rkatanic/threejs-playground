import { NavLink } from "react-router-dom";

import "./Card.css";

interface Props {
  title: string | JSX.Element;
  description: string;
  number: string;
  url: string;
  date: string;
}

const Card = ({
  title,
  description,
  number,
  url,
  date,
}: Props): JSX.Element => (
  <NavLink
    to={`${url}`}
    className={({ isActive }) =>
      `nav-link ${isActive ? "nav-link-active" : ""}`
    }
  >
    <div data-tilt className="card">
      <div className="card-content">
        <div className="card-heading">
          <div className="card-headline">EXAMPLE</div>
          <div className="card-num">{number}</div>
        </div>
        <div className="cube">
          <div className="sphere-one inner"></div>
          <div className="sphere-two inner"></div>
          <div className="sphere-three inner"></div>
          <div className="sphere-four inner"></div>
          <div className="sphere-five inner"></div>
          <div className="sphere-six inner"></div>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-date">{date}</p>
      </div>
      <div className="card-desc">{description}</div>
    </div>
  </NavLink>
);

export default Card;
