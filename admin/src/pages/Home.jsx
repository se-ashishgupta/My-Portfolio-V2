import React, { useMemo } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../components/layouts/Topbar";
import Footer from "../components/layouts/Footer";
import SettingSidebar from "./dashboard/SettingSidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const { sidebarStatus, settingSidebarStatus } = useSelector(
    (state) => state.miscellaneous
  );
  const { profileLoader } = useSelector((state) => state.loader);

  const isLoading = useMemo(() => {
    return profileLoader;
  }, [profileLoader]);
  return (
    <div className="p-4 flex h-[100dvh] xl:gap-4 bg-black">
      {/* Sidebar Layout  */}
      <div className="sticky top-0 left-0 z-20">
        <div
          className={`absolute h-full xl:sticky w-[15rem] rounded-xl overflow-hidden ${
            sidebarStatus ? " translate-x-0" : "translate-x-[-110%]"
          }  xl:translate-x-0 transition-all duration-300 bg-backPrimary-gradient`}
        >
          <Sidebar />
        </div>
      </div>
      {/* Content Layout  */}
      <div className="w-full h-full xl:flex-1 flex flex-col overflow-y-auto">
        <Topbar />
        <div className=" flex-1 p-3">
          <Outlet />
        </div>
        <Footer />
      </div>
      {/* Setting SideNavbar  */}
      <div
        className={`fixed right-0 top-0 h-full z-20 shadow-xl transition-all duration-300  ${
          settingSidebarStatus ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <SettingSidebar />
      </div>
    </div>
  );
};

export default Home;
