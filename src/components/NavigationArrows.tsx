import React from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import "./components.css";

const NavigationArrows = ({
  isVisible,
}: {
  isVisible: boolean | undefined;
}) => {
  console.log({ isVisible });
  return (
    <div className="navivationArrows-wrapper">
      <div className="navigationArrows-content-wrapper">
        <div className="arrow-container">
          <SlArrowUp
            className="arrow"
            style={{ color: isVisible ? "black" : "#D3D3D3" }}
          />
        </div>
        <div className="vertical-line"></div>
        <div className="arrow-container">
          <SlArrowDown
            className="arrow"
            style={{ color: isVisible ? "#D3D3D3" : "black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationArrows;
