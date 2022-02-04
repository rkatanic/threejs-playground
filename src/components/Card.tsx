import { NavLink } from "react-router-dom";
import "./Card.css";

interface Props {
  title: string | JSX.Element;
  description: string;
  children: React.ReactElement | React.ReactElement[];
  number: string;
  url: string;
}

const Card = ({
  title,
  description,
  children,
  number,
  url,
}: Props): JSX.Element => (
  <NavLink to={`${url}`}>
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
        <p className="card-date">10 SEP 2021</p>
      </div>
      <div className="card-desc">{description}</div>
    </div>
  </NavLink>
);

export default Card;
