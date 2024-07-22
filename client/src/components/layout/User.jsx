import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Loading from "../../pages/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getHomeDetailsThunkMiddleware } from "../../redux/features/home";

const User = () => {
  const dispatch = useDispatch();

  const { homeLoader } = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(getHomeDetailsThunkMiddleware());
  }, []);
  return (
    <div className="md:ml-[6rem] text-white transition-all duration-300">
      <Sidebar />
      <Suspense fallback={<Loading />}>
        {homeLoader ? <Loading /> : <Outlet />}
      </Suspense>
      <Footer />
    </div>
  );
};

export default User;
