import express from "express";

import atletPelatihController from "./atletPelatih.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";
import validate from "../../middleware/validationMiddleware.js";

import {
    assignPelatihSchema
} from "./atletPelatih.validation.js";

const router = express.Router();

// ======================================
// GET ALL ASSIGNMENT
// ======================================
router.get(

    "/",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    atletPelatihController.getAllAssignment

);

// ======================================
// GET MY ATHLETES
// ======================================
router.get(

    "/me",

    authMiddleware,

    authorize(
        "pelatih_teknik",
        "pelatih_fisik"
    ),

    atletPelatihController.getMyAthletes

);

// ======================================
// GET ASSIGNMENT BY PELATIH
// ======================================
router.get(

    "/pelatih/:uid_pelatih",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen",
        "pelatih_teknik",
        "pelatih_fisik"
    ),

    atletPelatihController.getAssignmentByPelatih

);

// ======================================
// ASSIGN PELATIH KE ATLET
// ======================================
router.post(

    "/",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    validate(assignPelatihSchema),

    atletPelatihController.assignPelatih

);

// ======================================
// REMOVE ASSIGNMENT
// ======================================
router.delete(

    "/:uid_atlet_pelatih",

    authMiddleware,

    authorize(
        "Admin",
        "Manajemen"
    ),

    atletPelatihController.removeAssignment

);

export default router;