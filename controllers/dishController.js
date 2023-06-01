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
export { fetchAllDishes, fetchSingleDish } ;