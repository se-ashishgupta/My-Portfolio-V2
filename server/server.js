import { app } from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from "cloudinary";

const PORT = process.env.PORT || 5000;

connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});
