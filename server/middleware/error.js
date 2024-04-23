const ErrorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  if (err.message === "jwt expired") {
    err.statusCode = 403;
    err.message = "Token Expired, Please Login Again";
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorMiddleware;
