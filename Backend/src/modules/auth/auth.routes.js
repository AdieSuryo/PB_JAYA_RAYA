import express from "express";

import authController from "./auth.controller.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import authorize from "../../middleware/roleMiddleware.js";
import validate from "../../middleware/validationMiddleware.js";

import {
    registerAdminSchema,
    loginSchema
} from "./auth.validation.js";

const router = express.Router();


// =====================================
// REGISTER ADMIN
// =====================================
router.post(

    "/register-admin",

    authMiddleware,

    authorize("SUPERADMIN"),

    validate(registerAdminSchema),

    authController.registerAdmin

);


// =====================================
// LOGIN
// =====================================
router.post(

    "/login",

    validate(loginSchema),

    authController.login

);

export default router;