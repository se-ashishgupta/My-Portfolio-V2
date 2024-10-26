import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../components/common/Fields/InputField";
import { useDispatch, useSelector } from "react-redux";
import { updateAddressThunkMiddleware } from "../../redux/features/profile";
import TextAreaField from "../../components/common/Fields/TextAreaField";
import HandlerButton from "../../components/common/Button/HandlerButton";
import { addressSchema } from "../../validation/profileValidation";

const Address = () => {
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.profile);
  const { profileLoader } = useSelector((state) => state.loader);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(addressSchema),
    defaultValues: {
      street: address?.street || "",
      city: address?.city || "",
      state: address?.state || "",
      postalCode: address?.postalCode || "",
      country: address?.country || "",
    },
  });

  const [editStatus, setEditStatus] = useState(false);

  const addressUpdateHandler = async (payload) => {
    dispatch(
      updateAddressThunkMiddleware(payload, () => {
        setEditStatus(false);
      })
    );
  };

  return (
    <div className=" space-y-6">
      <div>
        <form
          onSubmit={handleSubmit(addressUpdateHandler)}
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
            <div className=" col-span-2">
              <TextAreaField
                control={control}
                name="street"
                errors={errors}
                label="Street"
                placeholder="Enter your street"
                disabled={!editStatus}
              />
            </div>
            <InputField
              control={control}
              name="city"
              errors={errors}
              label="City"
              placeholder="Enter your city"
              disabled={!editStatus}
            />
            <InputField
              control={control}
              name="state"
              errors={errors}
              label="State"
              placeholder="Enter your state"
              disabled={!editStatus}
            />
            <InputField
              control={control}
              name="postalCode"
              errors={errors}
              label="Postal Code"
              placeholder="Enter your postal code"
              disabled={!editStatus}
            />
            <InputField
              control={control}
              name="country"
              errors={errors}
              label="Country"
              placeholder="Enter your country"
              disabled={!editStatus}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
