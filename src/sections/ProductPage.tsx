import React from "react";
import "../assets/styles/productPage.css";

const ProductPage = ({
  productSectionRef,
}: {
  productSectionRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section id="productSection" className="productSection">
      <div className="left-column" ref={productSectionRef} id="productSection">
        <h2>ProductPage</h2>
        <p ref={productSectionRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel
          minima dicta odio iusto itaque eos voluptates, ipsa libero voluptatem?
        </p>
      </div>
      <div className="right-column" id="productSection"></div>
    </section>
  );
};

export default ProductPage;
