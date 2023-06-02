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

export { fetchAllCategories };