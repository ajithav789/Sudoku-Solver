import React, { FC, useState } from "react";
import {
  INITIAL_SUDOKU_ARRAY,
  StatusMessages,
  SUDOKU_DIMENSION,
} from "../../enums/SudokuConstants";
import { motion } from "framer-motion";

export const SudokuBody: FC = () => {
  const [sudoku2DArray, setSudoku2DArray] = useState(INITIAL_SUDOKU_ARRAY);
  const [status, setStatus] = useState(StatusMessages.READY);

  /**
   * This function is for validating the starting board only.
   * @param board
   * @returns
   */
  function validateBoard(board: string[][]) {
    let set = new Set();
    let isEmptyBoard = true;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        const value = board[i][j];
        if (value !== ".") {
          isEmptyBoard = false;
          const row = `${value} at row ${i}`;
          const column = `${value} at column ${j}`;
          const box = `${value} at box ${Math.floor(i / 3)}, ${Math.floor(
            j / 3
          )}`;
          if (set.has(row) || set.has(column) || set.has(box)) {
            return false;
          } else {
            set.add(row);
            set.add(column);
            set.add(box);
          }
        }
      }
    }
    if (isEmptyBoard) {
      setStatus(StatusMessages.NO_DIGIT_ENTERED);
      return false;
    }
    return true;
  }

  /**
   * This is the validation function for the backtracking algorithm
   * @param board
   * @param row
   * @param col
   * @param k
   * @returns
   */
  function isValid(board: string[][], row: number, col: number, k: number) {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + (i % 3);
      if (
        parseInt(board[row][i]) === k ||
        parseInt(board[i][col]) === k ||
        parseInt(board[m][n]) === k
      ) {
        return false;
      }
    }
    return true;
  }

  /**
   * Accepts board data as a parameter, then modifies it until a solution is reached
   * @param data
   * @returns
   */
  function sudokuSolver(data: any) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (data[row][col] === "." || data[row][col] === "") {
          for (let n = 1; n <= 9; n++) {
            if (isValid(data, row, col, n)) {
              data[row][col] = `${n}`;
              //recursion
              if (sudokuSolver(data)) {
                return true;
              } else {
                data[row][col] = ".";
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  const onCellChange = (row: number, col: number, value: string) => {
    let cellValue = value;
    let boardReplica = [];
    for (let i = 0; i < sudoku2DArray.length; i++)
      boardReplica[i] = sudoku2DArray[i].slice();
    boardReplica[row][col] = cellValue;
    setSudoku2DArray(boardReplica);
  };

  const handleSolveSudoku = () => {
    let boardReplica = [];
    for (let i = 0; i < sudoku2DArray.length; i++)
      boardReplica[i] = sudoku2DArray[i].slice();
    let isvalid = validateBoard(boardReplica);
    if (!isvalid) {
      setStatus(StatusMessages.INVALID_BOARD);
      return;
    }
    sudokuSolver(boardReplica);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const inputHTMLElement = document.getElementById(
          `r${i}-c${j}`
        ) as HTMLInputElement;
        const isCellEmpty: boolean =
          sudoku2DArray[i][j] === "." || sudoku2DArray[i][j] === ""
            ? true
            : false;
        if (inputHTMLElement && isCellEmpty) {
          inputHTMLElement.value = boardReplica[i][j];
          const tempColor = inputHTMLElement.style.backgroundColor;
          inputHTMLElement.style.backgroundColor = "#07871c";
          setStatus(StatusMessages.SOLVED);
          setTimeout(() => {
            inputHTMLElement.style.backgroundColor = tempColor;
          }, 800);
        }
      }
    }
    setSudoku2DArray(boardReplica);
  };

  const handleReset = () => {
    let isAlreadyReset = true;
    setSudoku2DArray(INITIAL_SUDOKU_ARRAY);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const inputHTMLElement = document.getElementById(
          `r${i}-c${j}`
        ) as HTMLInputElement;
        if (inputHTMLElement.value) {
          isAlreadyReset = false;
          inputHTMLElement.value = "";
        }
      }
    }
    if (isAlreadyReset) {
      setStatus(StatusMessages.ALREADY_RESET);
    } else {
      setStatus(StatusMessages.RESET_MESSAGE);
    }
    setTimeout(() => {
      setStatus(StatusMessages.READY);
    }, 1000);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <div className="container flex">
        <div className="sudokuContainer">
          {SUDOKU_DIMENSION.map((row) => {
            return SUDOKU_DIMENSION.map((col) => {
              const rowSubSquare = Math.floor(row / 3);
              const colSubSquare = Math.floor(col / 3);
              const classNameForCell =
                (rowSubSquare + colSubSquare) % 2 === 0
                  ? `sudoku_cell cell_beige`
                  : "sudoku_cell cell_pink";
              return (
                <React.Fragment key={row + "br" + col}>
                  <div
                    style={{
                      display: "inline",
                    }}
                    onClick={() => {}}
                  >
                    <input
                      type="text"
                      id={`r${row}-c${col}`}
                      className={classNameForCell}
                      maxLength={1}
                      defaultValue={
                        sudoku2DArray[row][col] === "."
                          ? ""
                          : sudoku2DArray[row][col]
                      }
                      onChange={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        onCellChange(row, col, e.target.value);
                      }}
                      autoComplete={"off"}
                    />
                    {col === 8 ? <br /> : ""}
                  </div>
                </React.Fragment>
              );
            });
          })}
        </div>
      </div>
      <div className="status">{status}</div>
      <div className="btn-container">
        <button className="btn-primary" onClick={handleSolveSudoku}>
          Solve
        </button>
        <button className="btn-primary" onClick={handleReset}>
          Reset
        </button>
      </div>
    </motion.div>
  );
};
