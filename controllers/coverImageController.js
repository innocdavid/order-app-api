import asyncHandler from 'express-async-handler';
import CoverImage from "../models/coverImages.js";
import mongoose from 'mongoose';

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

const fetchSingleCoverImage = asyncHandler(async (req, res) => {
  // const id = ;
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

export { fetchAllCoverImages, fetchSingleCoverImage, };