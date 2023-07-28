import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import "./cartModal.css";

const Backdrop = ({
  children,
}: //   onClick,
{
  children: any;
  //   onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <motion.div
      className="backdrop"
      //   onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
