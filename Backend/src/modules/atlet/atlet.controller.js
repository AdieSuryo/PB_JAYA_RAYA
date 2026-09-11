import atletService from "./atlet.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";
import HTTP_STATUS from "../../constants/httpStatus.js";
import asyncHandler from "../../middleware/asyncHandler.js";

const atletController = {

    // ======================================
    // GET ALL ATLET
    // ======================================
    getAllAtlet: asyncHandler(

        async (req, res) => {

            const atlet = await atletService.getAllAtlet();

            return successResponse(
                res,
                atlet,
                HTTP_STATUS.OK
            );

        }
    ),

    // ======================================
    // GET BY ID
    // ======================================
    getAtletById: asyncHandler(
    async (req, res) => {

            const atlet = await atletService.getAtletById(
                req.params.id,
                req.user
            );

            return successResponse(
                res,
                atlet,
                HTTP_STATUS.OK
            );

        },
    ),

    // ======================================
    // CREATE
    // ======================================
    createAtlet: asyncHandler(

        async (req, res) => {

            const atlet = await atletService.createAtlet(
                req.body,
                req.file,
                req.user
            );

            return successResponse(
                res,
                atlet,
                "Biodata atlet behasil dibuat",
                HTTP_STATUS.CREATED
            );
        }
    ),
    

    // ======================================
    // UPDATE
    // ======================================
    updateAtlet: asyncHandler(

        async (req, res) => {

            const atlet = await atletService.updateAtlet(
                req.params.id,
                req.body
            );

            return successResponse(
                res,
                atlet,
                "Atlet berhasil diperbarui",
                HTTP_STATUS.OK
            );
        }
    ),


    // ======================================
    // DELETE
    // ======================================
    deleteAtlet: asyncHandler(

        async (req, res) => {

            await atletService.deleteAtlet(
                req.params.id,
                req.user
            );

            return successResponse(
                res,
                null,
                "Atlet berhasil dinonaktifkan",
                HTTP_STATUS.OK
            );
        }
    )
}

export default atletController;