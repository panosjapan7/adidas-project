import React from "react";
import { motion } from "framer-motion";
import "./cartModal.css";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Backdrop from "./Backdrop";
import ShoeIconBlack from "../../assets/images/shoe-icon-black.png";

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
                <th>SIZE</th>
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
                <td>9</td>
                <td>$190.00</td>
                <td>
                  <div className="quantity-container">
                    <span>
                      <CiCircleMinus className="plus-icon" />
                    </span>
                    <p className="quantity-table">1</p>
                    <span>
                      <CiCirclePlus className="minus-icon" />
                    </span>
                  </div>
                </td>
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
                <td>9</td>
                <td>$190.00</td>
                <td>
                  <div className="quantity-container">
                    <span>
                      <CiCircleMinus className="plus-icon" />
                    </span>
                    <p className="quantity-table">2</p>
                    <span>
                      <CiCirclePlus className="minus-icon" />
                    </span>
                  </div>
                </td>
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
                <td style={{ paddingBottom: 20 }}>9</td>
                <td style={{ paddingBottom: 20 }}>$190.00</td>
                <td style={{ paddingBottom: 20 }}>
                  <div className="quantity-container">
                    <span>
                      <CiCircleMinus className="plus-icon" />
                    </span>
                    <p className="quantity-table">3</p>
                    <span>
                      <CiCirclePlus className="minus-icon" />
                    </span>
                  </div>
                </td>
                <td style={{ paddingBottom: 20 }}>$190.00</td>
              </tr>
              <tr className="hr-bottom">
                <td></td>
              </tr>
              <tr className="subtotal-container">
                <td colSpan={7}>SUBTOTAL: $570.00</td>
              </tr>
            </tbody>
          </table>

          <div className="cart-container-mobile">
            <div className="product-card-mobile">
              <img
                src={ShoeIconBlack}
                className="shoe-icon-mobile"
                alt="shoe-icon"
              />
              <div className="product-details-container-mobile">
                <p className="product-name-mobile">ultraboost 1.0</p>
                <p className="product-color-mobile">color: Black</p>
                <p className="product-size-mobile">size: 9</p>
                <div className="quantity-container">
                  <span>
                    <CiCircleMinus className="plus-icon" />
                  </span>
                  <p className="quantity-table">1</p>
                  <span>
                    <CiCirclePlus className="minus-icon" />
                  </span>
                </div>
                <p className="product-price-mobile">TOTAL: $190.00</p>
              </div>
            </div>
            <div className="product-card-mobile">
              <img
                src={ShoeIconBlack}
                className="shoe-icon-mobile"
                alt="shoe-icon"
              />
              <div className="product-details-container-mobile">
                <p className="product-name-mobile">ultraboost 1.0</p>
                <p className="product-color-mobile">color: Black</p>
                <p className="product-size-mobile">size: 9</p>
                <div className="quantity-container">
                  <span>
                    <CiCircleMinus className="plus-icon" />
                  </span>
                  <p className="quantity-table">2</p>
                  <span>
                    <CiCirclePlus className="minus-icon" />
                  </span>
                </div>
                <p className="product-price-mobile">TOTAL: $190.00</p>
              </div>
            </div>
            <div className="product-card-mobile">
              <img
                src={ShoeIconBlack}
                className="shoe-icon-mobile"
                alt="shoe-icon"
              />
              <div className="product-details-container-mobile">
                <p className="product-name-mobile">ultraboost 1.0</p>
                <p className="product-color-mobile">color: Black</p>
                <p className="product-size-mobile">size: 9</p>
                <div className="quantity-container">
                  <span>
                    <CiCircleMinus className="plus-icon" />
                  </span>
                  <p className="quantity-table">3</p>
                  <span>
                    <CiCirclePlus className="minus-icon" />
                  </span>
                </div>
                <p className="product-price-mobile">TOTAL: $190.00</p>
              </div>
            </div>
            <div className="subtotal-container-mobile">
              <div className="hr-mobile"></div>
              <p className="subtotal-mobile">SUBTOTAL: $570.00</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default CartModal;
