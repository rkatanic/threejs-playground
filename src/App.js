import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./pages/Home";
import Background from "./components/Background";
import Header from "./components/Header";
import Examples from "./components/examples/Examples";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

import "./App.css";
import ScrollProgress from "./components/ScrollProgress";

const App = () => {
  const [windowResizing, setWindowResizing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);

      setWindowResizing(true);
      setWindowWidth(window.innerWidth);

      timeout = setTimeout(() => {
        setWindowResizing(false);
      }, 250);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div data-testid="app" className="App">
      <Background />
      <ScrollProgress />
      <BrowserView>
        <Cursor />
      </BrowserView>
      <GlobalContextProvider>
        <Router>
          {windowResizing ? (
            <div className="message-box">RESIZING...</div>
          ) : windowWidth >= 670 ? (
            <div className="main">
              <Header />
              <Home />
              <Routes>
                <Route path="/" element={<Examples />} exact />
                <Route path="/:exampleName" element={<Examples />} exact />
              </Routes>
              <Footer />
            </div>
          ) : (
            <div className="message-box">
              For better user experience <br />
              please use device with viewport width
              <br />
              of 670 pixels or more.
            </div>
          )}
        </Router>
      </GlobalContextProvider>
    </div>
  );
};

export default App;
