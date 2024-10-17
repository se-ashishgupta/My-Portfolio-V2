import { app } from "./app.js";
import { connectDB } from "./config/databaseConnection.js";
import cloudinary from "cloudinary";

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV || "Development";
const SERVER_SHUTDOWN_TIMEOUT = 10000;

(async () => {
  try {
    await connectDB();

    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
      api_key: process.env.CLOUDINARY_CLIENT_API,
      api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
    });

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT} in ${MODE} mode.`);
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1); // Exit process if DB connection fails
  }
})();

// Graceful Shutdown
const gracefulShutdown = (signal) => {
  console.log(`Received ${signal}. Gracefully shutting down...`);
  server.close(() => {
    console.log("All connections closed.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forced shutdown due to timeout.");
    process.exit(1);
  }, SERVER_SHUTDOWN_TIMEOUT);
};

// Handling process termination signals
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

// await connectDB();

// app.listen(PORT, () => {
//   try {
//     console.log(`Server is running on PORT ${PORT}`);
//   } catch (error) {
//     console.log(
//       `Having some issues to run the server, Please review this error and then try again : `,
//       error
//     );
//   }
// });
