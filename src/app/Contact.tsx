import { motion, MotionConfig } from "framer-motion";
import React from "react";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
    >
      <div>Contact</div>
    </motion.div>
  );
}

export default Contact;
