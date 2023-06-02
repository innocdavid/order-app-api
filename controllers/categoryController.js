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

const createCategory = asyncHandler(async (req, res) => {
  const { user, name, imageUrl } = req.body;
  const newCategory = new Category({
    user,
    name,
    imageUrl
  });
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json({ savedCategory, message: "Category saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid category ID' });
  }

  try {
    const category = await Category.findById(id);
    if (!category) return res.status(404).json({ message: `Category with id ${id} not found` });
    category.name = req.body.name || category.name;
    category.imageUrl = req.body.imageUrl || category.imageUrl;
    const updatedCategory = await category.save();
    res.status(200).json({ updatedCategory, message: "Category updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

const removeCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid category ID' });
  }

  const removedCategory = await Category.findByIdAndRemove(id);
  if (!removedCategory) res.status(404).json({ message: `Category of id ${id} does not exist` });
  res.status(200).json({ message: "Category deleted successfully" });
});

export { fetchAllCategories, fetchSingleCategory, createCategory, updateCategory, removeCategory };