import express from 'express';
import {
  fetchAllCategories,
  fetchSingleCategory,
  createCategory,
  updateCategory,
  removeCategory,
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

/**
 * @openapi
 * '/api/categories':
 *  post:
 *     tags:
 *     - Categories
 *     summary: Create a category
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - user
 *              - name
 *              - imageUrl
 *            properties:
 *              user:
 *                type: string
 *                default: "64706a47bc9ba5be71c18063"
 *              name:
 *                type: string
 *                default: "test"
 *              imageUrl:
 *                type: string
 *                default: "http://localhost/images/category.png"
 *     responses:
 *      201:
 *        description: category Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post("/", createCategory);

/**
 * @openapi
 * '/api/categories/{id}':
 *  put:
 *     tags:
 *     - Categories
 *     summary: Update a category by their id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the category
 *        type: integer
 *     requestBody:
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required: 
 *              - id
 *            properties:
 *              name:
 *                type: string
 *              url:
 *                type: string
 *     responses:
 *      200:
 *        description: Category updated successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put("/:id", updateCategory);

/**
 * @openapi
 * '/api/categories/{id}':
 *  delete:
 *     tags:
 *     - Categories
 *     summary: Remove a category by their id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the category
 *        required: true
 *     responses:
 *      200:
 *        description: category deleted successfully
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete("/:id", removeCategory);
export default router;