import { motion } from "framer-motion";
import "../../assets/styles/cartModal.css";

const Backdrop = ({ children }: { children: any }) => {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
