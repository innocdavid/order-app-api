// import modules
import getMenu from "../controllers/menuController.js";
import express from "express";

// instance
const router = express.Router()

/**
 * @openapi
 * '/api/menu':
 *  get:
 *     tags:
 *     - Items  
 *     summary: Get the list of menu items
 *     description: Returns the list of available menu items with their names, prices, images, ratings, and reviews.
 *     responses:
 *       200:
 *         description: A list of menu items
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                    description: The id of the menu item
 *                  itemName:
 *                    type: string
 *                    description: The name of the menu item
 *                  price:
 *                    type: number
 *                    description: The price of the menu item 
 *                  itemUrl:
 *                    type: string
 *                    description: The image url of the menu item 
 *                  rating:
 *                    type: number
 *                    description: The rating of the menu item from 1 to 5
 *                  reviews:
 *                    type: Array<string>
 *                    description: An array of reviews
 *       400:
 *         description: Bad request
 */
router.get("/", getMenu);

export default router;