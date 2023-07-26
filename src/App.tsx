import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./sections/Home";
import ProductPage from "./sections/ProductPage";
import NavigationArrows from "./components/NavigationArrows";

function App() {
  const myRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>();

  const handleClick = () => {
    const element = document.getElementById("productSection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log({ isVisible });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      // console.log({ entry });
    });
    if (myRef.current) observer.observe(myRef.current);
  }, []);

  return (
    <div>
      <div className="container">
        {/* <section id="one" className="one">
          <h1>First Page</h1>
          <p onClick={handleClick}>CLICK IT</p>
        </section> */}
        {/* <section className="two">
        <h1>Second Page</h1>
      </section> */}
        <Home />
        <ProductPage myRef={myRef} />
      </div>
      <NavigationArrows />
      <p style={{ position: "absolute", bottom: 0 }}>
        {isVisible ? "I'm in Product" : "I'm in Home"}
      </p>
    </div>
  );
}

export default App;
