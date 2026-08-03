import express from "express";

import provinsiController from "./provinsi.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";
import validate from "../../middleware/validationMiddleware.js";

import {
    createProvinsiSchema,
    updateProvinsiSchema
} from "./provinsi.validation.js";

const router = express.Router();


// =================================
// GET ALL
// =================================
router.get(

    "/",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    provinsiController.getAllProvinsi

);


// =================================
// GET BY ID
// =================================
router.get(

    "/:id",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    provinsiController.getProvinsiById

);


// =================================
// CREATE
// =================================
router.post(

    "/",

    authMiddleware,

    authorize(
        "Admin"
    ),

    validate(createProvinsiSchema),

    provinsiController.createProvinsi

);


// =================================
// UPDATE
// =================================
router.put(

    "/:id",

    authMiddleware,

    authorize(
        "Admin"
    ),

    validate(updateProvinsiSchema),

    provinsiController.updateProvinsi

);


// =================================
// DELETE
// =================================
router.delete(

    "/:id",

    authMiddleware,

    authorize(
        "Admin"
    ),

    provinsiController.deleteProvinsi

);

export default router;