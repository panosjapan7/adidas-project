import React, { useEffect, useRef } from "react";
import Backdrop from "../CartModal/Backdrop";
import "../../assets/styles/aboutModal.css";
import { AiOutlineClose } from "react-icons/ai";

const AboutModal = ({
  setToggleModal,
}: {
  setToggleModal: (toggleModal: boolean) => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const featuresList = [
    "Cart Modal animation built with Framer Motion",
    "Draggable, animated Cart UI element built with GSAP",
    "Image slider built with JavaScript and CSS (no libraries)",
    "Cart functionality",
  ];

  const handleClickOutsideModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setToggleModal(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutsideModal);
    return () => {
      document.body.removeEventListener("click", handleClickOutsideModal);
    };
  }, []);

  return (
    <div>
      <Backdrop>
        <div className="about-modal-wrapper" ref={modalRef}>
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
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default AboutModal;