import React from "react";
import "../assets/styles/home.css";
import ShoeHeroDesktop from "../assets/images/shoe-hero-desktop.svg";
import ShoeHeroDesktopPink from "../assets/images/shoe-hero-pink.svg";
import ShoeHeroDesktopWhite from "../assets/images/shoe-hero-white.svg";
import ShoeHeroShadowDesktop from "../assets/images/shoe-hero-shadow-desktop.svg";

const Home = ({ shoeColor }: { shoeColor: string }) => {
  let shoeHeroImage;
  if (shoeColor === "black") {
    shoeHeroImage = ShoeHeroDesktop;
  }
  if (shoeColor === "pink") {
    shoeHeroImage = ShoeHeroDesktopPink;
  }
  if (shoeColor === "white") {
    shoeHeroImage = ShoeHeroDesktopWhite;
  }

  return (
    <section id="homeSection" className="homeSection">
      <div className="ultraboost-text-container">
        <p className="ultraboost-text">ultraboost 1.0</p>
      </div>
      <div className="ultraboost-empty-text-container">
        <p className="ultraboost-empty-text">ultraboost 1.0</p>
      </div>

      <div className="shoe-hero-desktop-container">
        <img
          src={shoeHeroImage}
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
