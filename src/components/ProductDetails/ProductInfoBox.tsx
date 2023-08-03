import React from "react";
import "../../assets/styles/productInfoBox.css";

const ProductInfoBox = () => {
  // const tabsData = [
  //     {
  //         title: "description",
  //         headline: "ENERGY-RETURNING SNEAKERS MADE IN PART WITH PARLEY OCEAN PLASTIC.",
  //         content: "From a walk in the park to a weekend run with friends, these adidas Ultraboost 1.0 shoes are designed to keep you comfortable. An adidas PRIMEKNIT upper gently hugs your feet while BOOST on the midsole cushions from the first step to the last mile. The Stretchweb outsole flexes naturally for an energized ride, and Continental™ Rubber gives you the traction you need to keep that pep in your step."
  //     }
  // ]

  return (
    <div className="product-info-box-wrapper">
      <div className="info-box-sections-container">
        <p className="section-title active">description</p>
        <p className="section-title">details</p>
        <p className="section-title">complete the look</p>
      </div>
      <div className="product-info-hr"></div>
      <div className="product-info-box-content-container">
        <div className="description-content">
          <p className="description-content-headline">
            ENERGY-RETURNING SNEAKERS MADE IN PART WITH PARLEY OCEAN PLASTIC.
          </p>
          <p className="description-content-content">
            From a walk in the park to a weekend run with friends, these adidas
            Ultraboost 1.0 shoes are designed to keep you comfortable. An adidas
            PRIMEKNIT upper gently hugs your feet while BOOST on the midsole
            cushions from the first step to the last mile. The Stretchweb
            outsole flexes naturally for an energized ride, and Continental™
            Rubber gives you the traction you need to keep that pep in your
            step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoBox;
