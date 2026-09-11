import accessService from "./access.service.js";
import asyncHandler from "../../middleware/asyncHandler.js";
import { successResponse } from "../../utils/response.js";
import HTTP_STATUS from "../../constants/httpStatus.js";

const accessController = {
    
    // Get My Access
    getMyAccess: asyncHandler(async (req, res) => {

        // Ambil UID User Dari JWT
        const uidUser = 
            req.user.uid_user;

        // Mengambil Access
        const result =
            await accessService.getMyAccess(uidUser);

        // Response
        return successResponse(
            res,
            result,
            "Akses user berhasil diambil",
            HTTP_STATUS.OK
        );
    })
};

export default accessController;