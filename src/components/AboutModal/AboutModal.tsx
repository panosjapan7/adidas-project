import React from "react";
import Backdrop from "../CartModal/Backdrop";
import "../../assets/styles/aboutModal.css";

const AboutModal = () => {
  return (
    <div>
      <Backdrop>
        <div className="about-modal-wrapper">
          <p>AboutModal</p>
        </div>
      </Backdrop>
    </div>
  );
};

export default AboutModal;
