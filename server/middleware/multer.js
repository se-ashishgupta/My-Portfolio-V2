import multer from "multer";

const storage = multer.memoryStorage();

const singleUpload = multer({ storage }).single("file");

const configureMulterUpload = (type, fieldName, maxCount = 1) => {
  const upload = multer({ storage });

  if (type === "single") {
    return upload.single(fieldName);
  } else if (type === "array") {
    return upload.array(fieldName, maxCount);
  } else {
    throw new Error("Invalid upload type specified. Use 'single' or 'array'.");
  }
};

export default configureMulterUpload;
