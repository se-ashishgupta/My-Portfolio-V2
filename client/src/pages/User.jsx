import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import Loading from "./Loading";

const User = () => {
  return (
    <div className="md:ml-[6rem] text-white transition-all duration-300">
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default User;
