import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { BsHandbag } from "react-icons/bs";
import "./components.css";
import adidasLogo from "../assets/adidas-logo-white.png";

gsap.registerPlugin(Draggable);

const TopMenu = ({
  cartTagDragged,
  setCartTagDragged,
}: {
  cartTagDragged: boolean;
  setCartTagDragged: (cartTagDragge: boolean) => void;
}) => {
  const [cartHeight, setCartHeight] = useState(175);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowMobileMenu(e.target.checked);
  };

  useEffect(() => {
    Draggable.create(".cart-desktop-container", {
      type: "y",
      bounds: {
        minY: 0,
        maxY: 0.4,
      },
      edgeResistance: 0.85,
      onDrag() {
        this.prevY = this.y;
        console.log(this.y);
        if (this.y >= 40) {
          setCartTagDragged(!cartTagDragged);
        }
      },
      onDragEnd() {
        gsap.fromTo(
          ".cart-desktop-container",
          { y: this.prevY },
          {
            duration: 0.5,
            y: 0,
            ease: "elastic(1.5, 0.4)",
          }
        );
      },
    });
  }, [cartTagDragged, setCartTagDragged]);

  return (
    <div className="menu-wrapper">
      {/* <div className="mobile-menu-wrapper">
        <div className="mobile-menu-icon-container"></div>
      </div> */}
      <div className="mobile-menu-wrapper">
        <input
          type="checkbox"
          id="checkbox3"
          className="checkbox3 visuallyHidden"
          onChange={handleInputChange}
        />
        <label htmlFor="checkbox3">
          <div className="hamburger hamburger3">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
          </div>
        </label>
      </div>
      {showMobileMenu && (
        <div
          className={`mobile-menu-contents ${showMobileMenu ? "visible" : ""}`}
        ></div>
      )}

      <div className="menu-container">
        <img src={adidasLogo} className="adidas-logo" alt="adidas logo" />
        <p className="text-links about-link">about</p>
        <a
          href="https://github.com/panosjapan7/adidas-project"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-links">github</p>
        </a>
      </div>
      <div
        className="cart-desktop-container"
        style={{ height: cartHeight, zIndex: 100 }}
      >
        <BsHandbag className="handbag-icon" />
      </div>
    </div>
  );
};

export default TopMenu;
