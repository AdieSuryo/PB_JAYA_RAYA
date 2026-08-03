import express from "express";

import userController from "./user.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";
import validate from "../../middleware/validationMiddleware.js";

import {
    createUserSchema,
    updateUserSchema
} from "./user.validation.js";

const router = express.Router();

// ===========================
// GET ALL USER
// ===========================
router.get(
    "/",
    authMiddleware,
    authorize("Admin", "Manajemen"),
    userController.getAllUsers
);

// ===========================
// GET USER BY ID
// ===========================
router.get(
    "/:id",
    authMiddleware,
    authorize("Admin", "Manajemen"),
    userController.getUserById
);

// ===========================
// CREATE USER
// ===========================
router.post(
    "/",
    authMiddleware,
    authorize("Admin", "Manajemen"),
    validate(createUserSchema),
    userController.createUserByManager
);

// ===========================
// UPDATE USER
// ===========================
router.put(
    "/:id",
    authMiddleware,
    authorize("Admin", "Manajemen"),
    validate(updateUserSchema),
    userController.updateUser
);

// ===========================
// DELETE USER
// ===========================
router.delete(
    "/:id",
    authMiddleware,
    authorize("Admin"),
    userController.deleteUser
);

export default router;