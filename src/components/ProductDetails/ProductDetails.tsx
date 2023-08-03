import React from "react";
import "../../assets/styles/productDetails.css";
import { BsCheckLg } from "react-icons/bs";
import ProductInfoBox from "./ProductInfoBox";

const ProductDetails = ({
  shoeColor,
  setShoeColor,
}: {
  shoeColor: string;
  setShoeColor: (shoeColor: string) => void;
}) => {
  console.log({ shoeColor });
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
      <div className="colors-button-container">
        <div className="colors-container">
          <div
            className={`color ${shoeColor === "black" ? "selected" : ""}`}
            style={{ backgroundColor: "black" }}
            onClick={() => setShoeColor("black")}
          >
            {shoeColor === "black" && <BsCheckLg className="color-checkmark" />}
          </div>
          <div
            className={`color ${shoeColor === "pink" ? "selected" : ""}`}
            style={{ backgroundColor: "#DCCFC8" }}
            onClick={() => setShoeColor("pink")}
          >
            {shoeColor === "pink" && <BsCheckLg className="color-checkmark" />}
          </div>
        </div>
        <button className="add-to-bag">ADD TO BAG</button>
      </div>
      <ProductInfoBox />
    </div>
  );
};

export default ProductDetails;
