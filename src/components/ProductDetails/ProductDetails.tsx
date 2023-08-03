import React from "react";
import "../../assets/styles/productDetails.css";
import { BsCheckLg } from "react-icons/bs";
import ProductInfoBox from "./ProductInfoBox";

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
      <div className="colors-container">
        <div className="color selected" style={{ backgroundColor: "black" }}>
          <BsCheckLg className="color-checkmark" />
        </div>
        <div className="color" style={{ backgroundColor: "#DCCFC8" }}></div>
      </div>
      <button className="add-to-bag">ADD TO BAG</button>
      <ProductInfoBox />
    </div>
  );
};

export default ProductDetails;
