import express from 'express'
import { delete_user } from '../controllers/userController.js';
import { verifyToken } from '../middleware/jwt.js';
import { getUser } from '../controllers/userController.js';

const router = express.Router();

router.delete('/:id', verifyToken, delete_user)
router.get('/:id', verifyToken, getUser)


export default router
