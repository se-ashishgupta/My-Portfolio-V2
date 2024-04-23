import React from "react";

const PageHeader = ({ title, subTitle }) => {
  return (
    <div
      data-aos="fade-down"
      className="h-[12rem] w-full flex flex-col items-center justify-center gap-2 font-bold"
    >
      <h1 className="text-7xl text-primary_color hover:text-white transition-all duration-300">
        {title}
      </h1>
      <span className="text-text_color1 font-[cursive]"> {subTitle}</span>
    </div>
  );
};

export default PageHeader;
