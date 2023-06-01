import {
  fetchAllCoverImages,
  fetchSingleCoverImage,
  createCoverImage,
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
 *         description: Sucessfully fetched cover images
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

/**
 * @openapi
 * '/api/cover-images/{id}':
 *  get:
 *     tags:
 *      - Cover Images 
 *     summary: Get a single cover image
 *     description: Get an cover image by its id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: cover image id
 *        required: true
 *        type: integer  
 *     responses:
 *       200:
 *        description: cover image returned
 *        content:
 *          application/json:  
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                    description: The id of the cover image
 *                  name:
 *                    type: string
 *                    description: The name of the cover image
 *                  url:
 *                    type: string
 *                    description: The image url of the cover image 
 *        400:
 *          description: 'Cover image not found'
 *          schema: 
 *            type: object
 *            properties:
 *              error:
 *                type: string
 *              example:
 *                application/json: 
 *                  error: 'Bad request'
 *          404:
 *            description: 'Cover image not found'
 *            schema: 
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example:
 *                    application/json: 
 *                      error: 'Item not found'
 */
router.get("/:id", fetchSingleCoverImage);

/**
 * @openapi
 * '/api/cover-images':
 *  post:
 *     tags:
 *     - Cover Images
 *     summary: Create a cover image
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - user
 *              - name
 *              - url
 *            properties:
 *              user:
 *                type: string
 *                default: "64706a47bc9ba5be71c18063"
 *              name:
 *                type: string
 *                default: "Grilled Meat"
 *              url:
 *                type: string
 *                default: "http://localhost"
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post("/", createCoverImage);

export default router;