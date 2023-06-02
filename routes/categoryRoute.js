import express from 'express';
import {
  fetchAllCategories,
  fetchSingleCategory,
  createCategory
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

/**
 * @openapi
 * '/api/categories/{id}':
 *  get:
 *     tags:
 *      - Categories 
 *     summary: Fetch a category by their id
 *     description: Fetch a category by their id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: category id
 *        required: true
 *        type: integer  
 *     responses:
 *       200:
 *        description: category returned
 *        content:
 *          application/json:  
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                    description: The id of the category
 *                  user:
 *                    type: string
 *                    description: the name of the user
 *                  name:
 *                    type: string
 *                    description: The name of the category
 *                  imageUrl:
 *                    type: string
 *                    description: The image url of the category
 *        400:
 *          description: 'Category not found'
 *          schema: 
 *            type: object
 *            properties:
 *              error:
 *                type: string
 *              example:
 *                application/json: 
 *                  error: 'Bad request'
 *          404:
 *            description: 'Category not found'
 *            schema: 
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example:
 *                    application/json: 
 *                      error: 'Category not found'
 */
router.get("/:id", fetchSingleCategory);

router.post("/", createCategory);

export default router;