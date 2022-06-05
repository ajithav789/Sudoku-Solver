export const SUDOKU_DIMENSION = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const INITIAL_SUDOKU_ARRAY = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

export enum StatusMessages {
  NO_DIGIT_ENTERED = "Please enter atleast one digit.",
  RESET_MESSAGE = "Successsfully reset.",
  READY = "Ready to start.",
  ALREADY_RESET = "Nothing to reset.",
  INVALID_BOARD = "Invalid board.",
  SOLVED = "Solved!",
}
