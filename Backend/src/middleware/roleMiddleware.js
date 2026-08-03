import AppError from "../errors/AppError.js";
import HTTP_STATUS from "../constants/httpStatus.js";

export const authorize = (...roles)=>{

    return(req, res, next)=>{

        console.log("REQ USER =", req.user);
        console.log("ROLE =", req.user?.role);

        if (!req.user) {
            throw new AppError(
                "Anda belum terautentiksi.",
                HTTP_STATUS.UNAUTHORIZED
            );
        }
        
        if (!roles.includes(req.user.role)) {
            throw new AppError(
                "Anda tidak memiliki izin untuk mengakses resource ini.",
                HTTP_STATUS.FORBIDEN
            );
        }

        next();
    };
};

export default authorize;