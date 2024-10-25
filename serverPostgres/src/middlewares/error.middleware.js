export const ErrorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Inernal Server Error";
  err.status = err.status || 500;

  return res.status(err.status).json({
    success: false,
    message: err.message,
  });
};
