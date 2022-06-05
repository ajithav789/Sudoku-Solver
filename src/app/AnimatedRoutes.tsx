import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultPage } from "./components/default-page/DefaultPage";
import { SudokuBody } from "./components/home/SudokuBody";
import { SudokuDescription } from "./components/home/SudokuDescription";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/Sudoku-Solver-TypescriptReact" element={<SudokuBody />} />
        <Route
          path="/Sudoku-Solver-TypescriptReact/about"
          element={<SudokuDescription />}
        />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
