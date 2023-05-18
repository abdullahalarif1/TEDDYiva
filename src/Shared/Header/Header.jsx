import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo-removebg-preview.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Routes/Provider/AuthProvider";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  const items = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/myToys">My toys</Link>
          </li>
          <li>
            <Link to="/addToys">Add A toys</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        {user ? (
          <Link onClick={handleLogout}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar text-white bg-[#c7b1fa] border-b md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            {items}
            {/*  */}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="md:h-16" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {isHovered && <span>{user.displayName}</span>}
            <label
              tabIndex={0}
              className="btn ms-3 btn-ghost btn-circle avatar"
            >
              <div
                className="w-20  border rounded-full"
                onMouseEnter={() => setIsHovered(true)}
              >
                <img src={user.photoURL} />
              </div>
            </label>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
