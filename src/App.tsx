import React, { useState, useEffect, useRef } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import "./App.css";
import Home from "./sections/Home";
import ProductPage from "./sections/ProductPage";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const productSectionRef = useRef<HTMLDivElement>(null);
  const [isProductSectionVisible, setIsProductSectionVisible] =
    useState<boolean>();
  const [isHomeSectionVisible, setIsHomeSectionVisible] = useState<boolean>();
  const [scrolledPixels, setScrolledPixels] = useState(80);
  const [lineFlag, setLineFlag] = useState(false);
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsProductSectionVisible(entry.isIntersecting);
    });
    if (productSectionRef.current) observer.observe(productSectionRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsHomeSectionVisible(entry.isIntersecting);
    });
    if (homeSectionRef.current) observer.observe(homeSectionRef.current);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (
        scrolledPixels <= 80 &&
        scrolledPixels > 30 &&
        isHomeSectionVisible &&
        !isProductSectionVisible &&
        !lineFlag
      ) {
        setScrolledPixels((prev) => prev - 1.5);
        setLineFlag(false);
      }
      if (isProductSectionVisible && !lineFlag && !reachedBottom) {
        setScrolledPixels(80);
        setLineFlag(true);
      }
      if (container?.scrollTop! > 745) {
        setLineFlag(false);
        setReachedBottom(true);
      }
      // if (isProductSectionVisible && !lineFlag && reachedBottom) {
      //   console.log(4);
      //   setScrolledPixels((prev) => prev - 1.5);
      // }
      if (container?.scrollTop! < 100) {
        setScrolledPixels(80);
        setReachedBottom(false);
      }
    };

    container?.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [
    isProductSectionVisible,
    isHomeSectionVisible,
    scrolledPixels,
    lineFlag,
    reachedBottom,
  ]);

  return (
    <div>
      <div className="container" ref={containerRef}>
        <Home homeSectionRef={homeSectionRef} />
        <ProductPage productSectionRef={productSectionRef} />
      </div>

      <div className="navivationArrows-wrapper">
        <div className="navigationArrows-content-wrapper">
          <div className="arrow-container">
            <SlArrowDown
              className="arrowDown"
              style={{
                color: isProductSectionVisible ? "#D3D3D3" : "black",
              }}
            />
          </div>
          <div
            className="vertical-line"
            style={{ height: scrolledPixels }}
          ></div>
          <div className="arrow-container">
            <SlArrowUp
              className="arrowUp"
              style={{ color: isProductSectionVisible ? "black" : "#D3D3D3" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
