const createHttpError = require("http-errors");
const multer = require("multer");
const path = require('path');

function uploader(subfolder_path, allowed_file_type, max_file_size, error_msg) {
  const UPLOAD_FOLDER = `${__dirname}/../uploads/${subfolder_path}/`;
console.log(UPLOAD_FOLDER,"hello upload")
  // define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOAD_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });

  // prepare the final multer uploads object
  const uploads = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      // console.log(file.mimetype,"file mime type");
      if (allowed_file_type.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createHttpError(error_msg));
      }
    },
  });
  return uploads;
}
module.exports = uploader;
