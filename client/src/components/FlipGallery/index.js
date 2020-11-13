import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";

const FlipGallery = () => {
  const testContent = ["1", "2", "3", "4", "5"];

  return (
    <>
      {testContent.map((item) => (
        <Card>{item}</Card>
      ))}
    </>
  );
};

export default FlipGallery;
