import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

export const Basepage: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};
