import React from "react";
import { BeatLoader, SyncLoader } from "react-spinners";

const BeatLoading = () => {
  return (
    <BeatLoader
      color={"#07a8ad"}
      cssOverride={{
        display: "block",
      }}
      size={8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default BeatLoading;
