import express from 'express';
import { create, findById } from '../controllers/userController';
import upload from '../libs/images';

const router = express.Router();

router.post('/create', upload.single('avatar'), create);

router.get('/:id', findById);

export default router;
