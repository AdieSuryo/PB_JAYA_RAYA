import { errorResponse } from "../utils/response.js";

const errorHandler = (
    err,
    req,
    res,
    next
 ) => {
    console.error(
        "ERROR:",
        err
    );

    if (err.isOperational) {

        return errorResponse(
            res,
            err.message,
            err.statusCode,
            err.errors
        );
    }

    return errorResponse(
        res,
        "Teradi kesalahan pada server",
        500
    );
};

export default errorHandler;
