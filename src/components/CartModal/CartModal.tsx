import React from "react";
import { motion } from "framer-motion";
import "../../assets/styles/cartModal.css";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Backdrop from "./Backdrop";
import ShoeIconBlack from "../../assets/images/shoe-icon-black.png";
import ShoeIconPink from "../../assets/images/shoe-icon-pink.png";

interface CartItem {
  shoeColor: string;
  shoeSize: string | undefined;
  shoeQuantity: number;
  shoePrice: number;
}

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

const CartModal = ({
  cartTagDragged,
  cartItems,
  setCartItems,
}: {
  cartTagDragged: boolean;
  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
}) => {
  const getTotal = (cartItems: CartItem[]) => {
    if (cartItems.length > 0) {
      let total = 0;
      cartItems.map((item) => {
        total += item.shoePrice * item.shoeQuantity;
      });
      return total;
    }
  };
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
            <p className="header-quantity">({cartItems.length} items)</p>
          </div>

          {cartItems.length > 0 && (
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
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <th>
                      <img
                        src={
                          item.shoeColor === "black"
                            ? ShoeIconBlack
                            : ShoeIconPink
                        }
                        className="shoe-icon"
                        alt="shoe-icon"
                      />
                    </th>
                    <td>ultraboost 1.0</td>
                    <td>{item.shoeColor}</td>
                    <td>{item.shoeSize}</td>
                    <td>{item.shoePrice}</td>
                    <td>
                      <div className="quantity-container">
                        <span>
                          <CiCircleMinus className="plus-icon" />
                        </span>
                        <p className="quantity-table">{item.shoeQuantity}</p>
                        <span>
                          <CiCirclePlus className="minus-icon" />
                        </span>
                      </div>
                    </td>
                    <td>{item.shoePrice * item.shoeQuantity}</td>
                  </tr>
                ))}

                <tr className="hr-bottom">
                  <td></td>
                </tr>
                <tr className="subtotal-container">
                  <td colSpan={7}>SUBTOTAL: {getTotal(cartItems)}</td>
                </tr>
              </tbody>
            </table>
          )}

          <div className="cart-container-mobile">
            {cartItems.length > 0 &&
              cartItems.map((item, index) => (
                <div className="product-card-mobile" key={index}>
                  <img
                    src={
                      item.shoeColor === "black" ? ShoeIconBlack : ShoeIconPink
                    }
                    className="shoe-icon-mobile"
                    alt="shoe-icon"
                  />
                  <div className="product-details-container-mobile">
                    <p className="product-name-mobile">ultraboost 1.0</p>
                    <p className="product-color-mobile">
                      color: {item.shoeColor}
                    </p>
                    <p className="product-size-mobile">size: {item.shoeSize}</p>
                    <div className="quantity-container">
                      <span>
                        <CiCircleMinus className="plus-icon" />
                      </span>
                      <p className="quantity-table">{item.shoeQuantity}</p>
                      <span>
                        <CiCirclePlus className="minus-icon" />
                      </span>
                    </div>
                    <p className="product-price-mobile">
                      TOTAL: {item.shoePrice * item.shoeQuantity}
                    </p>
                  </div>
                </div>
              ))}

            <div className="subtotal-container-mobile">
              <div className="hr-mobile"></div>
              <p className="subtotal-mobile">SUBTOTAL: {getTotal(cartItems)}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default CartModal;
