import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Jumbo = () => {
  const video = require("../../assets/video/fyxx-ink.mp4");

  return (
    <Jumbotron fluid className="col-12 mb-0 video-container">
      <video id="jumbo-video" autoPlay muted loop src={video} />
      <div className="jumbo-content">
        <h1>Welcome to the Fyxx</h1>
        <h2>Connecting artists and art lovers around the world</h2>
        <p>
          <Button variant="dark">Learn more</Button>
        </p>
      </div>
    </Jumbotron>
  );
};

export default Jumbo;
