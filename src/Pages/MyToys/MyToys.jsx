import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);
  return (
    <div>
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
