import React from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Outlet } from "react-router-dom";
import Topbar from "../components/layouts/Topbar";
import { useMyContext } from "../context/Context";
import Footer from "../components/layouts/Footer";
import SettingSidebar from "./dashboard/SettingSidebar";

const Home = () => {
  const { openSidebar, openSettingSidebar } = useMyContext();

  return (
    <div className="p-4 flex h-screen xl:gap-5 bg-black ">
      {/* Sidebar Layout  */}
      <div className="sticky top-0 left-0 z-20">
        <div
          className={`absolute h-full xl:sticky w-[15rem] rounded-xl overflow-hidden ${
            openSidebar ? " translate-x-0" : "translate-x-[-110%]"
          }  xl:translate-x-0 transition-all duration-300 border-2 border-primary_color bg-backPrimary-gradient`}
        >
          <Sidebar />
        </div>
      </div>

      {/* Content Layout  */}
      <div className="w-full xl:flex-1 overflow-y-auto border-2 border-primary_color p-3 rounded-xl">
        <div className="">
          <Topbar title={"Dashboard"} />
          <Outlet />
          <Footer />
        </div>
      </div>

      {/* Setting SideNavbar  */}
      <div
        className={`fixed right-0 top-0 h-full z-20 shadow-xl transition-all duration-300  ${
          openSettingSidebar ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <SettingSidebar />
      </div>
    </div>
  );
};

export default Home;
