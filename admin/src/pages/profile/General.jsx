import React, { useEffect, useMemo, useState } from "react";
import avatar from "../../assets/avatar.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/common/Fields/InputField";
import { MdOutlineDeleteSweep, MdOutlineFileUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProfileThunkMiddleware,
  updateGeneralInfoThunkMiddleware,
  updateProfileThunkMiddleware,
} from "../../redux/features/profile";
import TextAreaField from "../../components/common/Fields/TextAreaField";
import HandlerButton from "../../components/common/Button/HandlerButton";
import { generalInfoSchema } from "../../validation/profileValidation";

const General = () => {
  const dispatch = useDispatch();
  const { generalInfo } = useSelector((state) => state.profile);
  const { profileLoader } = useSelector((state) => state.loader);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(generalInfoSchema),
    defaultValues: {
      firstName: generalInfo?.firstName || "",
      lastName: generalInfo?.lastName || "",
      email: generalInfo?.email || "",
      mobile: generalInfo?.mobile || "",
      about: generalInfo?.about || "",
      thought: generalInfo?.thought || "",
      experience: generalInfo?.experience || "",
    },
  });

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    dispatch(updateProfileThunkMiddleware(formData));
  };

  const handleProfileDelete = (e) => {
    dispatch(deleteProfileThunkMiddleware());
  };

  const [editStatus, setEditStatus] = useState(false);
  const generalProfileUpdateHandler = async (payload) => {
    dispatch(
      updateGeneralInfoThunkMiddleware(payload, () => {
        setEditStatus(false);
      })
    );
  };

  return (
    <div className=" space-y-6">
      <div className=" flex items-center justify-between gap-4 flex-wrap">
        <img
          src={generalInfo?.avatar?.url || avatar}
          alt="avatar"
          className="h-32 w-32 border-2 border-primary_color rounded-2xl overflow-hidden object-cover"
          loading="lazy"
        />
        <div className=" flex items-center gap-4">
          <figure onClick={handleProfileDelete} className="cursor-pointer">
            <MdOutlineDeleteSweep className=" text-red-500" size={34} />
          </figure>

          <label
            htmlFor="upload_profile_image"
            className="text-text_color1 w-fit px-4 py-1 rounded-md bg-primary_color cursor-pointer flex items-center gap-3 relative"
          >
            <input
              id="upload_profile_image"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleProfileChange}
            />
            <MdOutlineFileUpload size={26} />
            Upload
          </label>
        </div>
      </div>

      <div>
        <form
          onSubmit={handleSubmit(generalProfileUpdateHandler)}
          className=" space-y-1"
        >
          <div className=" flex items-center justify-end">
            {editStatus ? (
              <HandlerButton
                loading={profileLoader}
                width="w-fit"
                text="Save"
                type="submit"
              />
            ) : (
              <button
                className={`font-semibold text-text_color1 rounded-md px-4 py-1.5 bg-red-500`}
                onClick={() => setEditStatus(true)}
              >
                Edit
              </button>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <InputField
              control={control}
              name="firstName"
              errors={errors}
              label="First Name"
              placeholder="Enter your First Name"
              disabled={!editStatus}
            />
            <InputField
              control={control}
              name="lastName"
              errors={errors}
              label="Last Name"
              placeholder="Enter your Last Name"
              disabled={!editStatus}
            />
            <InputField
              control={control}
              name="email"
              errors={errors}
              label="Email"
              placeholder="Enter your email"
              disabled={!editStatus}
            />
            <InputField
              control={control}
              name="mobile"
              errors={errors}
              label="Mobile"
              placeholder="Enter your mobile"
              disabled={!editStatus}
            />
            <InputField
              control={control}
              name="experience"
              errors={errors}
              label="Experience"
              placeholder="Enter your experience"
              disabled={!editStatus}
              type="number"
            />
            <div className=" col-span-2">
              <TextAreaField
                control={control}
                name="about"
                errors={errors}
                label="About"
                placeholder="Enter your about"
                disabled={!editStatus}
              />
              <TextAreaField
                control={control}
                name="thought"
                errors={errors}
                label="Thought"
                placeholder="Enter your thought"
                disabled={!editStatus}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default General;
