import express from "express";

import atletController from "./atlet.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";

import validate from "../../middleware/validationMiddleware.js";

import {
    createAtletSchema,
    updateAtletSchema
} from "./atlet.validation.js";

const router = express.Router();


// =====================================
// GET ALL
// =====================================
router.get(

    "/",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    atletController.getAllAtlet

);


// =====================================
// GET BY ID
// =====================================
router.get(

    "/:id",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen",
        "pelatih_teknik",
        "pelatih_fisik",
        "Atlet"
    ),

    atletController.getAtletById

);


// =====================================
// CREATE
// =====================================
router.post(

    "/",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    validate(createAtletSchema),

    atletController.createAtlet

);


// =====================================
// UPDATE
// =====================================
router.put(

    "/:id",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    validate(updateAtletSchema),

    atletController.updateAtlet

);


// =====================================
// DELETE
// =====================================
router.delete(

    "/:id",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    atletController.deleteAtlet

);

export default router;