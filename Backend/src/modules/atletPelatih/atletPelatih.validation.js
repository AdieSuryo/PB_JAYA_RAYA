import Joi from "joi";

export const assignPelatihSchema = Joi.object({

    uid_atlet: Joi.string()
        .required()
        .messages({
            "string.empty": "UID Atlet wajib diisi",
            "any.required": "UID Atlet wajib diisi"
        }),

    uid_pelatih: Joi.string()
        .required()
        .messages({
            "string.empty": "UID Pelatih wajib diisi",
            "any.required": "UID Pelatih wajib diisi"
        })

});