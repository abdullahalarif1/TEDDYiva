import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Error/ErrorPage";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";
import AddToy from "../../Pages/AddToy/AddToy";
import AllToys from "../../Pages/AllToys/AllToys";
import Blog from "../../Pages/Blog/Blog";
import ShowToy from "../../Pages/AddToy/ShowToy";
import PrivateRoute from "../PrivateRoute";
import MyToys from "../../Pages/MyToys/MyToys";
import Edit from "../../Pages/Edit/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addToys",
        element: <AddToy></AddToy>,
      },
      {
        path: "/edit/:id",
        element: <Edit></Edit>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/myToys/${params.id}`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/allToys/:id",
        element: (
          <PrivateRoute>
            <ShowToy></ShowToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
