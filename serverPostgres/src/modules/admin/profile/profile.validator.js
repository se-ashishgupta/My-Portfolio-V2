import * as Yup from "yup";

export const registerSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits long")
    .required("Mobile number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  file: Yup.mixed()
    .required("File is required")
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
