import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";

const StatCard = ({ item }) => {
  return (
    <div className="relative border-2 border-primary_color rounded-xl mt-4 bg-backPrimary-gradient">
      {/* Small box with Icon  */}
      <div className="absolute left-4 -top-5 bg-black border-2 border-primary_color text-text_color1 p-6 rounded-xl ">
        <figure className=" text-2xl">
          <MdOutlineLibraryBooks />
        </figure>
      </div>

      {/* Text Data Content  */}
      <div className="p-2 shadow-sm">
        <div className="row">
          <div>
            <div className=" text-right">
              <p className="text-lg text-text_color1"> Inquiries</p>
              <h5 className="font-bold text-3xl text-text_color1">281</h5>
            </div>
            <hr className="line-style my-[1.5rem]"></hr>
            <div className=" flex items-center gap-1">
              <p className=" text-green-600 text-lg font-semibold">+55%</p>
              <p className="text-lg text-text_color2"> than last week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
