import express from 'express'
import { delete_user } from '../controllers/userController.js';

const router = express.Router();

router.delete('/:id', delete_user)

export default router
