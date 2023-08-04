import React, { useEffect } from "react";
import "../assets/styles/productPage.css";
import Slider from "../components/Slider";
import ProductDetails from "../components/ProductDetails/ProductDetails";

interface CartItem {
  shoeColor: string;
  shoeSize: number | undefined;
  shoeQuantity: number;
  shoePrice: number;
}

const ProductPage = ({
  productSectionRef,
  isProductSectionVisible,
  shoeColor,
  setShoeColor,
  shoeSize,
  setShoeSize,
  cartItems,
  setCartItems,
}: {
  productSectionRef: React.RefObject<HTMLDivElement>;
  isProductSectionVisible: boolean | undefined;
  shoeColor: string;
  setShoeColor: (shoeColor: string) => void;
  shoeSize: number | undefined;
  setShoeSize: (shoeSize: number | undefined) => void;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}) => {
  useEffect(() => {
    if (isProductSectionVisible) {
      const rightColumn = document.querySelector(
        ".right-column"
      ) as HTMLDivElement;
      if (rightColumn) {
        rightColumn.classList.add("expanded");
      }
    }
  }, [isProductSectionVisible]);

  return (
    <section id="productSection" className="productSection">
      <div className="product-title-container">
        <p className="product-title">ultraboost 1.0</p>
        <p className="product-price">$190.00</p>
      </div>
      <div className="left-column" ref={productSectionRef} id="productSection">
        <Slider shoeColor={shoeColor} />

        {/* <p ref={productSectionRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel
          minima dicta odio iusto itaque eos voluptates, ipsa libero voluptatem?
        </p> */}
      </div>
      <div className="right-column" id="productSection">
        <ProductDetails
          shoeColor={shoeColor}
          setShoeColor={setShoeColor}
          shoeSize={shoeSize}
          setShoeSize={setShoeSize}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
    </section>
  );
};

export default ProductPage;
