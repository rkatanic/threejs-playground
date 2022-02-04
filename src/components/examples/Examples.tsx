import { useParams } from "react-router-dom";
import { EXAMPLES } from "../../util/constants/examples";
import { ReactComponent as WarningIcon } from "../../assets/icons/alert-error.svg";

import "./Examples.css";

const Examples = (): JSX.Element => {
  const { exampleName } = useParams();
  const example = EXAMPLES.find((example) => example.url === exampleName);
  return (
    <div className="example">
      <div className="example-container">
        {example ? (
          example.component
        ) : (
          <p className="example-txt">
            <WarningIcon /> Select one of the examples <br /> from above for
            preview.
          </p>
        )}
      </div>
    </div>
  );
};

export default Examples;
