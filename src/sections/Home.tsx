import React from "react";
import "../App.css";
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
