import express from 'express'
import { fn } from '../controllers/conversationController.js';

const router = express.Router();

router.get('/test', fn)

export default router