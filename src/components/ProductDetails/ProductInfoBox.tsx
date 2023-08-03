import React, { useState } from "react";
import "../../assets/styles/productInfoBox.css";

const ProductInfoBox = () => {
  const [selectedTab, setSelectedTab] = useState("description");

  return (
    <div className="product-info-box-wrapper">
      <div className="info-box-sections-container">
        <p
          className={`section-title ${
            selectedTab === "description" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("description")}
        >
          description
        </p>
        <p
          className={`section-title ${
            selectedTab === "details" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("details")}
        >
          details
        </p>
      </div>
      <div className="product-info-hr"></div>
      <div className="product-info-box-content-container">
        {selectedTab === "description" && (
          <div className="description-content-container">
            <p className="description-content-headline">
              ENERGY-RETURNING SNEAKERS MADE IN PART WITH PARLEY OCEAN PLASTIC.
            </p>
            <p className="description-content-content">
              From a walk in the park to a weekend run with friends, these
              adidas Ultraboost 1.0 shoes are designed to keep you comfortable.
              An adidas PRIMEKNIT upper gently hugs your feet while BOOST on the
              midsole cushions from the first step to the last mile. The
              Stretchweb outsole flexes naturally for an energized ride, and
              Continental™ Rubber gives you the traction you need to keep that
              pep in your step.
            </p>
          </div>
        )}
        {selectedTab === "details" && (
          <div className="details-content-container">
            <ul className="details-list">
              <li className="details-list-item">Lace closure</li>
              <li className="details-list-item">
                adidas PRIMEKNIT textile upper
              </li>
              <li className="details-list-item">
                Fitcounter molded heel counter
              </li>
              <li className="details-list-item">BOOST midsole</li>
              <li className="details-list-item">
                Stretchweb outsole with Continental™ Rubber
              </li>
              <li className="details-list-item">
                Yarn in upper contains at least 50% Parley Ocean Plastic and 50%
                recycled polyester
              </li>
              <li className="details-list-item">Imported</li>
              <li className="details-list-item">
                Product color: Core Black / Core Black / Beam Green
              </li>
              <li>Product code: HQ4199</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfoBox;
