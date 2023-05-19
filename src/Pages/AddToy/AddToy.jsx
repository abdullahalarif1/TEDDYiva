import React, { useState } from "react";
import Swal from "sweetalert2";

const AddToy = () => {
  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    const users = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(users);
    e.preventDefault();
    setPictureUrl("");
    setName("");
    setSellerName("");
    setSellerEmail("");
    setSubCategory("");
    setPrice("");
    setRating("");
    setQuantity("");
    setDescription("");
    // post
    fetch("http://localhost:5000/users", {
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
        }
      });
  };

  return (
    <div className="hero min-h-screen  bg-base-200">
      <form
        onSubmit={handleSubmit}
        className=" hero-content flex-col w-[80%] md:w-[50%] justify-center "
      >
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">Picture URL of the toy:</label>{" "}
              <input
                type="text"
                className="input input-bordered"
                placeholder="Photo url"
                value={pictureUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Name:</label>
              <input
                placeholder="Name"
                type="text"
                value={name}
                className="input input-bordered"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">Seller Name:</label>{" "}
              <input
                type="name"
                value={sellerName}
                className="input input-bordered"
                placeholder="Seller Name"
                onChange={(e) => setSellerName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">Seller Email:</label>
              <input
                type="email"
                name="email"
                value={sellerEmail}
                className="input input-bordered"
                placeholder="Seller email"
                onChange={(e) => setSellerEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              {" "}
              <label className="label">Sub-category:</label>
              <select
                value={subCategory}
                className="input input-bordered"
                onChange={(e) => setSubCategory(e.target.value)}
                required
              >
                <option value="">Select Sub-category</option>
                <option value="Math Toys">Fuzzy Teddy Bear</option>
                <option value="Language Toys">Honeypot Teddy Bear</option>
                <option value="Science Toys">Funskool Teddy Bear</option>
              </select>
            </div>
            <div className="form-control">
              {" "}
              <label className="label">Price:</label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              {" "}
              <label className="label">Rating:</label>
              <input
                type="number"
                value={rating}
                className="input input-bordered"
                placeholder="Rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">Available Quantity:</label>
              <input
                type="number"
                value={quantity}
                className="input input-bordered"
                placeholder="Quality"
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Detail Description:</label>
              <textarea
                value={description}
                className="input input-bordered "
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
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
