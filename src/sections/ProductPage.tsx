import React, { useEffect } from "react";
import "../assets/styles/productPage.css";
import Black0 from "../assets/images/carousel-photos/black-0.png";
import Black1 from "../assets/images/carousel-photos/black-1.png";
import Slider from "../components/Slider";

const ProductPage = ({
  productSectionRef,
  isProductSectionVisible,
}: {
  productSectionRef: React.RefObject<HTMLDivElement>;
  isProductSectionVisible: boolean | undefined;
}) => {
  useEffect(() => {
    if (isProductSectionVisible) {
      const rightColumn = document.querySelector(
        ".right-column"
      ) as HTMLDivElement;
      if (rightColumn) {
        console.log(rightColumn);
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
        <Slider />
        {/* <div className="a-damn-box"></div> */}

        {/* <p ref={productSectionRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel
          minima dicta odio iusto itaque eos voluptates, ipsa libero voluptatem?
        </p> */}
      </div>
      <div className="right-column" id="productSection"></div>
    </section>
  );
};

export default ProductPage;
