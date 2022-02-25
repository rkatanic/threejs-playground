import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./pages/Home";
import Background from "./components/Background";
import Header from "./components/Header";
import Examples from "./components/examples/Examples";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Sidenav from "./components/Sidenav";

import "./App.css";

const App = () => {
  const [windowResizing, setWindowResizing] = useState(false);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);

      setWindowResizing(true);

      timeout = setTimeout(() => {
        setWindowResizing(false);
      }, 250);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div data-testid="app" className="App">
      <GlobalContextProvider>
        <Router>
          {windowResizing ? (
            <div className="message-box">RESIZING...</div>
          ) : (
            <div className="main">
              <Sidenav />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} exact />
                  <Route
                    path="/examples/:exampleName"
                    element={<Examples />}
                    exact
                  />
                </Routes>
              </div>
            </div>
          )}
        </Router>
      </GlobalContextProvider>
    </div>
  );
};

export default App;
