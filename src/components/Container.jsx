import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Container = ({ children, className = "" }) => {

  return (
    <motion.div
      className={className}
      style={{
        minHeight: "100vh",
        width: "100%",
        transition: "background 0.5s ease",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Container;
