import { createContext, useContext, useState } from "react";

interface GlobalContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextType>({
  isDarkMode: true,
} as GlobalContextType);

const GlobalContextProvider = ({ children }: any): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.localStorage.getItem("dark-mode") ? false : true
  );

  const toggleDarkMode = (): void => {
    setIsDarkMode((prevState: boolean) => !prevState);
  };

  const setDarkMode = (value: boolean): void => {
    setIsDarkMode(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        setDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useIsDarkMode = (): boolean => {
  const { isDarkMode } = useContext(GlobalContext);
  return isDarkMode;
};

const useToggleDarkMode = (): (() => void) => {
  const { toggleDarkMode } = useContext(GlobalContext);
  return toggleDarkMode;
};

const useSetDarkMode = () => {
  const { setDarkMode } = useContext(GlobalContext);
  return setDarkMode;
};

export {
  GlobalContextProvider,
  useIsDarkMode,
  useToggleDarkMode,
  useSetDarkMode,
};
