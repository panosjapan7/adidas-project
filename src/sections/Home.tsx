import React from "react";
import "../assets/styles/home.css";
import ShoeHeroDesktop from "../assets/images/shoe-hero-desktop.svg";
import ShoeHeroShadowDesktop from "../assets/images/shoe-hero-shadow-desktop.svg";

const Home = ({
  homeSectionRef,
}: {
  homeSectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section id="homeSection" className="homeSection">
      <div className="ultraboost-text-container" ref={homeSectionRef}>
        <p className="ultraboost-text" ref={homeSectionRef}>
          ultraboost 1.0
        </p>
      </div>
      <div className="ultraboost-empty-text-container" ref={homeSectionRef}>
        <p className="ultraboost-empty-text" ref={homeSectionRef}>
          ultraboost 1.0
        </p>
      </div>

      <div className="shoe-hero-desktop-container" ref={homeSectionRef}>
        <img
          src={ShoeHeroDesktop}
          className="shoe-hero-desktop"
          alt="adidas ultraboost shoe"
        />
        <img
          src={ShoeHeroShadowDesktop}
          className="shoe-hero-shadow-desktop"
          alt="shoe shadow"
        />
      </div>
    </section>
  );
};

export default Home;
