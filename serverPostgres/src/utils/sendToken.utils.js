import jwt from "jsonwebtoken";

export const sendToken = (res, user, message, statusCode = 200) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(statusCode).json({
    success: true,
    message,
    token,
  });
};
