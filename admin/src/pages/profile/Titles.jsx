import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/common/Fields/InputField";
import HandlerButton from "../../components/common/Button/HandlerButton";
import { titlesSchema } from "../../validation/profileValidation";

const Titles = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(titlesSchema),
  });

  const addTitleHandler = (payload) => {
    console.log(payload);
  };

  return (
    <div className=" text-white space-y-4">
      <form
        onSubmit={handleSubmit(addTitleHandler)}
        className="w-full md:w-[50%] flex flex-col items-center justify-center gap-3 mx-auto "
      >
        <div className="w-full">
          <InputField
            control={control}
            name="title"
            errors={errors}
            label="Add Title"
            placeholder="Enter your title here"
          />
        </div>

        <HandlerButton text="Add" width="w-fit" type="submit" />
      </form>

      <div className=" border w-full h-full">Titles</div>
    </div>
  );
};

export default Titles;
