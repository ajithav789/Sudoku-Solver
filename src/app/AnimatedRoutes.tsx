import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultPage } from "./DefaultPage";
import { SudokuBody } from "./SudokuBody";
import { SudokuDescription } from "./SudokuDescription";
import { AnimatePresence } from "framer-motion";
import Contact from "./Contact";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SudokuBody />} />
        <Route path="/about" element={<SudokuDescription />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
