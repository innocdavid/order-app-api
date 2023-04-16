// import modules
import asyncHandler from "express-async-handler";
import orders from "../orders.js";

const getMenu = asyncHandler(async (req, res) => {
  res.json(orders);
})

export default getMenu;