import { useState, useRef } from "react";
import "../assets/styles/slider.css";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
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

const Slider = ({ shoeColor }: { shoeColor: string }) => {
  const slidesBlack = [BlackS0, BlackS1, BlackS2, BlackS3, BlackS4];
  const slidesPink = [PinkS0, PinkS1, PinkS2, PinkS3, PinkS4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchRef = useRef<HTMLDivElement>(null);
  const MIN_SWIPE_DISTANCE = 50;

  let touchStartX = 0;

  const handleSwipeStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.touches[0].clientX; // stores the initial X-coordinate of the touch
  };

  const handleSwipeEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchOffsetX = touchEndX - touchStartX;

    // calculates the distance traveled during the swipe by comparing the initial X-coordinate (touchStartX) with the final X-coordinate (touchEndX) of the touch event
    if (Math.abs(touchOffsetX) > MIN_SWIPE_DISTANCE) {
      if (touchOffsetX > 0) {
        goToPreviousSlide();
      } else {
        goToNextSlide();
      }
    }
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesBlack.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesBlack.length - 1 : prevSlide - 1
    );
  };

  const handleLeftButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    goToPreviousSlide();
  };

  const handleRightButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    goToNextSlide();
  };

  return (
    <div
      className="slider"
      ref={touchRef}
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
    >
      {shoeColor === "black" &&
        slidesBlack.map((slide, index) => (
          <img
            key={index}
            src={slide}
            className="slide"
            alt="ultraboost shoe"
            style={{
              transform: `translateX(${100 * (index - currentSlide)}%)`,
            }}
          />
        ))}
      {shoeColor === "pink" &&
        slidesPink.map((slide, index) => (
          <img
            key={index}
            src={slide}
            className="slide"
            alt="ultraboost shoe"
            style={{
              transform: `translateX(${100 * (index - currentSlide)}%)`,
            }}
          />
        ))}

      <div className="slider-button-left" onClick={handleLeftButtonClick}>
        <AiFillLeftCircle className="button-left" />
      </div>
      <div className="slider-button-right" onClick={handleRightButtonClick}>
        <AiFillRightCircle className="button-right" />
      </div>
      <div className="slider-dots-container">
        {slidesBlack.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={
              currentSlide === index ? "slider-dot active" : "slider-dot"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
