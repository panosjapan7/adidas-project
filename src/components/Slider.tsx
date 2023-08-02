import React from "react";
import "../assets/styles/slider.css";
import BlackS0 from "../assets/images/slides/slide-0-black.png";
import BlackS1 from "../assets/images/slides/slide-1-black.png";
import BlackS2 from "../assets/images/slides/slide-2-black.png";
import BlackS3 from "../assets/images/slides/slide-3-black.png";
import BlackS4 from "../assets/images/slides/slide-4-black.png";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Slider = () => {
  const slides = document.querySelectorAll(".slide");
  if (slides) {
    slides.forEach(
      (s, index) =>
        ((s as HTMLElement).style.transform = `translateX(${100 * index})`)
    );
  }

  return (
    <div className="slider">
      <img src={BlackS0} className="slide" alt="ultraboost black" />
      <img src={BlackS1} className="slide" alt="ultraboost black" />
      <img src={BlackS2} className="slide" alt="ultraboost black" />
      <img src={BlackS3} className="slide" alt="ultraboost black" />
      <img src={BlackS4} className="slide" alt="ultraboost black" />
      <div className="slider-button-left">
        <AiFillLeftCircle className="button-left" />
      </div>
      <div className="slider-button-right">
        <AiFillRightCircle className="button-right" />
      </div>
    </div>
  );
};

export default Slider;
