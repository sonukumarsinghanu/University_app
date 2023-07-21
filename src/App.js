import "./App.css";
import Topbar from "./components/header/Topbar";
import "aos/dist/aos.css";
import AOS from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Services from "./components/pages/service/Services";
import Header from "./components/header/Header";
import AboutPage from "./components/pages/about/AboutPage";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);
  return (
    <div className="App">
      <Topbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
