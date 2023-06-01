// import modules
import asyncHandler from "express-async-handler";
import DishModel from "../models/dishModel.js";
import mongoose from "mongoose";

// fetch all dishes
const fetchAllDishes = asyncHandler(async (req, res) => {
  try {
    const dishModel = await DishModel.find({});
    res.status(200)
      .json({
        dishModel,
        message: "dishes fetched successfully"
      });
  } catch (err) {
    console.error(`error: ${err.message}`);
  }
});

// fetch a single dish
const fetchSingleDish = asyncHandler(async (req, res) => {
  try {

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid dish ID' });
    }

    const dishModel = await DishModel.findById(id);
    if (!dishModel) {
      return res.status(404).json({ message: `Dish with id ${id} not found` });
    }
    res.status(200).json({ dishModel, message: `Dish with id ${id} returned successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const createDish = asyncHandler(async (req, res) => {
  const { user, name, price, description, category, 
          cookingDuration, sizes, imageUrl, ingredients, nuitrients,
            rating, reviews } = req.body;
  const newDish = new DishModel({
    user, name, price, description, category, cookingDuration, 
      sizes, imageUrl, ingredients, nuitrients, rating, reviews
  });
  try {
    const savedDish = await newDish.save();
    res.status(200).json({ savedDish, message: "Dish saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update dish
const updateDish = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid dish ID' });
  }

  try {
    const dish = await DishModel.findById(id);
    if (!dish) return res.status(404).json({ error: `Dish with id ${id} not found`});
    // update cover image properties
    dish.name =  req.body.name || dish.name;
    dish.price = req.body.price || dish.price;
    dish.description = req.body.description || dish.description;
    dish.category = req.body.category || dish.category;
    dish.cookingDuration = req.body.cookingDuration || dish.cookingDuration;
    dish.sizes = req.body.sizes || dish.sizes;
    dish.imageUrl = req.body.imageUrl || dish.imageUrl;
    dish.ingredients = req.body.ingredients || dish.ingredients;
    dish.nuitrients = req.body.nuitrients || dish.nuitrients;
    dish.rating = req.body.rating || dish.rating;
    dish.reviews = req.body.reviews || dish.reviews;
    // Save the updated cover image
    const updatedDish = await dish.save();
    res.status(200).json({ updatedDish, message: "Updated dish successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// delete dish
const removeDish = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid dish ID' });
  }

  try {
    const dish = await DishModel.findByIdAndRemove(id);
    if (!dish) return res.status(400).json({ message: `Dish with ${id} not found` });
    res.status(200).json({ message: `Dish deleted successfully` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
export { fetchAllDishes, fetchSingleDish, createDish, updateDish, removeDish } ;