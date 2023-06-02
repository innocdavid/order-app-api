import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Category from "../models/categoryModel.js";

const fetchAllCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find({}); 
    res.status(200)
      .json({ 
        categories, 
        message: "Categories fetched successfully" 
      });
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

const fetchSingleCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid cover image ID' });
  }

  try {
    const category = await Category.findById(id);
    if (!category) return res.status(404).json({ message: `Category with id ${id} not found` });
    res.status(200).json({ category, message: `Category with id ${id} returned successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export { fetchAllCategories, fetchSingleCategory };