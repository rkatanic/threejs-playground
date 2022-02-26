import { useEffect, useState } from "react";
import { format } from "date-fns";

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
        <span className="header-txt date-time">
          {format(time, "iii dd MMM yyyy hh:mm:ss a")}
        </span>
      </div>
      <h3>Radivoje Katanić</h3>
    </div>
  );
};

export default Header;
