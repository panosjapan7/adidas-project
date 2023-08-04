import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import "./App.css";
import Home from "./sections/Home";
import ProductPage from "./sections/ProductPage";
import TopMenu from "./components/TopMenu";
import CartModal from "./components/CartModal/CartModal";

interface CartItem {
  shoeColor: string;
  shoeSize: number | undefined;
  shoeQuantity: number;
  shoePrice: number;
}

gsap.registerPlugin(Draggable);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const productSectionRef = useRef<HTMLDivElement>(null);
  const [isProductSectionVisible, setIsProductSectionVisible] =
    useState<boolean>();
  useState<boolean>();
  const [shoeColor, setShoeColor] = useState("black");
  const [shoeSize, setShoeSize] = useState<number | undefined>();

  const [scrolledPixels, setScrolledPixels] = useState(80);
  const [lineFlag, setLineFlag] = useState(false);
  const [reachedBottom, setReachedBottom] = useState(false);

  const [cartTagDragged, setCartTagDragged] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const startAnimation = () => {
    gsap.fromTo(
      ".cart-desktop-container",
      {
        y: 0,
      },
      {
        duration: 0.2,
        y: 30,
        // ease: "power2.out",
        ease: "none",
        onComplete: () => {
          gsap.to(".cart-desktop-container", {
            duration: 0.4,
            y: 0,
            ease: "elastic(1.5, 0.4)",
          });
        },
      }
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsProductSectionVisible(entry.isIntersecting);
    });
    if (productSectionRef.current) observer.observe(productSectionRef.current);
  }, []);

  return (
    <div>
      <TopMenu
        cartTagDragged={cartTagDragged}
        setCartTagDragged={setCartTagDragged}
        cartItems={cartItems}
      />
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {cartTagDragged && (
          <CartModal
            cartTagDragged={cartTagDragged}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </AnimatePresence>

      <div className="container" ref={containerRef}>
        <Home shoeColor={shoeColor} />
        <ProductPage
          productSectionRef={productSectionRef}
          isProductSectionVisible={isProductSectionVisible}
          shoeColor={shoeColor}
          setShoeColor={setShoeColor}
          shoeSize={shoeSize}
          setShoeSize={setShoeSize}
          cartItems={cartItems}
          setCartItems={setCartItems}
          startAnimation={startAnimation}
        />
      </div>
    </div>
  );
}

export default App;
