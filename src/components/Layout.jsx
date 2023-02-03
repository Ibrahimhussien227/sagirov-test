import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Starfield from "./Starfield";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Starfield stars={1500} />
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
};

export default Layout;
