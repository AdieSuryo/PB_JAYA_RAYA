import { Prisma } from "@prisma/client";
import AppError from "../errors/AppError.js";
import HTTP_STATUS from "../constants/httpStatus.js";

const prismaErrorHandler = (err, req, res, next) => {

    // =====================================
    // PRISMA KNOWN REQUEST ERROR
    // =====================================

    if (err instanceof Prisma.PrismaClientKnownRequestError) {

        // =====================================
        // P2002
        // UNIQUE CONSTRAINT
        // =====================================

        if (err.code === "P2002") {

            const field =
                err.meta?.target?.join(", ");

            return next(
                new AppError(
                    `${field || "Data"} sudah digunakan.`,
                    HTTP_STATUS.CONFLICT
                )
            );

        }


        // =====================================
        // P2025
        // RECORD NOT FOUND
        // =====================================

        if (err.code === "P2025") {

            return next(
                new AppError(
                    "Data yang diminta tidak ditemukan.",
                    HTTP_STATUS.NOT_FOUND
                )
            );

        }


        // =====================================
        // P2003
        // FOREIGN KEY CONSTRAINT
        // =====================================

        if (err.code === "P2003") {

            return next(
                new AppError(
                    "Data terkait tidak valid atau masih digunakan.",
                    HTTP_STATUS.BAD_REQUEST
                )
            );

        }


        // =====================================
        // P2014
        // REQUIRED RELATION
        // =====================================

        if (err.code === "P2014") {

            return next(
                new AppError(
                    "Relasi data tidak valid.",
                    HTTP_STATUS.BAD_REQUEST
                )
            );

        }

    }


    // =====================================
    // PRISMA VALIDATION ERROR
    // =====================================

    if (
        err instanceof Prisma.PrismaClientValidationError
    ) {

        return next(
            new AppError(
                "Data yang dikirim tidak sesuai dengan struktur database.",
                HTTP_STATUS.BAD_REQUEST
            )
        );

    }


    // =====================================
    // PRISMA INITIALIZATION ERROR
    // DATABASE CONNECTION
    // =====================================

    if (
        err instanceof Prisma.PrismaClientInitializationError
    ) {

        return next(
            new AppError(
                "Database sedang tidak tersedia.",
                HTTP_STATUS.SERVICE_UNAVAILABLE
            )
        );

    }


    // =====================================
    // PRISMA REQUEST ERROR
    // =====================================

    if (
        err instanceof Prisma.PrismaClientRustPanicError
    ) {

        return next(
            new AppError(
                "Terjadi kesalahan pada database.",
                HTTP_STATUS.INTERNAL_SERVER_ERROR
            )
        );

    }


    // =====================================
    // LANJUT KE ERROR HANDLER
    // =====================================

    next(err);

};

export default prismaErrorHandler;