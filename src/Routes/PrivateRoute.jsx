import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";
import { AuthContext } from "./Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
