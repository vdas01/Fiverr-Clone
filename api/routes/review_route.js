import express from "express"
import { verifyToken } from "../middlewares/jwt.js";
import { createReview, deleteReview, getReviews } from "../controllers/review_controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview )
router.get("/:gigId", getReviews )
router.delete("/:id", deleteReview)


export default router