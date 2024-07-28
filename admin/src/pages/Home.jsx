import React from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Clients from "./clients/Clients";
import Tansaction from "./transaction/Tansaction";
import Notification from "./notification/Notification";
import Profile from "./profile/Profile";
import Topbar from "../components/layouts/Topbar";
import { useMyContext } from "../context/Context";
import Footer from "../components/layouts/Footer";
import SettingSidebar from "../components/dashboard/SettingSidebar";

const Home = () => {
  const { openSidebar, openSettingSidebar } = useMyContext();

  return (
    <div className="p-4 flex h-screen xl:gap-5 dark:bg-darkBackTeritiary_color  bg-gray-200 overflow-y-auto">
      {/* Sidebar Layout  */}
      <div className="sticky top-0 left-0 z-20">
        <div
          className={`absolute h-full xl:sticky w-[15rem] dark:bg-darkBackPrimary_color bg-backPrimary_color rounded-xl overflow-hidden ${
            openSidebar ? " translate-x-0" : "translate-x-[-110%]"
          }  xl:translate-x-0 transition-all duration-300`}
        >
          <Sidebar />
        </div>
      </div>

      {/* Content Layout  */}
      <div className="w-full xl:flex-1">
        <div className="p-2">
          <Topbar title={"Dashboard"} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/transaction" element={<Tansaction />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
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
