import express from "express";

import accessController from "./access.controller.js";
import authMiddleware from "../../middleware/authMiddleware.js";


const router = express.Router();

// Get My Access
router.get(
    "/me",
    authMiddleware,
    accessController.getMyAccess
);

export default router;