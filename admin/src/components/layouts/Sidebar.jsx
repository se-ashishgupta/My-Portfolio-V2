import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import { MdDashboard, MdLibraryBooks, MdNotifications } from "react-icons/md";
import { BiSolidUser, BiSolidUserDetail } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMiscellaneous } from "../../redux/features/miscellaneous";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { activeNavStatus, sidebarStatus } = useSelector(
    (state) => state.miscellaneous
  );

  const navItem = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      path: "/dashboard",
    },
    {
      title: "Experiance",
      icon: <BiSolidUserDetail />,
      path: "/experiance",
    },
    {
      title: "Skills",
      icon: <MdLibraryBooks />,
      path: "/skills",
    },
    {
      title: "Project",
      icon: <MdNotifications />,
      path: "/projects",
    },
    {
      title: "Blogs",
      icon: <BiSolidUser />,
      path: "/blogs",
    },
    {
      title: "Profile",
      icon: <BiSolidUser />,
      path: "/profile",
    },
    {
      title: "Query Request",
      icon: <BiSolidUser />,
      path: "/query",
    },
  ];

  const closeSidebar = () => {
    dispatch(setMiscellaneous({ sidebarStatus: !sidebarStatus }));
  };

  useEffect(() => {
    const currentNavItem = navItem.find(
      (item) => item.path === activeNavStatus
    );

    dispatch(setMiscellaneous({ currentNavStatus: currentNavItem?.title }));
  }, [activeNavStatus]);

  return (
    <section>
      {/* Logo */}
      <div className="border-b border-dotted p-4 flex items-center justify-between">
        {/* Logo with name  */}
        <div className="mr-2 flex items-center gap-1">
          <img src={logo} alt="logo" className="h-8" />
          <h1 className="text-text_color1 font-bold text-md text-center">
            Creative Programmer
          </h1>
        </div>
        {/* Close Button  */}
        <figure
          className="xl:hidden cursor-pointer text-gray-300 text-3xl border rounded-lg"
          onClick={closeSidebar}
        >
          <IoIosClose />
        </figure>
      </div>

      {/* NavItem  */}
      <div className="p-4">
        <nav className=" text-text_color1 flex flex-col gap-1">
          {navItem.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`rounded-lg px-4 py-3 ${
                activeNavStatus == item.path
                  ? " bg-primary_color"
                  : "hover:bg-gray-500"
              } transition-all duration-200`}
              onClick={() =>
                dispatch(setMiscellaneous({ activeNavStatus: item.path }))
              }
            >
              <div className=" flex items-center gap-4 ">
                <figure className="text-2xl">{item.icon}</figure>
                <h1>{item.title}</h1>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
