import React from "react";
import Intro from "../components/Intro";
import Showroom from "../components/Showroom";
import About from "../components/About";
import "../scss/components/main.scss";

const Main = () => {
  return (
    <>
      <main className="main">
        <Intro />
        <Showroom />
        <About />
      </main>
    </>
  );
};

export default Main;
