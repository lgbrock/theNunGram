const multer = require('multer');
const path = require('path');

module.exports = multer({
  storage: multer.diskStorage({}),
  //A function that makes sure the file uploaded IS one of the following file types
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png' && ext !== '.mp4' && ext !== '.webp' && ext !== '.gif' && ext !== '.tif' && ext !== '.tiff') {
      cb(new Error('File type is not supported'), false);
      return;
    }
    cb(null, true);
  },
});
