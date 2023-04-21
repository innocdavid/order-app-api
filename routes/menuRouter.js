// import modules
import { 
  getAllItems,
  getSingleItem,

} from "../controllers/menuController.js";
import express from "express";

// instance
const router = express.Router()

/**
 * @openapi
 * '/api/items':
 *  get:
 *     tags:
 *     - Items  
 *     summary: Get the list of items
 *     description: Returns the list of available items with their names, prices, images, ratings, and reviews.
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                    description: The id of the item
 *                  itemName:
 *                    type: string
 *                    description: The name of the item
 *                  price:
 *                    type: number
 *                    description: The price of the item 
 *                  itemUrl:
 *                    type: string
 *                    description: The image url of the item 
 *                  rating:
 *                    type: number
 *                    description: The rating of the item from 1 to 5
 *                  reviews:
 *                    type: Array<string>
 *                    description: An array of reviews
 *          400:
 *            description: 'Item not found'
 *            schema: 
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *            example:
 *              application/json: 
 *                error: 'item not found'
 */
router.get("/", getAllItems);

/**
 * @openapi
 * '/api/items/{id}':
 *  get:
 *     tags:
 *      - Items 
 *     summary: Get a single item
 *     description: Get an item by its id
 *     parameters:
 *      - name: "id"
 *        in: "path"
 *        description: item id
 *        required: true
 *        type: integer  
 *     responses:
 *       200:
 *        description: item returned
 *        content:
 *          application/json:  
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                    description: The id of the item
 *                  itemName:
 *                    type: string
 *                    description: The name of the item
 *                  price:
 *                    type: number
 *                    description: The price of the item 
 *                  itemUrl:
 *                    type: string
 *                    description: The image url of the item 
 *                  rating:
 *                    type: number
 *                    description: The rating of the item from 1 to 5
 *                  reviews:
 *                    type: Array<string>
 *                    description: An array of reviews
 *        400:
 *          description: 'Item not found'
 *          schema: 
 *            type: object
 *            properties:
 *              error:
 *                type: string
 *              example:
 *                application/json: 
 *                  error: 'Bad request'
 *          404:
 *            description: 'Item not found'
 *            schema: 
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example:
 *                    application/json: 
 *                      error: 'Item not found'
 */
router.get("/:id", getSingleItem)

export default router;