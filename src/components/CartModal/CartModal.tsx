import React from "react";
import { motion } from "framer-motion";
import "./cartModal.css";
import Backdrop from "./Backdrop";
import ShoeIconBlack from "../../assets/shoe-icon-black.png";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const CartModal = ({ cartTagDragged }: { cartTagDragged: boolean }) => {
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="cart-contents-container">
          <div className="header-container">
            <p className="header">CART</p>
            <p className="header-quantity">(3 items)</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>{/* Intentionally Blank */}</th>
                <th>PRODUCT</th>
                <th>COLOR</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
              <tr className="hr">
                <td style={{ padding: 10 }}></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <img
                    src={ShoeIconBlack}
                    className="shoe-icon"
                    alt="shoe-icon"
                  />
                </th>
                <td>ultraboost 1.0</td>
                <td>Black</td>
                <td>$190.00</td>
                <td>1</td>
                <td>$190.00</td>
              </tr>
              <tr>
                <th>
                  <img
                    src={ShoeIconBlack}
                    className="shoe-icon"
                    alt="shoe-icon"
                  />
                </th>
                <td>ultraboost 1.0</td>
                <td>Black</td>
                <td>$190.00</td>
                <td>1</td>
                <td>$190.00</td>
              </tr>
              <tr>
                <th className="shoe-column" style={{ paddingBottom: 20 }}>
                  <img
                    src={ShoeIconBlack}
                    className="shoe-icon"
                    alt="shoe-icon"
                  />
                </th>
                <td style={{ paddingBottom: 20 }}>ultraboost 1.0</td>
                <td style={{ paddingBottom: 20 }}>Black</td>
                <td style={{ paddingBottom: 20 }}>$190.00</td>
                <td style={{ paddingBottom: 20 }}>2</td>
                <td style={{ paddingBottom: 20 }}>$190.00</td>
              </tr>
              <tr className="hr-bottom">
                <td></td>
              </tr>
              <tr className="subtotal-container">
                <td colSpan={6}>SUBTOTAL: $570.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default CartModal;
