import React from "react";

const ProductPage = ({ myRef }: { myRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <section id="productSection" className="productSection">
      <h2>ProductPage</h2>
      <p ref={myRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel
        minima dicta odio iusto itaque eos voluptates, ipsa libero voluptatem?
      </p>
    </section>
  );
};

export default ProductPage;
