import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import GoldBar from "../GoldBar";

const Footer = () => {
  return (
    <>
      <GoldBar />
      <footer className="row justify-content-center">
        <div>&copy;2020 by the Fyxx</div>
      </footer>
    </>
  );
};

export default Footer;
