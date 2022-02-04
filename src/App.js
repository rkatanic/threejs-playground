import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./pages/Home";
import Background from "./components/Background";
import Header from "./components/Header";
import Examples from "./components/examples/Examples";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Background />
      <GlobalContextProvider>
        <Router>
          <div className="main">
            <Header />
            <Home />
            <Routes>
              <Route path="/" element={<Examples />} exact />
              <Route path="/:exampleName" element={<Examples />} exact />
            </Routes>
            <Footer />
          </div>
        </Router>
      </GlobalContextProvider>
    </div>
  );
};

export default App;
