import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/common/Fields/InputField";
import { useDispatch, useSelector } from "react-redux";
import { updateSocialLinksThunkMiddleware } from "../../redux/features/profile";
import HandlerButton from "../../components/common/Button/HandlerButton";
import { addressSchema } from "../../validation/profileValidation";
import { setMiscellaneous } from "../../redux/features/miscellaneous";

const SocialMedia = () => {
  const dispatch = useDispatch();
  const { socialLinks } = useSelector((state) => state.profile);
  const { profileLoader } = useSelector((state) => state.loader);
  const { profileEditStatus } = useSelector((state) => state.miscellaneous);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(addressSchema),
    defaultValues: {
      linkedin: socialLinks?.linkedin || "",
      github: socialLinks?.github || "",
      facebook: socialLinks?.facebook || "",
      twitter: socialLinks?.twitter || "",
      instagram: socialLinks?.instagram || "",
      youtube: socialLinks?.youtube || "",
    },
  });

  const socialLinksUpdateHandler = (payload) => {
    dispatch(
      updateSocialLinksThunkMiddleware(payload, () =>
        dispatch(setMiscellaneous({ profileEditStatus: false }))
      )
    );
  };

  return (
    <div className=" space-y-6">
      <div>
        <form
          onSubmit={handleSubmit(socialLinksUpdateHandler)}
          className=" space-y-1"
        >
          <div className=" flex items-center justify-end">
            {profileEditStatus ? (
              <HandlerButton
                loading={profileLoader}
                width="w-fit"
                text="Save"
                type="submit"
              />
            ) : (
              <button
                className={`font-semibold text-text_color1 rounded-md px-4 py-1.5 bg-red-500`}
                onClick={() =>
                  dispatch(setMiscellaneous({ profileEditStatus: true }))
                }
              >
                Edit
              </button>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <InputField
              control={control}
              name="linkedin"
              errors={errors}
              label="LinkedIn"
              placeholder="Enter your linkedin url"
              disabled={!profileEditStatus}
            />
            <InputField
              control={control}
              name="github"
              errors={errors}
              label="Github"
              placeholder="Enter your github url"
              disabled={!profileEditStatus}
            />
            <InputField
              control={control}
              name="facebook"
              errors={errors}
              label="Facebook"
              placeholder="Enter your facebook url"
              disabled={!profileEditStatus}
            />
            <InputField
              control={control}
              name="twitter"
              errors={errors}
              label="Twitter"
              placeholder="Enter your twitter url"
              disabled={!profileEditStatus}
            />
            <InputField
              control={control}
              name="instagram"
              errors={errors}
              label="Instagram"
              placeholder="Enter your instagram url"
              disabled={!profileEditStatus}
            />
            <InputField
              control={control}
              name="youtube"
              errors={errors}
              label="YouTube"
              placeholder="Enter your youtube url"
              disabled={!profileEditStatus}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SocialMedia;
