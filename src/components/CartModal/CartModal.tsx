import React from "react";
import { motion } from "framer-motion";
import "./cartModal.css";
import Backdrop from "./Backdrop";

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
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="cart-contents-container">
          <div className="header-container">
            <p className="header">CART</p>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default CartModal;
