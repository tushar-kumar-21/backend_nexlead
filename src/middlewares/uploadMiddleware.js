import multer from "multer";
import path from 'path';
import fs from 'fs';

const createDir = (folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = 'uploads/misc';
    if (file.fieldname === 'network_logo') folder = 'uploads/logos';
    if (file.fieldname === 'network_contract_files') folder = 'uploads/contracts';

    createDir(folder);
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const unique = `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, unique);
  }
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const imageTypes = /jpeg|jpg|png|webp/;
    const docTypes = /pdf|doc|docx/;

    if (file.fieldname === 'network_logo') {
      const isImage = imageTypes.test(file.mimetype);
      if (isImage) cb(null, true);
      else cb(new Error('Only images allowed for logo'));
    } else if (file.fieldname === 'network_contract_files') {
      const isDoc = docTypes.test(file.mimetype);
      if (isDoc) cb(null, true);
      else cb(new Error('Only documents (pdf, doc, docx) allowed for contracts'));
    } else {
      cb(new Error('Invalid field name'));
    }
  }
});
