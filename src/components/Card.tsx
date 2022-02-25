import { NavLink } from "react-router-dom";

import "./Card.css";

interface Props {
  title: string | JSX.Element;
  description: string;
  url: string;
  date: string;
}

const Card = ({ title, description, url, date }: Props): JSX.Element => (
  <NavLink
    to={`/examples/${url}`}
    className={({ isActive }) => `${isActive ? "nav-link-active" : ""}`}
  >
    <div data-tilt className="card">
      <h3 className="card-title">{title}</h3>
      <hr />
      <p className="card-date">{date}</p>
      <div className="card-desc">{description}</div>
    </div>
  </NavLink>
);

export default Card;
