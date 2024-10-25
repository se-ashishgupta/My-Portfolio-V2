import React, { memo, useState } from "react";
import { Controller } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const TextAreaField = memo((props) => {
  const {
    name,
    control,
    disabled = false,
    errors = {},
    maxlength = 1500,
    label,
    initialValue = "",
    readOnly = false,
    placeholder = "Enter",
    row = 6,
  } = props;

  return (
    <div>
      <Controller
        control={control}
        name={name}
        defaultValue={initialValue || ""}
        render={({ field: { onChange, value, onBlur, ref } }) => (
          <div className="">
            <label htmlFor={name} className="font-semibold text-text_color1">
              {label}
            </label>
            <div className={`relative mt-2`}>
              <textarea
                ref={ref}
                id={name}
                value={value}
                placeholder={placeholder || "Enter"}
                maxLength={maxlength}
                disabled={disabled}
                readOnly={readOnly}
                rows={row}
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                onBlur={onBlur}
                error={errors[name] ? errors[name] : null}
                className={`disabled:text-gray-400 text-text_color1 w-full  bg-transparent focus:outline-none rounded-md border-2 border-gray-400 disabled:border-gray-600 focus:border-primary_color  p-2 px-3 placeholder:text-sm placeholder:text-text_color`}
              />
            </div>

            {errors[name] && (
              <p className=" text-red-600 pl-1 pt-1 text-sm font-medium">
                {errors[name]?.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
});

export default TextAreaField;
