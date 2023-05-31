import asyncHandler from 'express-async-handler';
import CoverImage from "../models/coverImages.js";
import mongoose from 'mongoose';
import User from '../models/users.js';

// fetch list all of cover images
const fetchAllCoverImages = asyncHandler(async (req, res) => {
  try {
    const coverImages = await CoverImage.find({});
    res.status(200)
      .json({
        coverImages,
        message: "cover images fetched successfully"
      });
  } catch (err) {
    console.error(`error: ${err.message}`);
  }
});

// fetch a single cover image
const fetchSingleCoverImage = asyncHandler(async (req, res) => {
  try {

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid cover image ID' });
    }

    const coverImage = await CoverImage.findById(id);
    if (!coverImage) {
      return res.status(404).json({ message: `Cover image with ID ${id} not found` });
    }
    res.status(200).json({ coverImage, message: `Cover image with ID ${id} returned successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// post a cover image
const postCoverImage = asyncHandler(async (req, res) => {
  try {
    const { user, name, url } = req.body;
    const newCoverImage = new CoverImage({
      user,
      name,
      url,
    });
    const savedCoverImage = await newCoverImage.save();
    res.status(201).json({savedCoverImage, message: "Cover image saved successfully"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { fetchAllCoverImages, fetchSingleCoverImage, postCoverImage };