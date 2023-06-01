// import modules
import { 
  fetchAllDishes,
  fetchSingleDish,
  createDish,
  updateDish,
  removeDish,
} from "../controllers/dishController.js";
import express from "express";

// instance
const router = express.Router()

/**
 * @openapi
 * '/api/dishes':
 *  get:
 *     tags:
 *     - Dishes  
 *     summary: Fetch list of available dishes
 *     description: Returns the list of available images with their name, price, category, cookingDuration, size, imageUrl, ingredients, nuitrients, rating and reviews.
 *     responses:
 *       200:
 *         description: Sucessfully fetched list of available dishes
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              dishes:
 *                type: object
 *                properties:
 *                  user:
 *                    type: number
 *                    description: The id of a user
 *                  name:
 *                    type: string
 *                    description: The name of a dish
 *                  price:
 *                    type: number
 *                    description: The price of a dish 
 *                  category:
 *                    type: String
 *                    description: The category a the dish  
 *                  cookingDuration:
 *                    type: string
 *                    description: The duration a the dish
 *                  sizes:
 *                    type: Array
 *                    description: The sizes of a dish
 *                  imageUrl:
 *                    type: String
 *                    description: The image-url of a dish
 *                  ingredients:
 *                    type: Array
 *                    description: The ingredients a the dish
 *                  nuitrients:
 *                    type: Array
 *                    description: The nuitrients a the dish
 *                  rating:
 *                    type: number
 *                    description: The rating of a dish
 *                  reviews: 
 *                    type: Array
 *                    description: the reviews of a dish
 *          400:
 *            description: 'Image not found'
 *            schema: 
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *            example:
 *              application/json: 
 *                error: 'dish not found'
 */
router.get("/", fetchAllDishes);

/**
 * @openapi
 * '/api/dishes/{id}':
 *  get:
 *     tags:
 *      - Dishes 
 *     summary: Fetch dish by their id
 *     description: Fetch dish by their id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: dish id
 *        required: true
 *        type: integer  
 *     responses:
 *       200:
 *        description: dish returned
 *        content:
 *          application/json:  
 *            schema:
 *              type: array
 *              dishe:
 *                type: object
 *                properties:
 *                  user:
 *                    type: number
 *                    description: The id of a user
 *                  name:
 *                    type: string
 *                    description: The name of a dish
 *                  price:
 *                    type: number
 *                    description: The price of a dish 
 *                  description:
 *                    type: string
 *                    description: the description of a dish
 *                  category:
 *                    type: String
 *                    description: The category a the dish  
 *                  cookingDuration:
 *                    type: string
 *                    description: The duration a the dish
 *                  sizes:
 *                    type: Array
 *                    description: The sizes of a dish
 *                  imageUrl:
 *                    type: String
 *                    description: The image-url of a dish
 *                  ingredients:
 *                    type: Array
 *                    description: The ingredients a the dish
 *                  nuitrients:
 *                    type: Array
 *                    description: The nuitrients a the dish
 *                  rating:
 *                    type: number
 *                    description: The rating of a dish
 *                  reviews: 
 *                    type: Array
 *                    description: the reviews of a dish
 *        400:
 *          description: 'Dish not found not found'
 *          schema: 
 *            type: object
 *            properties:
 *              error:
 *                type: string
 *              example:
 *                application/json: 
 *                  error: 'Bad request'
 *          404:
 *            description: 'Dish not found'
 *            schema: 
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example:
 *                    application/json: 
 *                      error: 'Item not found'
 */
router.get("/:id", fetchSingleDish);

/**
 * @openapi
 * '/api/dishes':
 *  post:
 *     tags:
 *     - Dishes
 *     summary: Create a dish
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - user
 *              - name
 *              - price
 *              - description
 *              - category
 *              - cookingDuration
 *              - imageUrl
 *            properties:
 *              user:
 *                type: string
 *                default: "64706a47bc9ba5be71c18063"
 *              name:
 *                type: string
 *                default: "Grilled Meat"
 *              price:
 *                type: Number
 *                default: 20.40
 *              description:
 *                type: string
 *                default: "lorem Ipsum"
 *              category:
 *                type: string
 *                default: "Drinks"
 *              cookingDuration:
 *                type: string,
 *                default: "40 minutes"
 *              sizes: 
 *                type: Array
 *                default: ["Large", "Small", "Medium"]
 *              imageUrl:
 *                type: string
 *                default: "http://localhost.com/images"
 *              Ingredients:
 *                type: Array
 *                default: ["Tomatoes", "Mushrooms", "Cooking oil", ]
 *              nuitrients: 
 *                type: Array
 *                default: ["Vitamin C", "Vitamin D"]
 *              rating: 
 *                type: Number
 *                default: 3.5
 *              review:
 *                type: Array
 *                default: [{"name": "Banja", "comment": "Fantastic", "rating": 4.3}]
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
router.post("/", createDish);

/**
 * @openapi
 * '/api/dishes/{id}':
 *  put:
 *     tags:
 *     - Dishes
 *     summary: Update a dish by their id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the dish
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
 *                default: "Grilled Meat"
 *              price:
 *                type: Number
 *                default: 20.40
 *              description:
 *                type: string
 *                default: "lorem Ipsum"
 *              category:
 *                type: string
 *                default: "Drinks"
 *              cookingDuration:
 *                type: string,
 *                default: "40 minutes"
 *              sizes: 
 *                type: Array
 *                default: ["Large", "Small", "Medium"]
 *              imageUrl:
 *                type: string
 *                default: "http://localhost.com/images"
 *              Ingredients:
 *                type: Array
 *                default: ["Tomatoes", "Mushrooms", "Cooking oil", ]
 *              nuitrients: 
 *                type: Array
 *                default: ["Vitamin C", "Vitamin D"]
 *              rating: 
 *                type: Number
 *                default: 3.5
 *              review:
 *                type: Array
 *                default: [{"name": "Banja", "rating": 4.3, "comment": "Fantastic"}]
 *     responses:
 *      200:
 *        description: Cover image updated successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.put("/:id", updateDish);

/**
 * @openapi
 * '/api/dishes/{id}':
 *  delete:
 *     tags:
 *     - Dishes
 *     summary: Remove a dish by their id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the dish
 *        required: true
 *     responses:
 *      200:
 *        description: Dish deleted successfully
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
router.delete("/:id", removeDish);

export default router;