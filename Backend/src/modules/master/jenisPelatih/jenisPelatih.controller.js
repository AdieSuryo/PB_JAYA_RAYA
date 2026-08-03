import jenisPelatihService from './jenisPelatih.service.js';
import { successResponse, errorResponse } from '../../utils/response.js';
import HTTP_STATUS from '../../constants/httpStatus.js';
import asyncHandler from '../../middleware/asyncHandler.js';

const jenisPelatihController = {
    
    // Get All
    getAllJenisPelatih: asyncHandler(
        async (req, res) => {

            const jenisPelatih = 
                await jenisPelatihService.getAllJenisPelatih();
            
                return successResponse(
                    res,
                    jenisPelatih,
                    "Data jenis pelatih berhasil diambil.",
                    HTTP_STATUS.OK
                );
                
        }
    ),

    // Get By ID
    getJenisPelatihById: asyncHandler(
        async (req, res) => {

            const jenisPelatih = 
                await jenisPelatihService.getJenisPelatihById(
                    req.params.id
                );

            return successResponse(
                res,
                jenisPelatih,
                "Data jenis pelatih berhasil diambil.",
            )
        }
    ),

    // Create
    createJenisPelatih: asyncHandler(async (req, res) => {

            const jensPelatih = 
                await jenisPelatihService.createJenisPelatih(

                    req.body,
                    req.user
                );
            
            return successResponse(
                res,
                jenisPelatih,
                "Jenis pelatih berhasil dibuat",
                HTTP_STATUS.CREATED

            );
    }),

    // Update
    updatrJenisPelatih: asyncHandler(async (req, res) => {

        const jenisPelatih =
            await jenisPelatihService.updateJenisPelatih(

                req.params.id,
                req.body,
                req.user
            );

            return successResponse(

                res,
                jenisPelatih,
                "Jenis pelatih berhasil diperbarui",
                HTTP_STATUS.OK
            );
    }),

    // Delete
    deleteJenisPelatih: asyncHandler(async (req, res) => {

        await jenisPelatihService.deleteJenisPelatih(

            req.params.id,
            req.user
        );

        return successResponse(

            res,
            null,
            "Jenis pelatih berhasil dihapus",
            HTTP_STATUS.OK  
        );
    })
};

export default jenisPelatihController;