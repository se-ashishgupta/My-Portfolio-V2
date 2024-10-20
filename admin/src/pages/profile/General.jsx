import React, { useEffect, useMemo } from "react";
import avatar from "../../assets/avatar.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/common/Fields/InputField";
import { MdOutlineDeleteSweep, MdOutlineFileUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getGeneralInfoThunkMiddleware,
  updateProfileThunkMiddleware,
} from "../../redux/features/profile";

const General = () => {
  const dispatch = useDispatch();
  const { generalInfo } = useSelector((state) => state.profile);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(),
    defaultValues: {
      firstName: generalInfo?.firstName || "",
      lastName: generalInfo?.lastName || "",
      email: generalInfo?.email || "",
      mobile: generalInfo?.mobile || "",
    },
  });

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    dispatch(updateProfileThunkMiddleware(formData));
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
          <figure className="cursor-pointer">
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
        <form action="" className="grid md:grid-cols-2 gap-3">
          <InputField
            control={control}
            name="firstName"
            errors={errors}
            label="First Name"
            placeholder="Enter your First Name"
            disabled={false}
          />
          <InputField
            control={control}
            name="lastName"
            errors={errors}
            label="Last Name"
            placeholder="Enter your Last Name"
            disabled={false}
          />
          <InputField
            control={control}
            name="email"
            errors={errors}
            label="Email"
            placeholder="Enter your email"
            disabled={false}
          />
          <InputField
            control={control}
            name="mobile"
            errors={errors}
            label="Mobile"
            placeholder="Enter your mobile"
            disabled={false}
          />
        </form>
      </div>
    </div>
  );
};

export default General;
