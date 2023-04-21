// import modules
import asyncHandler from "express-async-handler";
import menuItems from "../orders.js";

const getAllItems = asyncHandler(async (req, res) => {
  res.status(200)
    .json({
      menuItems,
      message: "Items returned successfully"
    });
});

const getSingleItem = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const menuItem = menuItems.find(item => item.id === id);
  if (!menuItem) { return res.status(404).json({ error: "Item not found" }) } 
  res.status(200).json({ menuItem, message: `${id} returned successfully` });
});

export { getAllItems, getSingleItem } ;