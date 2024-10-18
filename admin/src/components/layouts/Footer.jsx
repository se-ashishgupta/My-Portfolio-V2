import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex flex-col gap-4 xl:flex-row items-center justify-between py-4 px-8">
      <div className=" flex-wrap text-text_color1 justify-center flex items-center gap-1 text-center">
        {" "}
        © 2023, mad with{" "}
        <figure>
          <AiFillHeart />
        </figure>{" "}
        by <Link to={"/"}>Creative Programmer</Link> for better web.
      </div>

      <div className=" flex text-text_color1 font-semibold gap-4">
        <Link to={"/"}>Ashish Gupta</Link>
        <Link to={"/"}>Website</Link>
      </div>
    </div>
  );
};

export default Footer;
