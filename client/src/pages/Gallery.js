import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "bootstrap/dist/css/bootstrap.css";

import FlipGallery from "../components/FlipGallery";

const Gallery = () => {
  return (
    <>
      <FlipGallery />
    </>
  );
};

export default Gallery;
