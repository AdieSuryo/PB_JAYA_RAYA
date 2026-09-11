import Joi from "joi";

export const createUserSchema = Joi.object({

    username: Joi.string()
        .min(4)
        .max(30)
        .required()
        .messages({
            "string.empty":
                "Username wajib diisi.",
            "string.min":
                "Username minimal 4 karakter.",
            "string.max":
                "Username maksimal 30 karakter.",
            "any.required":
                "Username wajib diisi."
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            "string.empty":
                "Password wajib diisi.",
            "string.min":
                "Password minimal 6 karakter.",
            "any.required":
                "Password wajib diisi."
        }),

    roles: Joi.array()
        .items(
            Joi.string().valid(
                "ADMIN",
                "PELATIH_TEKNIK",
                "PELATIH_FISIK",
                "ATLET"
            )
        )
        .min(1)
        .unique()
        .required()
        .messages({
            "array.base": "Roles harus berupa array.",
            "array.min": "Minimal satu role wajib dipilih.",
            "array.unique": "Role tidak boleh duplikat.",
            "any.required": "Role wajib diisi.",
            "any.only": "Role tidak valid."
        }),

    uid_atlet: Joi.string()
        .allow(null, "")
        .optional()
        .messages({
            "string.base":
                "UID atlet harus berupa teks."
        }),

    uid_pelatih: Joi.string()
        .allow(null, "")
        .optional()
        .messages({
            "string.base":
                "UID pelatih harus berupa teks."
        })

});

export const updateUserSchema = Joi.object({

    username: Joi.string()
        .min(4)
        .max(30)
        .optional()
        .messages({
            "string.empty":
                "Username tidak boleh kosong.",
            "string.min":
                "Username minimal 4 karakter.",
            "string.max":
                "Username maksimal 30 karakter."
        }),

    password: Joi.string()
        .min(6)
        .optional()
        .messages({
            "string.empty":
                "Password tidak boleh kosong.",
            "string.min":
                "Password minimal 6 karakter."
        }),

    roles: Joi.array()
        .items(
            Joi.string().valid(
                "ADMIN",
                "PELATIH_TEKNIK",
                "PELATIH_FISIK",
                "ATLET"
            )
        )
        .min(1)
        .unique()
        .optional()
        .messages({
            "array.base": "Roles harus berupa array.",
            "array.min": "Minimal satu role wajib dipilih.",
            "array.unique": "Role tidak boleh duplikat.",
            "any.required": "Role wajib diisi.",
            "any.only": "Role tidak valid."
        }),

    uid_atlet: Joi.string()
        .allow(null, "")
        .optional()
        .messages({
            "string.base":
                "UID atlet harus berupa teks."
        }),

    uid_pelatih: Joi.string()
        .allow(null, "")
        .optional()
        .messages({
            "string.base":
                "UID pelatih harus berupa teks."
        })

});