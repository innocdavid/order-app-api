import asyncHandler from 'express-async-handler';
import CoverImage from "../models/coverImages.js";

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
  const id = req.params.id;
  const coverImage = await CoverImage.findById(id);
  if (!coverImage) return res.status(404).json({ message: `Cover image with ${id} not found` });
  res.status(200).json({ coverImage, message: `Cover image with ${id} returned successfully` });
});

export { fetchAllCoverImages, fetchSingleCoverImage, };