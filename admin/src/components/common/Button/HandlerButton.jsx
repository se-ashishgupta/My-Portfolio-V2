import React from "react";

const HandlerButton = ({
  text = "Button",
  type = "button",
  width = "w-full",
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      className={`font-semibold text-text_color1 rounded-lg px-4 py-1.5 bg-primary_color ${width} ${
        (disabled || loading) && "opacity-60"
      } cursor-pointer`}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className=" border-2 w-7 h-7 rounded-full border-text_color1 border-l-primary_color animate-spin mx-auto"></div>
      ) : (
        text
      )}
    </button>
  );
};

export default HandlerButton;
