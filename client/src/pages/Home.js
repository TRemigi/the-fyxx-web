import React from "react";
import Auth from "../utils/auth";
import Landing from "../components/Landing";
import CoverPage from "../components/CoverPage";

const Home = () => {
  return <>{!Auth.loggedIn() ? <Landing /> : <CoverPage />}</>;
};

export default Home;
