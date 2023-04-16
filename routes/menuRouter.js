// import modules
import express from 'express';
import orders from "../orders.js"

// instance
const router = express.Router()

router.get("/", (req, res) => {
  res.json(orders)
});

export default router;