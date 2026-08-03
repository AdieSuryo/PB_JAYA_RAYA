import AppError from "../errors/AppError.js";

const validate = (schema) => {

    return (req, res, next) => {

        const { error } = schema.validate(
            req.body,
            {
                abortEarly: false
            }
        );

        if (error) {

            const errors = error.details.map((detail) => ({
                field: detail.path.join("."),
                message: detail.message
            }));

            throw new AppError(
                "Data yang dikirim tidak valid",
                400,
                errors
            );

        }

        next();

    };

};

export default validate;