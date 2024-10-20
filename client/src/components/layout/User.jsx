import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Loader from "../../components/layout/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getHomeDetailsThunkMiddleware } from "../../redux/features/home";

const User = () => {
  return (
    <div className="md:ml-[6rem] text-white transition-all duration-300">
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default User;
