import express from "express";

import pelatihController from "./pelatih.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import uploadMiddleware from "../../middleware/uploadMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";
import authorizePermission from "../../middleware/authorizePermission.js";

import validate from "../../middleware/validationMiddleware.js";

import {
    createPelatihSchema,
    updatePelatihSchema
} from "./pelatih.validation.js";

const router = express.Router();


// ===========================
// GET ALL
// ===========================
router.get(
    "/",
    authMiddleware,
    authorizePermission("coach.read"),
    pelatihController.getAllPelatih
);


// ===========================
// GET BY ID
// ===========================
router.get(
    "/:id",
    authMiddleware,
    authorizePermission("coach.read"),
    pelatihController.getPelatihById
);


// ===========================
// CREATE
// ===========================
router.post(
    "/",
    authMiddleware,
    authorizePermission("coach.create"),
    uploadMiddleware.single("foto_pelatih"),
    validate(createPelatihSchema),
    pelatihController.createPelatih
);


// ===========================
// UPDATE
// ===========================
router.put(
    "/:id",
    authMiddleware,
    authorizePermission("coach.update"),
    uploadMiddleware.single("foto_pelatih"),
    validate(updatePelatihSchema),
    pelatihController.updatePelatih
);


// ===========================
// DELETE
// ===========================
router.delete(
    "/:id",
    authMiddleware,
    authorizePermission("coach.delete"),
    pelatihController.deletePelatih
);

export default router;