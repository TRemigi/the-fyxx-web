import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import AdminArtists from "../components/AdminArtists";

const Admin = () => {
  console.log("hello");

  return (
    <>
      <AdminArtists />
    </>
  );
};

export default Admin;
