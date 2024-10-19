import React from "react";

const Loader = () => {
  return (
    <div className="h-[100dvh] w-full grid place-items-center bg-backPrimary-gradient">
      <div className=" border-2 w-7 h-7 rounded-full border-primary_color border-l-0 animate-spin mx-auto"></div>
    </div>
  );
};

export default Loader;
