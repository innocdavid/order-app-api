import {
  fetchAllCoverImages,
  fetchSingleCoverImage,
} from '../controllers/coverImageController.js';
import express from 'express';

const router = express.Router();

/**
 * @openapi
 * '/api/cover-images':
 *  get:
 *     tags:
 *     - Cover Images  
 *     summary: Get the list of cover images
 *     description: Returns the list of available images with their id, name and url.
 *     responses:
 *       200:
 *         description: A list of cover images
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              images:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                    description: The id of the image
 *                  name:
 *                    type: string
 *                    description: The name of the image
 *                  url:
 *                    type: number
 *                    description: The url of the image 
 *          400:
 *            description: 'Image not found'
 *            schema: 
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *            example:
 *              application/json: 
 *                error: 'image not found'
 */
router.get("/", fetchAllCoverImages);
router.get("/:id", fetchSingleCoverImage);


export default router;