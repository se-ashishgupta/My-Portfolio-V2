import React from "react";
import { AiFillHome, AiFillSetting, AiFillBell } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMiscellaneous } from "../../redux/features/miscellaneous";

const Topbar = () => {
  const dispatch = useDispatch();
  const {
    topBarFixedStatus,
    settingSidebarStatus,
    sidebarStatus,
    currentNavStatus,
  } = useSelector((state) => state.miscellaneous);

  const sidebarHandler = () => {
    dispatch(setMiscellaneous({ sidebarStatus: !sidebarStatus }));
  };

  const settingSidebarHandler = () => {
    dispatch(setMiscellaneous({ settingSidebarStatus: !settingSidebarStatus }));
  };

  return (
    <div
      className={` ${
        topBarFixedStatus && "sticky top-0 left-0"
      }  z-10 rounded-xl h-[4rem] flex items-center justify-between px-4 py-10 mb-4 bg-backPrimary-gradient`}
    >
      <div className=" ">
        <div className=" flex items-center gap-2 font-semibold text-text_color1 ">
          <Link
            to={"/"}
            onClick={() =>
              dispatch(setMiscellaneous({ activeNavStatus: "/dashboard" }))
            }
          >
            <figure>
              <AiFillHome />
            </figure>
          </Link>
          <span>{"/"}</span>
          <span>{currentNavStatus}</span>
        </div>

        <h1 className="text-text_color1 text-xl font-bold">
          {currentNavStatus}
        </h1>
      </div>

      <div className=" flex items-center gap-5 text-2xl text-text_color2">
        <figure className=" cursor-pointer" onClick={settingSidebarHandler}>
          <AiFillSetting />
        </figure>
        <figure className="xl:hidden cursor-pointer" onClick={sidebarHandler}>
          {sidebarStatus ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </figure>
        <Link>
          <AiFillBell />
        </Link>
        <Link
          to={"/profile"}
          onClick={() =>
            dispatch(setMiscellaneous({ activeNavStatus: "/profile" }))
          }
        >
          <HiUserCircle />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
