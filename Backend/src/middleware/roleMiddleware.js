import AppError from "../errors/AppError.js";
import HTTP_STATUS from "../constants/httpStatus.js";

export const authorize = (...allowedRoles)=>{

    return(req, res, next)=>{

        console.log("REQ USER =", req.user);
        console.log("ROLE =", req.user?.roles);

        if (!req.user) {
            throw new AppError(
                "Anda belum terautentiksi.",
                HTTP_STATUS.UNAUTHORIZED
            );
        }

        const userRoles = req.user.roles || [];

        const hasAccess = userRoles.some((role) =>
            allowedRoles.includes(role)
        );

        
        if (!hasAccess) {
            throw new AppError(
                "Anda tidak memiliki izin untuk mengakses resource ini.",
                HTTP_STATUS.FORBIDDEN
            )
        }

        next();
    };
};

export default authorize;