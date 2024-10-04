import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/common/Fields/InputField";

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
      <div className=" w-[30%] h-[50%] border-2 border-primary_color shadow-xl  rounded-xl p-3">
        <h1 className=" text-2xl text_color1 text-center font-bold py-4 px-2">
          Welcome Admin
        </h1>
        <div>
          <InputField
            control={control}
            name="email"
            errors={errors}
            label="Work Email Address"
            placeholder="Enter your email"
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
        </div>
      </div>
    </div>
  );
};

export default Login;
