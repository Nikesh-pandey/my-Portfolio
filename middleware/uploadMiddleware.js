const multer = require('multer');
const path = require('path');

// Configure storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder to save uploaded files
  },
  filename: function (req, file, cb) {
    // Use timestamp + original file extension for uniqueness
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Create multer upload middleware
const upload = multer({ storage: storage });

module.exports = upload;
