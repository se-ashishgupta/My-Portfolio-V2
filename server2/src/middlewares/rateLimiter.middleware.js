import rateLimit from "express-rate-limit";
import ErrorHandler from "../utils/error.utils.js";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again after 15 minutes.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res, next) => {
    // Use your custom ErrorHandler for rate limit errors
    next(
      new ErrorHandler(
        "Too many requests from this IP, please try again after 15 minutes.",
        429
      )
    );
  },
});

export default limiter;

// max: (req) => {
//     if (req.path === '/login') return 5; // Limit login attempts to 5 per 15 minutes
//     return 100; // Default to 100 requests for other routes
//   },
//   skip: (req) => {
//     // Skip rate limiting for internal IPs
//     return req.ip === '192.168.0.1';
//   }
