// import modules
import asyncHandler from "express-async-handler";
import items from "../orders.js";

const getMenu = asyncHandler(async (req, res) => {
  res.status(200)
    .json({
      items,
      message: "orders returned successfully"
    });
});

export default getMenu;