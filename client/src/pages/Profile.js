import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { QUERY_USER, QUERY_ME } from "../utils/queries";

const Profile = () => {
  const { _id: userParam } = useParams();

  let { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { _id: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="row justify-content-center">
      <h2 className="bg-dark text-secondary p-3 display-inline-block">
        Viewing {user.firstName}'s profile.
      </h2>
    </section>
  );
};

export default Profile;
