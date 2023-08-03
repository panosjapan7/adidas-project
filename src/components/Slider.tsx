import React, { useState } from "react";
import "../assets/styles/slider.css";
import BlackS0 from "../assets/images/slides/slide-0-black.png";
import BlackS1 from "../assets/images/slides/slide-1-black.png";
import BlackS2 from "../assets/images/slides/slide-2-black.png";
import BlackS3 from "../assets/images/slides/slide-3-black.png";
import BlackS4 from "../assets/images/slides/slide-4-black.png";
import PinkS0 from "../assets/images/slides/slide-0-pink.png";
import PinkS1 from "../assets/images/slides/slide-1-pink.png";
import PinkS2 from "../assets/images/slides/slide-2-pink.png";
import PinkS3 from "../assets/images/slides/slide-3-pink.png";
import PinkS4 from "../assets/images/slides/slide-4-pink.png";

import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Slider = () => {
  const slidesBlack = [BlackS0, BlackS1, BlackS2, BlackS3, BlackS4];
  const slidesPink = [PinkS0, PinkS1, PinkS2, PinkS3, PinkS4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesBlack.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesBlack.length - 1 : prevSlide - 1
    );
  };
  console.log({ currentSlide });
  return (
    <div className="slider">
      {slidesBlack.map((slide, index) => (
        <img
          key={index}
          src={slide}
          className="slide"
          alt="ultraboost shoe"
          style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
        />
      ))}

      <div className="slider-button-left" onClick={goToPreviousSlide}>
        <AiFillLeftCircle className="button-left" />
      </div>
      <div className="slider-button-right">
        <AiFillRightCircle className="button-right" onClick={goToNextSlide} />
      </div>
      <div className="slider-dots-container">
        <div
          className={currentSlide === 0 ? "slider-dot active" : "slider-dot"}
        ></div>
        <div
          className={currentSlide === 1 ? "slider-dot active" : "slider-dot"}
        ></div>
        <div
          className={currentSlide === 2 ? "slider-dot active" : "slider-dot"}
        ></div>
        <div
          className={currentSlide === 3 ? "slider-dot active" : "slider-dot"}
        ></div>
        <div
          className={currentSlide === 4 ? "slider-dot active" : "slider-dot"}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
