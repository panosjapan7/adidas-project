import React from "react";
import "../assets/styles/home.css";
import ShoeHeroDesktop from "../assets/images/shoe-hero-desktop.svg";
import ShoeHeroShadowDesktop from "../assets/images/shoe-hero-shadow-desktop.svg";

const Home = ({
  homeSectionRef,
  isProductSectionVisible,
}: {
  homeSectionRef: React.RefObject<HTMLDivElement>;
  isProductSectionVisible: boolean | undefined;
}) => {
  return (
    <section id="homeSection" className="homeSection">
      {!isProductSectionVisible && (
        <p className="ultraboost-text-empty-mobile">ultraboost 1.0</p>
      )}
      {!isProductSectionVisible && (
        <p className="ultraboost-text-mobile">ultraboost 1.0</p>
      )}

      {/* <div className="ultraboost-text-container">
        <p className="ultraboost-text">ultraboost 1.0</p>
      </div>
      <div className="ultraboost-empty-text-container">
        <p className="ultraboost-empty-text">ultraboost 1.0</p>
      </div> */}
      <div className="shoe-hero-desktop-container" ref={homeSectionRef}>
        <div className="ultraboost-text-container">
          <p className="ultraboost-text">ultraboost 1.0</p>
        </div>
        <div className="ultraboost-empty-text-container">
          <p className="ultraboost-empty-text">ultraboost 1.0</p>
        </div>
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
