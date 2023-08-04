import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { BsHandbag, BsHandbagFill } from "react-icons/bs";
import "../assets/styles/topBar.css";
import adidasLogo from "../assets/images/adidas-logo-white.png";
import adidasLogoSmall from "../assets/images/adidas-logo-small-black.png";

interface CartItem {
  shoeColor: string;
  shoeSize: number | undefined;
  shoeQuantity: number;
  shoePrice: number;
}

gsap.registerPlugin(Draggable);

const TopMenu = ({
  cartTagDragged,
  setCartTagDragged,
  cartItems,
}: {
  cartTagDragged: boolean;
  setCartTagDragged: (cartTagDragge: boolean) => void;
  cartItems: CartItem[];
}) => {
  const cartTagRef = useRef<HTMLDivElement>(null);
  const [cartHeight, setCartHeight] = useState(175);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowMobileMenu(e.target.checked);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLParagraphElement>
  ) => {
    setShowMobileMenu(false);

    const checkbox = document.getElementById("checkbox3") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
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
        >
          <div className="mobile-menu-options">
            <img
              src={adidasLogoSmall}
              className="adidas-logo-small-black"
              alt="adidas logo"
            />
            <p
              className="mobile-menu-option no-hover-effect"
              onClick={handleAnchorClick}
            >
              ABOUT
            </p>

            <a
              className="mobile-menu-option no-hover-effect"
              href="https://github.com/panosjapan7/adidas-project"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </div>
        </div>
      )}

      <div className="menu-container">
        <img src={adidasLogo} className="adidas-logo" alt="adidas logo" />
        <p className="text-links about-link">about</p>
        <a
          href="https://github.com/panosjapan7/adidas-project"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-links github-link">github</p>
        </a>
      </div>
      <div
        ref={cartTagRef}
        className="cart-desktop-container"
        style={{ height: cartHeight }}
      >
        {cartItems.length > 0 ? (
          <BsHandbagFill className="handbag-icon" />
        ) : (
          <BsHandbag className="handbag-icon" />
        )}
      </div>
    </div>
  );
};

export default TopMenu;
