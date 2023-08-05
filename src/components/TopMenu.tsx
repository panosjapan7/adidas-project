import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { BsHandbag, BsHandbagFill } from "react-icons/bs";
import "../assets/styles/topMenu.css";
import { CartItem } from "../interfaces/interfaces";
import adidasLogo from "../assets/images/adidas-logo-white.png";
import adidasLogoSmall from "../assets/images/adidas-logo-small-black.png";

gsap.registerPlugin(Draggable);

const TopMenu = ({
  cartTagDragged,
  setCartTagDragged,
  cartItems,
  toggleModal,
  setToggleModal,
}: {
  cartTagDragged: boolean;
  setCartTagDragged: (cartTagDragge: boolean) => void;
  cartItems: CartItem[];
  toggleModal: boolean;
  setToggleModal: (toggleModal: boolean) => void;
}) => {
  const cartTagRef = useRef<HTMLDivElement>(null);
  const [cartHeight, setCartHeight] = useState(175);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const featuresList = [
    "Cart Modal animation built with Framer Motion",
    "Draggable, animated Cart UI element built with GSAP",
    "Image slider built with JavaScript and CSS (no libraries)",
    "Cart functionality",
  ];

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
      edgeResistance: 0.5,
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

  const handleAboutLinkClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setToggleModal(!toggleModal);
  };

  return (
    <div className="menu-wrapper">
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
            <div className="about-container-mobile">
              <p
                className="mobile-menu-option no-hover-effect"
                onClick={handleAnchorClick}
              >
                ABOUT
              </p>
              <div className="about-copy-container-mobile">
                <p className="description-copy-mobile">
                  This is a personal frontend project I built for my portfolio.
                </p>
                <div className="features-container-mobile">
                  <p className="features-header-mobile">Features</p>
                  <ul className="features-mobile">
                    {featuresList.map((feature, index) => (
                      <li className="feature-mobile" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="tech-container-mobile">
                  <p className="tech-header-mobile">Technologies</p>
                  <p className="tech-mobile">
                    CSS, Framer Motion, GreenSock Animation Platform (GSAP),
                    React, TypeScript
                  </p>
                </div>
              </div>
            </div>
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
        <p
          // onClick={() => setToggleModal(!toggleModal)}
          onClick={handleAboutLinkClick}
          className="text-links about-link"
        >
          about
        </p>
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
