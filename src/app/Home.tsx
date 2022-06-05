import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { Header } from "./Header";

export const Home: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
};
