import React from "react";
import Loading from "../loading.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img className="my-3" src={Loading} alt="loading" />
    </div>
  );
};

export default Spinner;
