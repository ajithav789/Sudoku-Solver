import { motion } from "framer-motion";
import React, { FC } from "react";

export const SudokuDescription: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <div className="container about">
        <h1 className="heading">Backtracking Algorithm</h1>
        <p>
          Backtracking is an algorithmic technique for solving problems
          recursively by removing those solutions that fails to satisfy the
          constarints of a problem. Contrary to brute-force algorithms,
          backtracking algorithms discards a candidate, if the candidate does
          not lead to a solution. Here, this is done using a validating function
          along with recursion.
        </p>

        <h1 className="heading">Solving sudoku using backtracking algoritm</h1>
        <p> In a Sudoku game we have the following constraints.</p>
        <ul>
          <li>Numbers cannot repeat across a row.</li>
          <li>Numbers cannot repeat across a columns.</li>
          <li>Numbers cannot repeat inside their respective 3x3 grids.</li>
        </ul>
        <h2 className="heading">Solution</h2>
        <p>
          At first, the sudoku starting board is validated using javscript sets.
          Sets are used for detecting duplicates easily. After validating the
          starting board, the algorithm performs the following actions
        </p>
        <ul>
          <li>
            Algorithm traverses the board row-wise. If a cell is empty, the
            program then checks if numbers 1 through 9 can be inserted there
            using the board validating function
          </li>
          <li>
            If a number meets the 3 constraints of the sudoku puzzle, the number
            is added to the board array and the new board is passed as an
            argument to the recursive function call.
          </li>
          <li>
            If no number satisfy the validating function, the cell value is made
            empty and function returns false.
          </li>
          <li>
            This validation process happens recursively until a solution is
            reached.
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
