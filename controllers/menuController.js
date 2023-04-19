// import modules
import asyncHandler from "express-async-handler";
import orders from "../orders.js";

const getMenu = asyncHandler(async (req, res) => {
  res.status(200)
    .json({
      orders: orders,
      message: "orders returned successfully"
    });
});

export default getMenu;