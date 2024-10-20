import React from "react";
import ScaleLoading from "./ScaleLoading";

const Loader = () => {
  return (
    <div className="h-[100dvh] w-full grid place-items-center bg-backPrimary-gradient">
      <ScaleLoading />
    </div>
  );
};

export default Loader;
