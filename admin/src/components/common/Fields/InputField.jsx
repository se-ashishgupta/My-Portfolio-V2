import React, { memo, useState } from "react";
import { Controller } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputField = memo((props) => {
  const {
    name,
    control,
    disabled = false,
    type = "text",
    errors = {},
    isPassword,
    maxlength = 1000,
    label,
    initialValue = "",
    readOnly = false,
    dateTime = false,
    placeholder = "Enter",
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
              <input
                ref={ref}
                id={name}
                type={
                  dateTime
                    ? "datetime-local"
                    : isPasswordVisible
                    ? "text"
                    : type
                }
                value={type !== "file" ? value : undefined}
                placeholder={placeholder || "Enter"}
                maxLength={maxlength}
                disabled={disabled}
                readOnly={readOnly}
                onChange={(e) => {
                  if (type === "file") {
                    onChange(e.target.files[0]);
                  } else if (type === "checkbox") {
                    onChange(e.target.checked);
                  } else {
                    onChange(e.target.value);
                  }
                }}
                onBlur={onBlur}
                error={errors[name] ? errors[name] : null}
                className={`disabled:text-gray-400 text-text_color1 w-full  bg-transparent focus:outline-none rounded-md border-2 border-gray-400 disabled:border-gray-600 focus:border-primary_color  p-2 px-3 placeholder:text-sm placeholder:text-text_color`}
              />
              {isPassword && (
                <div
                  className="absolute grid w-5 h-5 place-items-center focus:outline-none text-blue-gray-500 top-2/4 right-3 -translate-y-2/4 cursor-pointer"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                >
                  {isPasswordVisible ? (
                    <AiOutlineEyeInvisible color="#aaa" size={20} />
                  ) : (
                    <AiOutlineEye color="#aaa" size={20} />
                  )}{" "}
                </div>
              )}
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

export default InputField;
