import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import CustomError from './customError';

const uploadDir = path.join(__dirname, '../tmp/uploads');
const imageStorage = path.join(__dirname, '../images');

fs.mkdirSync(uploadDir, { recursive: true });
fs.mkdirSync(imageStorage, { recursive: true });
// create config for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}.jpg`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2000000 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, true);
      return;
    }
    const error = new CustomError(400, 'Wrong format file for avatar');
    cb(error);
  },
});

export const resizeAndSave = (filePath: string, permanentPath: string) => {
  sharp(filePath).resize({ height: 200, width: 200 }).toFile(permanentPath);
};

export default upload;
