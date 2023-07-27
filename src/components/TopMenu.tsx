import React from "react";
import "./components.css";
import adidasLogo from "../assets/adidas-logo-white.png";

const TopMenu = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        <img src={adidasLogo} className="adidas-logo" alt="adidas logo" />
        <p className="text-links about-link">about</p>
        <a href="https://github.com/panosjapan7/adidas-project" target="_blank">
          <p className="text-links">github</p>
        </a>
      </div>
    </div>
  );
};

export default TopMenu;
