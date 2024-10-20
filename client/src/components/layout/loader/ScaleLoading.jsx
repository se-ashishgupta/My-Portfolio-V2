import React from "react";
import { ScaleLoader } from "react-spinners";

const ScaleLoading = () => {
  return (
    <ScaleLoader
      color={"#07a8ad"}
      cssOverride={{
        display: "block",
      }}
      size={16}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default ScaleLoading;
