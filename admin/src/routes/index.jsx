import React, { lazy, useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { checkIsUserAuthenticatedThunkMiddleware } from "../redux/features/auth";

const Login = lazy(() => import("../pages/auth/Login"));
const Home = lazy(() => import("../pages/Home"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const NotFound = lazy(() => import("../components/layouts/NotFound"));

const Routes = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, token } = useSelector((state) => state.auth);

  const route = useRoutes([
    {
      path: "/",
      element: <Navigate to={"/dashboard"} />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated} path={"/auth"}>
          <Home />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/auth",
      element: (
        <ProtectedRoute isAuthenticated={!isAuthenticated} path={"/dashboard"}>
          <Login />
        </ProtectedRoute>
      ),
      children: [],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  useEffect(() => {
    dispatch(checkIsUserAuthenticatedThunkMiddleware());
  }, [isAuthenticated, token, dispatch]);

  return route;
};

export default Routes;
