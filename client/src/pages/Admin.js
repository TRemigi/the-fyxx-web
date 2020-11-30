import React, { useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";
import Spinner from "react-bootstrap/Spinner";
import AdminArtists from "../components/AdminArtists";

const Admin = () => {
  let { loading, data } = useQuery(QUERY_ME);

  const me = data?.me || {};
  let isAdmin = false;
  me.userType === "Admin" ? (isAdmin = true) : (isAdmin = false);

  return (
    <>
      {loading && <Spinner />}
      {!isAdmin ? (
        <section className="row justify-content-center mt-5">
          <h3>Access To This Page Is Restricted...</h3>
        </section>
      ) : (
        <AdminArtists />
      )}
    </>
  );
};

export default Admin;
