import multer from "multer";
import ErrorHandler from "../utils/error.utils.js";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Accept only images
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new ErrorHandler("Please upload only images", 400), false);
  }
};

const configureMulterUpload = (type, fieldName, maxCount = 1) => {
  const upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 10 }, // 5MB limit
    fileFilter: fileFilter,
  });

  const handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      if (err.code === "LIMIT_FILE_SIZE") {
        return next(new ErrorHandler("File too large. Max size is 3MB", 400));
      }
      return next(new ErrorHandler(err.message, 400));
    } else if (err) {
      // An unknown error occurred when uploading
      return next(new ErrorHandler(err.message, 400));
    }
    // Everything went fine
    next();
  };

  if (type === "single") {
    return (req, res, next) => {
      upload.single(fieldName)(req, res, (err) =>
        handleMulterError(err, req, res, next)
      );
    };
  } else if (type === "array") {
    return (req, res, next) => {
      upload.array(fieldName, maxCount)(req, res, (err) =>
        handleMulterError(err, req, res, next)
      );
    };
  } else {
    throw new Error("Invalid upload type specified. Use 'single' or 'array'.");
  }
};

export default configureMulterUpload;
