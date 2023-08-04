import React, { useState, useEffect, useRef } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import "./App.css";
import Home from "./sections/Home";
import ProductPage from "./sections/ProductPage";
import TopMenu from "./components/TopMenu";
import CartModal from "./components/CartModal/CartModal";
import { motion, AnimatePresence } from "framer-motion";

interface CartItem {
  shoeColor: string;
  shoeSize: string | undefined;
  shoeQuantity: number;
  shoePrice: number;
}

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const productSectionRef = useRef<HTMLDivElement>(null);
  const [isProductSectionVisible, setIsProductSectionVisible] =
    useState<boolean>();
  const [isHomeSectionVisible, setIsHomeSectionVisible] = useState<boolean>();
  const [shoeColor, setShoeColor] = useState("black");
  const [shoeSize, setShoeSize] = useState<string | undefined>();

  const [scrolledPixels, setScrolledPixels] = useState(80);
  const [lineFlag, setLineFlag] = useState(false);
  const [reachedBottom, setReachedBottom] = useState(false);

  const [cartTagDragged, setCartTagDragged] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.shoeColor === item.shoeColor &&
        cartItem.shoeSize === item.shoeSize
    );

    if (existingItemIndex !== -1) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return {
              ...cartItem,
              shoeQuantity: cartItem.shoeQuantity + item.shoeQuantity,
            };
          }
          return cartItem;
        })
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
  };

  const removeFromCart = (index: number) => {
    setCartItems((prevCartItems: CartItem[]) =>
      prevCartItems.filter((item: CartItem, i: number) => i !== index)
    );
  };

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
      if (container?.scrollTop! > 350) {
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

  console.log({ cartItems });
  return (
    <div>
      <TopMenu
        cartTagDragged={cartTagDragged}
        setCartTagDragged={setCartTagDragged}
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
        <Home homeSectionRef={homeSectionRef} shoeColor={shoeColor} />
        <ProductPage
          productSectionRef={productSectionRef}
          isProductSectionVisible={isProductSectionVisible}
          shoeColor={shoeColor}
          setShoeColor={setShoeColor}
          shoeSize={shoeSize}
          setShoeSize={setShoeSize}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>

      {/* <div className="navivationArrows-wrapper">
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
      </div> */}
    </div>
  );
}

export default App;
