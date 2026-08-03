import Joi from "joi";

// ================================
// CREATE
// ================================
export const createProvinsiSchema = Joi.object({

    nama_provinsi: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Nama provinsi wajib diisi."
        })

});

// ================================
// UPDATE
// ================================
export const updateProvinsiSchema = Joi.object({

    nama_provinsi: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Nama provinsi wajib diisi."
        })

});