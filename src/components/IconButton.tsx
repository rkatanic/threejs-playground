import "./IconButton.css";

interface Props {
  icon: JSX.Element;
  onClick?: () => void;
  type?: "primary" | "outline";
}

const IconButton = ({
  icon,
  onClick,
  type = "primary",
  ...props
}: Props): JSX.Element => (
  <button
    {...props}
    className={`icon-button icon-button-${type}`}
    type="button"
    onClick={onClick}
  >
    {icon}
  </button>
);

export default IconButton;
