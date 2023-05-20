import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SubDetail = () => {
  const { id } = useParams();
  console.log(id);

  return <div></div>;
};

export default SubDetail;
