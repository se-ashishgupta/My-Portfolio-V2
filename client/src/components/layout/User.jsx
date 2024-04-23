import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Loading from "../../pages/Loading";

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
