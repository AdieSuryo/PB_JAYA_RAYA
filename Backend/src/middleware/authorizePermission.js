import { prisma } from "../config/db.js";
import AppError from "../errors/AppError.js";
import HTTP_STATUS from "../constants/httpStatus.js";

const authorizePermission = (permissionCode) => {

    return async (req, res, next) => {

        try {

            // Cek Authentication
            if (!req.user) {

                throw new AppError(
                    "Anda belum terautentikasi",
                    HTTP_STATUS.UNAUTHORIZED
                );
            }

            const uidUser = req.user.uid_user;

            // Cek Permission User
            const hasPermission = 
                await prisma.rUserRole.findFirst({

                    where: {
                        
                        uid_user: uidUser,

                        role: {
                            
                            status_aktif: true,

                            deleted_at: null,

                            role_permissions: {

                                some: {

                                    permission: {

                                        kode_permission: permissionCode,
                                        deleted_at: null
                                    }
                                }
                            }
                        }
                    },

                    select: {

                        uid_user: true
                    }
                });
            
            // Tidak Punya Permission
            if (!hasPermission) {

                throw new AppError(
                    "Anda tidak memiliki izin untuk melakukan aksi ini.",
                    HTTP_STATUS.FORBIDDEN
                );
            }

            next();
        } catch (error) {

            next(error);
        }
    };
};

export default authorizePermission;