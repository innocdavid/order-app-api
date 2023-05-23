import {
  fetchAllCoverImages
} from '../controllers/coverImageController.js';

import express from 'express';

const router = express.Router();


router.get("/", fetchAllCoverImages);


export default router;