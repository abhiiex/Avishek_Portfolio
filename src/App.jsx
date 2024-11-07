import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home1 from './components/Home/Home1.jsx'; // or .jsx
import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home1/>} />
          {/* <Route path="/project" element={<Projects />} /> */}
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
     <Footer/>
      </div>
    </Router>
  );
}

export default App;