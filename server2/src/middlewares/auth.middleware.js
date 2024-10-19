import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/error.utils.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(
        new ErrorHandler("Authentication failed. Please login again.", 401)
      );
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return next(
        new ErrorHandler("Authentication failed. Please login again.", 401)
      );
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return next(
            new ErrorHandler("Session expired. Please login again.", 401)
          );
        } else if (err.name === "JsonWebTokenError") {
          return next(
            new ErrorHandler("Authentication failed. Please login again.", 401)
          );
        } else {
          return next(
            new ErrorHandler("Authentication error. Please try again.", 401)
          );
        }
      }

      req.user = decodedToken; // Attaching decoded user info to the request object
      next();
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Authentication Middleware Error:", error);
    }
    return next(new ErrorHandler("Server error during authentication", 500));
  }
};
