import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, path, children }) => {
  if (!isAuthenticated) {
    return <Navigate to={path} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
