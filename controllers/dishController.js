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

// const fetchSingleItem = asyncHandler(async (req, res) => {
//   const id = Number(req.params.id);
//   const menuItem = menuItems.find(item => item.id === id);
//   if (!menuItem) { return res.status(404).json({ error: "Item not found" }) } 
//   res.status(200).json({ menuItem, message: `${id} returned successfully` });
// });

// const createAnItem = asyncHandler(async (req, res) => {
//   try {
//     const menuItemData = req.body;
//     // TODO: asign id to menuItem
//     menuItemData.id = uuidv4();
//     const newMenuItem = await menuItems.create(menuItemData);
//     res.status(200).json({
//       menuItem: newMenuItem,
//       message: "Item created successfully"
//     })
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
export { fetchAllDishes, fetchSingleDish } ;