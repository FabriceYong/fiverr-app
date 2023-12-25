import express from 'express';
import { fn } from '../controllers/reviewController.js'

const router = express.Router();

router.get('/test', fn)


export default router