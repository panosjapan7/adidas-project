import React, { useEffect, useRef } from "react";
import Backdrop from "../CartModal/Backdrop";
import "../../assets/styles/aboutModal.css";
import { AiOutlineClose } from "react-icons/ai";

const AboutModal = ({
  toggleModal,
  setToggleModal,
}: {
  toggleModal: boolean;
  setToggleModal: (toggleModal: boolean) => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const featuresList = [
    "Cart Modal animation built with Framer Motion",
    "Pull-to-Open, draggable, animated Cart UI element built with GSAP",
    "Image slider built with JavaScript and CSS (no libraries)",
    "Cart functionality",
  ];

  useEffect(() => {
    const handleClickOutsideModal = (event: MouseEvent) => {
      if (toggleModal) {
        event.stopPropagation();
        setToggleModal(false);
      }
    };
    if (modalRef) {
      document.body.addEventListener("click", handleClickOutsideModal);
    }
  }, [modalRef, setToggleModal, toggleModal]);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div>
      <Backdrop>
        <div
          className="about-modal-wrapper"
          ref={modalRef}
          onClick={handleModalClick}
        >
          <div className="top-container">
            <h2 className="about-header">about</h2>
            <AiOutlineClose
              onClick={() => setToggleModal(false)}
              className="close-button"
            />
          </div>
          <div className="copy-container">
            <p className="description-copy">
              This is a personal frontend project I built for my portfolio.
            </p>
            <div className="features-container">
              <p className="features-header">Features</p>
              <ul className="features">
                {featuresList.map((feature, index) => (
                  <li className="feature" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-container">
              <p className="tech-header">Technologies</p>
              <p className="tech">
                CSS, Framer Motion, GreenSock Animation Platform (GSAP), React,
                TypeScript
              </p>
            </div>
            <div className="name-role-container">
              <p className="name-header">Panos Tsapanidis</p>
              <p className="role">Frontend-focused Fullstack Developer</p>
            </div>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default AboutModal;
