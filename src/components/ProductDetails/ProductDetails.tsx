import React from "react";
import "../../assets/styles/productDetails.css";
import { BsCheckLg } from "react-icons/bs";
import ProductInfoBox from "./ProductInfoBox";

const ProductDetails = ({
  shoeColor,
  setShoeColor,
  shoeSize,
  setShoeSize,
}: {
  shoeColor: string;
  setShoeColor: (shoeColor: string) => void;
  shoeSize: number | undefined;
  setShoeSize: (shoeSize: number | undefined) => void;
}) => {
  return (
    <div className="product-details-wrapper">
      <div className="sizes-wrapper">
        <div className="size-numbers-container">
          <p
            className={`size ${shoeSize === 7 ? "selected" : ""}`}
            onClick={() => setShoeSize(7)}
          >
            7
          </p>
          <p
            className={`size ${shoeSize === 8 ? "selected" : ""}`}
            onClick={() => setShoeSize(8)}
          >
            8
          </p>
          <p
            className={`size ${shoeSize === 9 ? "selected" : ""}`}
            onClick={() => setShoeSize(9)}
          >
            9
          </p>
          <p
            className={`size ${shoeSize === 10 ? "selected" : ""}`}
            onClick={() => setShoeSize(10)}
          >
            10
          </p>
          <p
            className={`size ${shoeSize === 11 ? "selected" : ""}`}
            onClick={() => setShoeSize(11)}
          >
            11
          </p>
          <p
            className={`size ${shoeSize === 12 ? "selected" : ""}`}
            onClick={() => setShoeSize(12)}
          >
            12
          </p>
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
      <ProductInfoBox shoeColor={shoeColor} />
    </div>
  );
};

export default ProductDetails;
