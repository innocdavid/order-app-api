import asyncHandler from 'express-async-handler';

const fetchAllCoverImages = asyncHandler( async(req, res) => {
  res.status(200)
    .json({
      coverImages,
      message: "cover images fetched successfully"
    })
})

export { fetchAllCoverImages };