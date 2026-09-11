import userService from "./user.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";
import HTTP_STATUS from "../../constants/httpStatus.js";
import asyncHandler from "../../middleware/asyncHandler.js";

const userController = {

    // ===========================
    // GET ALL USER
    // ===========================
    getAllUsers: asyncHandler(
         async (req, res) => {

            const users = await userService.getAllUsers();

            return successResponse(
                res,
                users,
                HTTP_STATUS.OK
            );
         }
    ),
   

    // ===========================
    // GET USER BY ID
    // ===========================
    getUserById: asyncHandler(
        async (req, res) => {

            const user = await userService.getUserById(
                req.params.id
            );

            return successResponse(
                res,
                user,
                HTTP_STATUS.OK
            );
        }
    ),

    // Get User Management
    getManagementData: asyncHandler(
        async (req, res, next) => {
            const data = await userService.getManagementData();

            return successResponse(
                res,
                data,
                "Data manajemen berhasil diambil",
                HTTP_STATUS.OK
            )
        }
    ),
    

    // ===========================
    // CREATE USER
    // ===========================
    createUserByManager: asyncHandler(
        async (req, res) => {

            const user = await userService.createUser(
                req.body,
                req.user
            );

            return successResponse(
                res,
                user,
                "User berhasil ditambahkan",
                HTTP_STATUS.CREATED
            );
        }
    ),
    

    // ===========================
    // UPDATE USER
    // ===========================
    updateUser: asyncHandler(
        async (req, res) => {

            await userService.updateUser(
                req.params.id,
                req.body,
                req.user
            );

            return successResponse(
                res,
                null,
                "User berhasil diperbarui",
                HTTP_STATUS.OK
            );
        }
    ),
    

    // ===========================
    // SOFT DELETE USER
    // ===========================
    deleteUser: asyncHandler(
        async (req, res) => {

            await userService.deleteUser(
                req.params.id,
                req.user
            );

            return successResponse(
                res,
                null,
                "User berhasil di nonaktifkan",
                HTTP_STATUS.OK
            );
        }
    ),

    // Reactive User
    reactiveUser: asyncHandler(
        async (req, res) => {

            const user =
                await userService.reactiveUser(
                    req.params.id,
                    req.user
                );

            return successResponse(
                res,
                user,
                "User berhasil diaktifkan kemabali",
                HTTP_STATUS.OK
            );
        }
    ),

    // HARD DELETE
    deleteUserPermanent: asyncHandler(async (req, res) => {

        const uid_user = req.params.id;

        const result = 
            await userService.deleteUserPermanent(
                uid_user,
                req.user
            );

        return successResponse(
            res,
            result,
            "User berhasil dihapus permanen",
            HTTP_STATUS.OK
        );
    })

};

export default userController;