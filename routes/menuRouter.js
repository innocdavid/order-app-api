// import modules
import getMenu from "../controllers/menuController.js";
import express from "express";

// instance
const router = express.Router()


router.get("/", getMenu);

export default router;