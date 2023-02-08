import multer from "multer";
const maxSize = 2 * 1024 * 1024;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../Images/users");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
});

export default upload;
