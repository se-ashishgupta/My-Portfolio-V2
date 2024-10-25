import * as Yup from "yup";

export const chatBotSchema = Yup.object({
  question: Yup.string().required("Your Query is required"),
});
