import express from 'express'
import { delete_user } from '../controllers/userController.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.delete('/:id', verifyToken, delete_user)

export default router
