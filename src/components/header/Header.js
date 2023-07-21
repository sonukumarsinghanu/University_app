import React from "react";
import Topbar from "./Topbar";
import Slider from "../slider/Slider";
import "./header.css";

const Header = () => {
  return (
    <header id="home" className="header-styles">
      <Topbar />
      <Slider />
    </header>
  );
};

export default Header;
