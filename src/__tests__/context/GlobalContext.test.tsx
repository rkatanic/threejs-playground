import { fireEvent, render } from "@testing-library/react";
import {
  GlobalContextProvider,
  useIsDarkMode,
  useToggleDarkMode,
} from "../../context/GlobalContext";

describe("GlobalContext", (): void => {
  it("should provide isDarkMode from local storage", (): void => {
    Storage.prototype.getItem = jest.fn(() => "dark-mode");
    const TestComponent = (): JSX.Element => {
      const isDarkMode = useIsDarkMode();

      return <span>isDarkMode: {isDarkMode.toString()}</span>;
    };

    const { getByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(getByText("isDarkMode: false")).toBeInTheDocument();
  });

  it("should provide isDarkMode", (): void => {
    const TestComponent = (): JSX.Element => {
      const isDarkMode = useIsDarkMode();

      return <span>isDarkMode: {isDarkMode.toString()}</span>;
    };

    const { getByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(getByText("isDarkMode: true")).toBeInTheDocument();
  });

  it("should provide toggleDarkMode", (): void => {
    const TestComponent = (): JSX.Element => {
      const isDarkMode = useIsDarkMode();
      const toggleDarkMode = useToggleDarkMode();

      return (
        <div>
          <button onClick={toggleDarkMode}>toggle dark mode</button>
          <span>dark mode: {isDarkMode.toString()}</span>
        </div>
      );
    };

    const { getByText, queryByText } = render(<TestComponent />, {
      wrapper: GlobalContextProvider,
    });

    expect(queryByText("dark mode: true")).toBeInTheDocument();
    fireEvent.click(getByText("toggle dark mode"));

    expect(queryByText("dark mode: false")).toBeInTheDocument();
  });
});
