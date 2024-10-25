import * as Yup from "yup";

export const generalInfoSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits long")
    .required("Mobile number is required"),
  about: Yup.string(),
  thought: Yup.string(),
  experience: Yup.number(),
});

export const addressSchema = Yup.object({
  street: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  postalCode: Yup.string(),
  country: Yup.string(),
});
