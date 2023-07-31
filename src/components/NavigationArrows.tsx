import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import "../assets/styles/topBar.css";

gsap.registerPlugin(ScrollTrigger);

const NavigationArrows = ({
  isVisible,
}: {
  isVisible: boolean | undefined;
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [arrowDownPosition, setArrowDownPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener and set initial position on mount
    window.addEventListener("scroll", handleScroll);
    setScrollPosition(window.scrollY);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate the position for the arrow
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const arrowDownRange = 100; // Adjust this value to control the range of arrow movement
    const arrowPosition = (scrollPosition / maxScroll) * arrowDownRange;

    // Set the arrow position
    setArrowDownPosition(arrowPosition);
  }, [scrollPosition]);

  const handleScroll = (event: any) => {
    // const currentPosition = window.scrollY;
    // setScrollPosition(currentPosition);
    // setArrowDownPosition(currentPosition * 0.5);
    // console.log({ currentPosition });
  };

  //   gsap.to(".arrowUp", {
  //     y: 100,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: ".arrowUp",
  //       //   start: "top 60%",
  //       //   end: "top 40%",
  //       scrub: 1.5,
  //       toggleActions: "restart reverse none none",
  //       // onEnter onLeave onEnterBack onLeaveBack
  //       // play pause resume reverse restart reset complete none
  //       markers: {
  //         startColor: "purple",
  //         endColor: "fuschia",
  //         fontSize: "1rem",
  //       },
  //     },
  //   });

  //   console.log({ isVisible });

  return (
    <div className="navivationArrows-wrapper">
      <div className="navigationArrows-content-wrapper">
        <div className="arrow-container">
          <SlArrowDown
            className="arrowDown"
            style={{
              color: isVisible ? "#D3D3D3" : "black",
              transform: `translateY(-${arrowDownPosition}px)`,
            }}
          />
        </div>
        <div className="vertical-line"></div>
        <div className="arrow-container">
          <SlArrowUp
            className="arrowUp"
            style={{ color: isVisible ? "black" : "#D3D3D3" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationArrows;
