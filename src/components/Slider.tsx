import React, { useState } from "react";
import "../assets/styles/slider.css";
import BlackS0 from "../assets/images/slides/slide-0-black.png";
import BlackS1 from "../assets/images/slides/slide-1-black.png";
import BlackS2 from "../assets/images/slides/slide-2-black.png";
import BlackS3 from "../assets/images/slides/slide-3-black.png";
import BlackS4 from "../assets/images/slides/slide-4-black.png";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const Slider = () => {
  //   const slides = document.querySelectorAll(".slide");
  //   if (slides) {
  //     slides.forEach(
  //       (s, index) =>
  //         ((s as HTMLElement).style.transform = `translateX(${100 * index})`)
  //     );
  //   }
  //   console.log(slides);
  const slides = [BlackS0, BlackS1, BlackS2, BlackS3, BlackS4];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  console.log({ currentSlide });
  return (
    <div className="slider">
      {/* <img src={BlackS0} className="slide" alt="ultraboost black" /> */}
      {/* <img src={BlackS1} className="slide" alt="ultraboost black" /> */}
      {/* <img src={BlackS2} className="slide" alt="ultraboost black" /> */}
      {/* <img src={BlackS3} className="slide" alt="ultraboost black" /> */}
      {/* <img src={BlackS4} className="slide" alt="ultraboost black" /> */}

      {/* <img src={slides[currentSlide]} className="slide" alt="ultraboost shoe" /> */}

      {slides.map((slide, index) => (
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
        <div className="slider-dot active"></div>
        <div className="slider-dot"></div>
        <div className="slider-dot"></div>
        <div className="slider-dot"></div>
      </div>
    </div>
  );
};

export default Slider;
