import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  setMiscellaneous,
  toggleThemeThunkMiddleware,
} from "../../redux/features/miscellaneous";
import { useDispatch, useSelector } from "react-redux";

const SettingSidebar = () => {
  const dispatch = useDispatch();
  const { themeStatus, topBarFixedStatus } = useSelector(
    (state) => state.miscellaneous
  );

  const closeSettingBarHandler = () => {
    dispatch(setMiscellaneous({ settingSidebarStatus: false }));
  };
  const toggleTopbarHandler = () => {
    dispatch(setMiscellaneous({ topBarFixedStatus: !topBarFixedStatus }));
  };

  return (
    <div className="h-full bg-backPrimary-gradient w-[22rem] px-8 py-10 ">
      {/* Top Header  */}
      <div className=" ">
        <div className=" flex items-center justify-between">
          <h1 className=" text-text_color1 text-xl font-bold">
            Admin Configurator
          </h1>
          <figure
            className=" text-text_color1 text-xl cursor-pointer"
            onClick={closeSettingBarHandler}
          >
            <AiOutlineClose />
          </figure>
        </div>
        <p className=" text-text_color2 text-lg">See our dashboard options.</p>
        <hr className="line-style my-[1.5rem] "></hr>
      </div>

      {/* Switcher For Light Dark Mode  */}
      <div className=" flex items-center justify-between py-5">
        <h1 className=" font-bold  text-text_color1">Navbar Fixed</h1>
        <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
          <input
            type="checkbox"
            checked={topBarFixedStatus}
            onChange={toggleTopbarHandler}
            className="sr-only"
          />
          <span
            className={`slider mx-4 flex h-5 w-[45px] items-center rounded-full  duration-200 ${
              topBarFixedStatus ? " bg-primary_color" : "bg-[#CCCCCE]"
            }`}
          >
            <span
              className={`dot h-6 w-6 border-2 rounded-full bg-white duration-200 ${
                topBarFixedStatus ? "translate-x-[22px]" : ""
              }`}
            ></span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default SettingSidebar;
