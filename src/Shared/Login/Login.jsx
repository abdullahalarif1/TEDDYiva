import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-removebg-preview.png";
import GoogleGit from "../GoogleGit/GoogleGit";

const Login = () => {
  return (
    <div className="p-12">
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div className="text-center">
          <img src={logo} alt="" />
          <a href="/">
            <h3 className="text-4xl font-bold text-[#c7b1fa]">Please Login</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                  className="block hover:pl-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-start">
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  required
                  className="block hover:pl-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  bg-[#c7b1fa] rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            New to TEDDYiva?{" "}
            <span>
              <Link
                className="text- text-indigo-400 hover:underline"
                to="/signUp"
              >
                Please Sign-up
              </Link>
            </span>
          </div>

          {/* <p className="text-error">{error}</p>
          <p className="text-success">{success}</p> */}

          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <GoogleGit></GoogleGit>
        </div>
      </div>
    </div>
  );
};

export default Login;
