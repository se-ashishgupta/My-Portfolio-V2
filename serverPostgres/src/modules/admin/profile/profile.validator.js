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

export const avatarSchema = Yup.object({
  file: Yup.mixed()
    .required("Profile Image is required")
    .test(
      "fileType",
      "Unsupported file format, only JPG, PNG, GIF are allowed",
      (value) => {
        if (!value) return false; // If no file is provided, it fails the validation.
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        return allowedTypes.includes(value.mimetype);
      }
    )
    .test("fileSize", "File size must be less than 2MB", (value) => {
      if (!value) return false; // If no file is provided, it fails the validation.
      return value.size <= 2 * 1024 * 1024; // 2MB
    }),
});

export const addressSchema = Yup.object({
  street: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  postalCode: Yup.string(),
  country: Yup.string(),
});

export const socialLinksSchema = Yup.object({
  linkedin: Yup.string().url("URL is not valid"),
  github: Yup.string().url("URL is not valid"),
  facebook: Yup.string().url("URL is not valid"),
  twitter: Yup.string().url("URL is not valid"),
  instagram: Yup.string().url("URL is not valid"),
  youtube: Yup.string().url("URL is not valid"),
});
