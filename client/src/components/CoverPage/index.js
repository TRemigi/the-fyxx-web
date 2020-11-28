import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../../utils/queries";

const CoverPage = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const me = data?.me || {};

  console.log(me);

  return (
    <section className="row justify-content-center m-5">
      <div className="col-12 mr-auto">
        <h1>What's Happening</h1>
      </div>
    </section>
  );
};

export default CoverPage;
