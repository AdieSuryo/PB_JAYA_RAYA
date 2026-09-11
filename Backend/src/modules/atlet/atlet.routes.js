import express from "express";

import atletController from "./atlet.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import uploadMiddleware from "../../middleware/uploadMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";
import authorizePermission from "../../middleware/authorizePermission.js";
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

    authorizePermission("athlete.read"),

    atletController.getAllAtlet

);


// =====================================
// GET BY ID
// =====================================
router.get(

    "/:id",

    authMiddleware,

    authorizePermission("athlete.read"),

    atletController.getAtletById

);


// =====================================
// CREATE
// =====================================
router.post(

    "/",

    authMiddleware,

    authorizePermission("athlete.create"),

    uploadMiddleware.single("foto_atlet"),

    validate(createAtletSchema),

    atletController.createAtlet

);


// =====================================
// UPDATE
// =====================================
router.put(

    "/:id",

    authMiddleware,

    authorizePermission("athlete.update"),

    uploadMiddleware.single("foto_atlet"),

    validate(updateAtletSchema),

    atletController.updateAtlet

);


// =====================================
// DELETE
// =====================================
router.delete(

    "/:id",

    authMiddleware,

    authorizePermission("athlete.delete"),

    atletController.deleteAtlet

);

export default router;