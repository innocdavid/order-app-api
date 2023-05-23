// import modules
import { 
  fetchAllItems,
  fetchSingleItem,
  createAnItem,
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
router.get("/", fetchAllItems);

/**
 * @openapi
 * '/api/items/{id}':
 *  get:
 *     tags:
 *      - Items 
 *     summary: Get a single item
 *     description: Get an item by its id
 *     parameters:
 *      - name: id
 *        in: path
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
router.get("/:id", fetchSingleItem);

/**
 * @openapi
 * '/api/items':
 *  post:
 *     tags:
 *      - Items  
 *     summary: Create a new item
 *     consumes:
 *      - application/json 
 *     parameters: 
 *      - in: body 
 *        name: menuItem
 *        description: The menu item to create
 *        required: true
 *        schema:       
 *          type: Object
 *          properties:
 *            id:
 *              type: string
 *              format: uuid
 *              example: "e175ce37-120d-47d9-a1c1-7e05b2edf1d8"
 *            manager:
 *              type: Object
 *              properties:
 *                id:
 *                  type: string
 *                  format: uuid
 *                  example: "e175ce37-120d"
 *                firstName:
 *                  type: string
 *                  example: "John"
 *                lastName: 
 *                  type: string
 *                  example: "Doe"
 *                email: "john.doe@example.com"
 *              example: 
 *                id: null
 *                firstName: ""
 *                lastName: ""
 *                email: ""
 *            chef:
 *              type: Object
 *              properties:
 *                id:
 *                  type: string
 *                  format: uuid
 *                  example: "e175ce37-120d"
 *                firstName:
 *                  type: string
 *                  example: "Jane"
 *                lastName: 
 *                  type: string
 *                  example: "Doe"
 *                email: "jane.doe@example.com"
 *              example:
 *                id: null
 *                firstName: ""
 *                lastName: ""
 *                email: ""
 *            itemName:
 *              type: string
 *              example: "Grilled Meat"
 *            price: 
 *              type: number
 *              format: float
 *              example: 20.3
 *            description: 
 *              type: string
 *              example: "Juicy and tender grilled meat with spices"
 *            itemSize: 
 *              type: string
 *              example: "Medium"
 *            category:
 *              type: string
 *              example: "Main Dish"
 *            cookingDuration:
 *              type: string
 *              example: "30 minutes"
 *            itemUrl:
 *              type: string
 *              example: ""
 *            rating: 
 *              type: number
 *              format: float
 *              example: 4.5
 *            reviews:
 *              type: array
 *              items:
 *                type: string
 *              example: 
 *                - "Great taste"
 *                - "Enjoyed the dish"
 * 
 *     responses:
 *      description:
 *        200:
 *         description: The created menu item
 *         schema:
 *          type: Object
 *          properties:
 *            id:
 *              type: string
 *              format: uuid
 *              example: "e175ce37-120d-47d9-a1c1-7e05b2edf1d8"
 *            manager:
 *              type: Object
 *              properties:
 *                id:
 *                  type: string
 *                  format: uuid
 *                  example: "e175ce37-120d"
 *                firstName:
 *                  type: string
 *                  example: "John"
 *                lastName: 
 *                  type: string
 *                  example: "Doe"
 *                email: "john.doe@example.com"
 *              example: 
 *                id: null
 *                firstName: ""
 *                lastName: ""
 *                email: ""
 *            chef:
 *              type: Object
 *              properties:
 *                id:
 *                  type: string
 *                  format: uuid
 *                  example: "e175ce37-120d"
 *                firstName:
 *                  type: string
 *                  example: "Jane"
 *                lastName: 
 *                  type: string
 *                  example: "Doe"
 *                email: "jane.doe@example.com"
 *              example:
 *                id: null
 *                firstName: ""
 *                lastName: ""
 *                email: ""
 *            itemName:
 *              type: string
 *              example: "Grilled Meat"
 *            price: 
 *              type: number
 *              format: float
 *              example: 20.3
 *            description: 
 *              type: string
 *              example: "Juicy and tender grilled meat with spices"
 *            itemSize: 
 *              type: string
 *              example: "Medium"
 *            category:
 *              type: string
 *              example: "Main Dish"
 *            cookingDuration:
 *              type: string
 *              example: "30 minutes"
 *            itemUrl:
 *              type: string
 *              example: ""
 *            rating: 
 *              type: number
 *              format: float
 *              example: 4.5
 *            reviews:
 *              type: array
 *              items:
 *                type: string
 *              example: 
 *                - "Great taste"
 *                - "Enjoyed the dish"       
 *        400:
 *         description: Invalid request data
 *        500: 
 *         description: Internal server error
 *
 */
router.post("/api/items", createAnItem);

export default router;