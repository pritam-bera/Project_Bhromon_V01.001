import express from "express";
import { createTour, views } from "../controllers/tour.controller.js";

const router = express.Router();

// create new tour
router.post("/", createTour);

router.get("/view", views) 
export default router;

