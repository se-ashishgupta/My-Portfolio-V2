import Joi from "joi";

export const updateUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile: Joi.string().required(),
  titles: Joi.array().items(Joi.string()),
  about: Joi.string(),
  thought: Joi.string(),
  address: Joi.string(),
  socialLinks: Joi.object({
    linkedin: Joi.string().uri(),
    github: Joi.string().uri(),
    facebook: Joi.string().uri(),
    twitter: Joi.string().uri(),
    instagram: Joi.string().uri(),
    youtube: Joi.string().uri(),
  }),
  file: Joi.any().required(),
});
