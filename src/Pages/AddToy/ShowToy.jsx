import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowToy = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    pictureUrl,
    name,
    sellerName,
    sellerEmail,
    price,
    quantity,
    description,
    rating
  } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={pictureUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2>Seller Name: {sellerName}</h2>
        <h2>Seller Name: {sellerName}</h2>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShowToy;
