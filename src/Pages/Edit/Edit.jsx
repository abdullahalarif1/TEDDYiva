import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
  const users = useLoaderData();
  console.log(users);

  // Price, available quantity, Detail description)
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const newMyToys = { name, price, quantity, description };
    console.log(newMyToys);

    // update
    fetch(
      `https://toy-marketplace-server-brown-two.vercel.app/myToys/${users._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newMyToys),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="bg-[#c7b1fa] rounded-md text-white font-semibold text-4xl text-center m-3 py-3 md:mx-32">
        My Toy Update System
      </h1>
      <div className="border py-8 mx-12 ">
        <h2 className="text-center text-[#c7b1fa] font-mono font-semibold py-5 text-2xl">
          Update My Toy
        </h2>

        <form
          onSubmit={handleUpdate}
          className="flex flex-col space-y-5 justify-center items-center "
        >
          <input
            type="name"
            defaultValue={users?.name}
            required
            name="name"
            placeholder="Update Name"
            className="input input-bordered  w-full max-w-xs"
          />
          <input
            type="number"
            name="price"
            defaultValue={users?.price}
            placeholder="Update Price"
            required
            className="input input-bordered  w-full max-w-xs"
          />
          <input
            type="number"
            name="quantity"
            required
            defaultValue={users?.quantity}
            placeholder="Update Quantity"
            className="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            name="description"
            defaultValue={users?.description}
            required
            placeholder="Update Description"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="submit"
            placeholder="Name"
            value="Update"
            className="input input-bordered input-warning w-full max-w-xs border-0 text-white bg-[#c7b1fa]"
          />
        </form>
      </div>
    </div>
  );
};
export default Edit;
