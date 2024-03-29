import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = ({ toys, setMyToys, myToys }) => {
  console.log(toys);

  const { pictureUrl, price, name, rating, quantity, _id } = toys;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(
          `https://toy-marketplace-server-brown-two.vercel.app/myToys/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myToys.filter((t) => t._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = () => {};

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-error btn-sm text-white"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {pictureUrl && (
                <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <th>
        <Link to={`/edit/${_id}`}>
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-primary btn-outline btn-xs"
          >
            Update
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysRow;
