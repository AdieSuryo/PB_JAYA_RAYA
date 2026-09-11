import Joi from "joi";

// Register Admin
export const registerAdminSchema = Joi.object({

    username: Joi.string()
        .min(4)
        .max(50)
        .required()
        .messages({
            "string.empty": "Username wajib diisi.",
            "string.min": "Username minimal 4 karakter."
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            "string.empty": "Password wajib diisi.",
            "string.min": "Password minimal 6 karakter."
        })

});


// Login
export const loginSchema = Joi.object({

    username: Joi.string()
        .required()
        .messages({
            "string.empty": "Username wajib diisi.",
            "any.required": "Username wajib diisi"
        }),

    password: Joi.string()
        .required()
        .messages({
            "string.empty": "Password wajib diisi.",
            "any.required": "Password wajib diisi"
        })

});