import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ReactComponent as InfoIcon } from "../assets/icons/info.svg";

import "./Header.css";

const Header = (): JSX.Element => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-content-left">
          <span className="header-txt">radivoje.katanic</span>
          <InfoIcon />
          <div className="header-info">
            Radivoje Katanić is a software developer located in Doboj, <br />
            Bosnia & Herzegovina. <br /> Coder, outdoors enthusiast, & animal
            lover.
            <br />
            Fun fact: I have 10 cats around my house.
          </div>
        </div>
        <span className="header-txt date-time">
          {format(time, "iii dd MMM yyyy hh:mm:ss a")}
        </span>
      </div>
      <div className="header-line"></div>
    </div>
  );
};

export default Header;
