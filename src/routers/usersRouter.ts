import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

import UserController from '../controllers/userController';

const router = express.Router();

const uploadDir = path.join(__dirname, '../tmp/uploads');
const imageStorage = path.join(__dirname, '../uploads');

fs.mkdirSync(uploadDir, { recursive: true });
fs.mkdirSync(imageStorage, { recursive: true });
// create config for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  },
});
const upload = multer({ storage });

router.post('/create', upload.single('avatar'), (req, res) => {
  UserController.create(req, res);
});

router.get('/:id', (req, res) => {
  UserController.findById(req, res);
});

export default router;
