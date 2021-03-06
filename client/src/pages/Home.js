import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "bootstrap/dist/css/bootstrap.css";

import FlipGallery from "../components/FlipGallery";

const Home = () => {
  return (
    <section className="row justify-content-center">
      <FlipGallery />
    </section>
  );
};

export default Home;
