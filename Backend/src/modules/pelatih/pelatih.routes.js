import express from "express";

import pelatihController from "./pelatih.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";

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
    authorize("Admin", "Manajemen"),
    pelatihController.getAllPelatih
);


// ===========================
// GET BY ID
// ===========================
router.get(
    "/:id",
    authMiddleware,
    authorize(
        "Admin",
        "Manajemen",
        "pelatih_teknik",
        "pelatih_fisik"
    ),
    pelatihController.getPelatihById
);


// ===========================
// CREATE
// ===========================
router.post(
    "/",
    authMiddleware,
    authorize("Manajemen"),
    validate(createPelatihSchema),
    pelatihController.createPelatih
);


// ===========================
// UPDATE
// ===========================
router.put(
    "/:id",
    authMiddleware,
    authorize("Manajemen"),
    validate(updatePelatihSchema),
    pelatihController.updatePelatih
);


// ===========================
// DELETE
// ===========================
router.delete(
    "/:id",
    authMiddleware,
    authorize("Manajemen"),
    pelatihController.deletePelatih
);

export default router;