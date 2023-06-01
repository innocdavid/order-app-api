// import modules
import { 
  fetchAllDishes,
  fetchSingleDish
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

export default router;