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

    role: Joi.string()
        .valid(
            "Admin",
            "Manajemen",
            "Atlet",
            "pelatih_teknik",
            "pelatih_fisik"
        )
        .required()
        .messages({
            "any.only":
                "Role harus Admin, Manajemen, Atlet, pelatih_teknik, atau pelatih_fisik.",
            "any.required":
                "Role wajib diisi."
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

    role: Joi.string()
        .valid(
            "Admin",
            "Manajemen",
            "Atlet",
            "pelatih_teknik",
            "pelatih_fisik"
        )
        .optional()
        .messages({
            "any.only":
                "Role harus Admin, Manajemen, Atlet, pelatih_teknik, atau pelatih_fisik."
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