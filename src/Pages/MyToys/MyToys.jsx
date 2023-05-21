import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../Shared/UseTitle/UseTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const handleSortAscending = async () => {
    try {
      const res = await fetch(
        `https://toy-marketplace-server-brown-two.vercel.app/myToys?${user.email}&order=ascending`
      );
      const data = await res.json();
      setMyToys(data);
    } catch (error) {
      console.error("Error fetching toys:", error);
    }
  };

  const handleSortDescending = async () => {
    try {
      const res = await fetch(
        `https://toy-marketplace-server-brown-two.vercel.app/myToys?${user.email}&order=descending`
      );
      const data = await res.json();
      setMyToys(data);
    } catch (error) {
      console.error("Error fetching toys:", error);
    }
  };

  const url = `https://toy-marketplace-server-brown-two.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);
  return (
    <div className="py-10">
      <div className="dropdown mb-5 flex justify-center items-center">
        <label tabIndex={0} className="btn  border-0 bg-[#c7b1fa]">
          Sort By
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ps-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={handleSortAscending}>Price-Ascending</a>
          </li>
          <li>
            <a onClick={handleSortDescending}>Price-descending</a>
          </li>
        </ul>
      </div>

      {/* Render the toys */}
      <div className="overflow-x-auto w-full p-2 md:p-10">
        <table className="table w-full  text-center">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Rating</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toys) => (
              <MyToysRow
                key={toys._id}
                myToys={myToys}
                setMyToys={setMyToys}
                toys={toys}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
