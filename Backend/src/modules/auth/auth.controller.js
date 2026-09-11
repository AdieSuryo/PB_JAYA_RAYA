import authService from "./auth.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";
import HTTP_STATUS from "../../constants/httpStatus.js";
import asyncHandler from "../../middleware/asyncHandler.js";

const authController = {

    // =====================================
    // REGISTER ADMIN
    // =====================================
    registerAdmin: asyncHandler(
        async (req, res) => {

            const admin = await authService.registerAdmin(
                req.body
            );

            return successResponse (
                res,
                admin,
                "Admin berhasil dibuat",
                HTTP_STATUS.CREATED
            );

        } 
    ),

    // =====================================
    // LOGIN
    // =====================================
    login: asyncHandler(

        async (req, res) => {

            const result = await authService.login(
                req.body
            );

            const roleNames = result.user.roles
                .map((role) => role.nama_role)
                .join(", ");

            return successResponse(
                res,
                {
                    token: result.token,
                    user: result.user
                },
                `Login sukses sebagai ${roleNames}`,
                HTTP_STATUS.OK
            );

        }
    )

};

export default authController;