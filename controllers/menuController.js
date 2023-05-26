// import modules
import { v4 as uuidv4 } from 'uuid';
import asyncHandler from "express-async-handler";
import menuItems from "../data/orders.js";

const fetchAllItems = asyncHandler(async (req, res) => {
  res.status(200)
    .json({
      menuItems,
      message: "Items returned successfully"
    });
});

const fetchSingleItem = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const menuItem = menuItems.find(item => item.id === id);
  if (!menuItem) { return res.status(404).json({ error: "Item not found" }) } 
  res.status(200).json({ menuItem, message: `${id} returned successfully` });
});

const createAnItem = asyncHandler(async (req, res) => {
  try {
    const menuItemData = req.body;
    // TODO: asign id to menuItem
    menuItemData.id = uuidv4();
    const newMenuItem = await menuItems.create(menuItemData);
    res.status(200).json({
      menuItem: newMenuItem,
      message: "Item created successfully"
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});
export { fetchAllItems, fetchSingleItem, createAnItem } ;