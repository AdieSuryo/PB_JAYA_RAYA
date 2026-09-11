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
        "SUPERADMIN",
        "ADMIN"
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
        "SUPERADMIN",
        "ADMIN"
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
        "SUPERADMIN"
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
        "SUPERADMIN"
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
        "SUPERADMIN"
    ),

    provinsiController.deleteProvinsi

);

export default router;