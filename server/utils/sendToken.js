export const sendToken = (res, user, message, statusCode = 200) => {
  const token = user.getJwtToken();

  res.status(statusCode).json({
    success: true,
    message,
    token,
  });
};
