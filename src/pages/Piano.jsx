import React from "react";
import { useParams } from "react-router-dom";
import data from "../Data/Piano";

const Piano = () => {
  const params = useParams();

  console.log(data[params.id].price);

  return <div>piano</div>;
};

export default Piano;
