import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/common/Fields/InputField";
import HandlerButton from "../../components/common/Button/HandlerButton";

const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    // resolver: yupResolver(authSchema),
  });
  return (
    <div className="h-[100dvh] bg-backPrimary-gradient grid place-items-center">
      <div className="w-[90%] md:w-[70%] lg:w-[45%] xl:w-[30%] border-2 border-primary_color shadow-xl  rounded-xl px-6 py-12">
        <h1 className=" text-3xl text-text_color1 text-center font-bold px-2 pb-8">
          Log In To Admin
        </h1>
        <form className=" space-y-3 md:space-y-6">
          <InputField
            control={control}
            name="email"
            errors={errors}
            label="Work Email Address"
            placeholder="Enter your email"
            disabled={false}
          />
          <InputField
            control={control}
            name="password"
            errors={errors}
            isPassword={true}
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <div className="pt-4">
            <HandlerButton text="Log In" type="submit" width="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
