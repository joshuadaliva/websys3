const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
const dirs = ['ids', 'selfies', 'documents', 'contracts', 'payments', 'stalls', 'avatars'];

dirs.forEach(dir => {
  const dirPath = path.join(uploadDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let subDir = 'documents';
    if (file.fieldname === 'governmentIdPhoto' || file.fieldname === 'government_id') subDir = 'ids';
    else if (file.fieldname === 'selfieWithId' || file.fieldname === 'selfie') subDir = 'selfies';
    else if (file.fieldname === 'contractDocument') subDir = 'contracts';
    else if (file.fieldname === 'orDocumentation' || file.fieldname === 'proofImage') subDir = 'payments';
    else if (file.fieldname === 'stallPhoto') subDir = 'stalls';
    else if (file.fieldname === 'avatar') subDir = 'avatars';
    cb(null, path.join(uploadDir, subDir));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(new Error('Only images and documents are allowed'));
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

module.exports = upload;
