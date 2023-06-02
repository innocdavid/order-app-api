import express from 'express';
import {
  fetchAllCategories,
  fetchSingleCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

/**
 * @openapi
 * '/api/categories':
 *  get:
 *     tags:
 *     - Categories  
 *     summary: Fetch list of available categories
 *     description: Returns the list of available categories with their id, name and url.
 *     responses:
 *       200:
 *         description: Sucessfully fetched categories
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              categories:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                    description: The id of the category
 *                  user:
 *                    type: string
 *                    description: The name of user
 *                  name:
 *                    type: string
 *                    description: The name of the category
 *                  url:
 *                    type: number
 *                    description: The url of the category
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
router.get("/", fetchAllCategories);

router.get("/:id", fetchSingleCategory);

export default router;