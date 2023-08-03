import React from "react";
import "../../assets/styles/productDetails.css";

const ProductDetails = () => {
  return (
    <div className="product-details-wrapper">
      <div className="sizes-wrapper">
        <div className="size-numbers-container">
          <p className="size">7</p>
          <p className="size">8</p>
          <p className="size selected">9</p>
          <p className="size">10</p>
          <p className="size">11</p>
          <p className="size">12</p>
        </div>
        <p className="find-your-size">find your size</p>
      </div>
    </div>
  );
};

export default ProductDetails;
