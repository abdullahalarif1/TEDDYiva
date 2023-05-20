import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Routes/Provider/AuthProvider";

const AllToys = () => {
  const userData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchBySeller/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchText(data);
      });
  };

  return (
    <div className="overflow-x-auto md:px-12">
      <div className="flex justify-center ">
        <div className="form-control my-10 ">
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <table className="table w-full text-center">
        {/* head*/}
        <thead>
          <tr>
            <th></th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((toy, index) => (
            <tr key={toy._id}>
              <th>{index + 1}</th>
              <td>{toy.sellerName}</td>
              <td>{toy.name}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>
              <Link to={`/allToys/${toy._id}`}>
                <button className="btn btn-outline btn-primary">
                  View Details
                </button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
