import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
export const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container header flex">
        <h1 className="title ">Sudoku Solver</h1>
        <nav className="navbar">
          <ul>
            <li
              onClick={() => {
                navigate("/Sudoku-Solver-TypescriptReact");
              }}
            >
              <span>Home</span>
            </li>
            <li
              onClick={() => {
                navigate("/Sudoku-Solver-TypescriptReact/about");
              }}
            >
              <span>About</span>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};
