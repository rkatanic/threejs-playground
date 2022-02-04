import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("app")).toBeInTheDocument();
  });
});
