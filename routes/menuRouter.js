// import modules
import express from 'express';
import getMenu from '../controllers/menuController.js';

// instance
const router = express.Router()

router.get("/", getMenu);

export default router;