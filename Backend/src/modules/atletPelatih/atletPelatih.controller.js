import atletPelatihService from "./atletPelatih.service.js";

import asyncHandler from "../../middleware/asyncHandler.js";

import { successResponse } from "../../utils/response.js";

import HTTP_STATUS from "../../constants/httpStatus.js";

const atletPelatihController = {

    // ======================================
    // GET ALL ASSIGNMENT
    // ======================================
    getAllAssignment: asyncHandler(

        async (req, res) => {

            const data =
                await atletPelatihService.getAllAssignment();

            return successResponse(

                res,

                data,

                HTTP_STATUS.OK

            );

        }

    ),

    // ======================================
    // GET ASSIGNMENT BY PELATIH
    // ======================================
    getAssignmentByPelatih: asyncHandler(

        async (req, res) => {

            const data =
                await atletPelatihService.getAssignmentByPelatih(

                    req.params.uid_pelatih

                );

            return successResponse(

                res,

                data,

                HTTP_STATUS.OK

            );

        }

    ),

    // ======================================
    // GET MY ATHLETES
    // ======================================
    getMyAthletes: asyncHandler(

        async (req, res) => {

            const data =
                await atletPelatihService.getMyAthletes(

                    req.user.uid_pelatih

                );

            return successResponse(

                res,

                data,

                HTTP_STATUS.OK

            );

        }

    ),

    // ======================================
    // ASSIGN PELATIH
    // ======================================
    assignPelatih: asyncHandler(

        async (req, res) => {

            const data =
                await atletPelatihService.assignPelatih(

                    req.body,

                    req.user

                );

            return successResponse(

                res,

                data,

                "Pelatih berhasil ditugaskan.",

                HTTP_STATUS.CREATED

            );

        }

    ),

    // ======================================
    // REMOVE ASSIGNMENT
    // ======================================
    removeAssignment: asyncHandler(

        async (req, res) => {

            await atletPelatihService.removeAssignment(

                req.params.uid_atlet_pelatih,

                req.user

            );

            return successResponse(

                res,

                null,

                "Penugasan pelatih berhasil dihapus.",

                HTTP_STATUS.OK

            );

        }

    )

};

export default atletPelatihController;