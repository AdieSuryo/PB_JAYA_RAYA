import express from "express";

import userController from "./user.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";
import validate from "../../middleware/validationMiddleware.js";
import authorizePermission from "../../middleware/authorizePermission.js";

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
    authorizePermission("user.read"),
    userController.getAllUsers
);

// Get Management User
router.get(
    "/management",
    authMiddleware,
    authorizePermission("user.read"),
    userController.getManagementData
);

router.patch(
    "/:id/activate",
    authMiddleware,
    authorizePermission("user.update"),
    userController.reactiveUser
);

// ===========================
// GET USER BY ID
// ===========================
router.get(
    "/:id",
    authMiddleware,
    authorizePermission("user.read"),
    userController.getUserById
);

// ===========================
// CREATE USER
// ===========================
router.post(
    "/",
    authMiddleware,
    authorizePermission("user.create"),
    validate(createUserSchema),
    userController.createUserByManager
);

// ===========================
// UPDATE USER
// ===========================
router.put(
    "/:id",
    authMiddleware,
    authorizePermission("user.update"),
    validate(updateUserSchema),
    userController.updateUser
);

// ===========================
// SOFT DELETE USER
// ===========================
router.delete(
    "/:id",
    authMiddleware,
    authorizePermission("user.delete"),
    userController.deleteUser
);

// HARD DELETE
router.delete(
    "/:id/permanent",
    authMiddleware,
    authorizePermission("user.delete_permanent"),
    userController.deleteUserPermanent
);

export default router;