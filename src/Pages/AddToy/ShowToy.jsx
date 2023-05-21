import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowToy = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    pictureUrl,
    name,
    sellerName,
    email,
    price,
    quantity,
    description,
    rating,
  } = data;
  return (
    <div className="card  bg-base-100 shadow-xl p-5 md:m-12">
      <figure className="px-10 pt-10">
        <img src={pictureUrl} alt="Shoes" className="rounded-xl w-96" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2>Seller Name: {sellerName}</h2>
        <h2>Seller Email: {email}</h2>
        <h2>Price: ${price}</h2>
        <h2>Ratings: {rating}</h2>
        <h2>Quantity: {quantity}</h2>
        <h2>Description:{description}</h2>

        
      </div>
    </div>
  );
};

export default ShowToy;
