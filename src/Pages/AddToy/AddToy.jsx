import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Routes/Provider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const pictureUrl = e.target.pictureUrl.value;
    const email = user?.email;
    const sellerName = e.target.sellerName.value;
    const subCategory = e.target.subCategory.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;

    const users = {
      pictureUrl,
      name,
      sellerName,
      email,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(users);

    // post
    fetch("http://localhost:5000/myToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "You inserted data successfully!", "success");
          // e.target.reset();
        }
      });
  };

  return (
    <div className="hero min-h-screen  bg-base-200">
      <form
        onSubmit={handleSubmit}
        className=" hero-content flex-col w-[80%] md:w-[50%] justify-center "
      >
        <h1 className="text-3xl font-mono text-indigo-300 py-3">Add A Toy</h1>
        <div className="card flex-shrink-0 w-full border-2 bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">Picture URL of the toy:</label>{" "}
              <input
                type="text"
                className="input input-bordered"
                placeholder="Photo url"
                name="pictureUrl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Name:</label>
              <input
                placeholder="Name"
                type="text"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Seller Name:</label>{" "}
              <input
                type="sellerName"
                className="input input-bordered"
                placeholder="Seller Name"
                name="sellerName"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">Seller Email:</label>
              <input
                type="email"
                defaultValue={user?.email}
                name="email"
                placeholder="Seller Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              {" "}
              <label className="label">Sub-category:</label>
              <select
                name="subCategory"
                className="input input-bordered"
                required
              >
                <option value="">Select Sub-category</option>
                <option value="Fuzzy Teddy Bear">Fuzzy Teddy Bear</option>
                <option value="Honeypot Teddy Bear">Honeypot Teddy Bear</option>
                <option value="Funskool Teddy Bear">Funskool Teddy Bear</option>
              </select>
            </div>
            <div className="form-control">
              {" "}
              <label className="label">Price:</label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="Price"
                name="price"
                required
              />
            </div>

            <div className="form-control">
              {" "}
              <label className="label">Rating:</label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="Rating"
                name="rating"
              />
            </div>

            <div className="form-control">
              <label className="label">Available Quantity:</label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="Quality"
                name="quantity"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Detail Description:</label>
              <textarea
                name="description"
                className="input input-bordered "
                placeholder="Description"
                required
              />
            </div>

            <button
              className="bg-[#c7b1fa] w-full btn btn-outline text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
