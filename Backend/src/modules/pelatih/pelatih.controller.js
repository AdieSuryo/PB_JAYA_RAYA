import { successResponse, errorResponse } from "../../utils/response.js";
import pelatihService from "./pelatih.service.js";
import HTTP_STATUS from "../../constants/httpStatus.js";
import asyncHandler from "../../middleware/asyncHandler.js";

const pelatihController = {

    getAllPelatih: asyncHandler(
        async (req, res) => {

            const data =
                await pelatihService.getAllPelatih();

            return successResponse(
                res,
                data,
                null,
                HTTP_STATUS.OK
            );
        }
    ),
    

    getPelatihById: asyncHandler(
        async (req, res) => {

            const data =
                await pelatihService.getPelatihById(
                    req.params.id,
                    req.user
                );

            return successResponse(
                res,
                data,
                HTTP_STATUS.OK
            );
        }
    ),


    createPelatih: asyncHandler(
         async (req, res) => {

            const data =
                await pelatihService.createPelatih(
                    req.body,
                    req.file,
                    req.user
                );

            return successResponse(
                res,
                data,
                "Biodata pelatih berhasil ditambahkan",
                HTTP_STATUS.CREATED
            );
         }

    ), 

    updatePelatih: asyncHandler(
        async (req, res) => {

            const data =
                await pelatihService.updatePelatih(
                    req.params.id,
                    req.body
                );

            return successResponse(
                res,
                data,
                "Biodata pelatih berhasil diperbarui",
                HTTP_STATUS.OK
            );
        }
    ),

    deletePelatih: asyncHandler(
        async (req, res) => {

            await pelatihService.deletePelatih(
                req.params.id,
                req.user
            );

            return successResponse(
                res,
                null,
                "Data pelatih berhasil di hapus",
                HTTP_STATUS.OK
            );
        }
    )

};

export default pelatihController;