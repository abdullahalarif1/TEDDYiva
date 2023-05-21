import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SubDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://toy-marketplace-server-brown-two.vercel.app/myToys/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="text-center border m-12 rounded-xl">
      <img
        className="md:w-96 border-2 rounded-xl mt-10 border-indigo-200 p-2  mx-auto"
        src={category.pictureUrl}
        alt=""
      />
      <p className="font-bold py-2">{category.name}</p>
      <p> Seller Name: {category.sellerName}</p>
      <h2>Seller Email: {category.email}</h2>
      <h2>Price: ${category.price}</h2>
      <h2>Ratings: {category.rating}</h2>
      <h2>Quantity: {category.quantity}</h2>
      <p>Description: {category.description}</p>
    </div>
  );
};

export default SubDetail;
