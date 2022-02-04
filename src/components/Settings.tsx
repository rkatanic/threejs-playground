import ColorSwitch from "./ColorSwitch";
import DarkModeSwitch from "./DarkModeSwitch";

import "./Settings.css";

const Settings = (): JSX.Element => {
  return (
    <div className="settings">
      <DarkModeSwitch />
      <ColorSwitch />
    </div>
  );
};

export default Settings;
