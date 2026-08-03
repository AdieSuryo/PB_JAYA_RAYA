import Joi from "joi";

export const createPelatihSchema = Joi.object({

    nik: Joi
        .string()
        .required()
        .messages({
            "string.empty": "NIK wajib diisi",
            "any.required": "NIK wajib diisi"
        }),

    nama_lengkap: Joi
        .string()
        .required()
        .messages({
            "string.empty" : "Nama lengkap wajib diisi.",
            "any.required": "Nama lengkap harus diisi."
        }),

    jenis_kelamin: Joi
        .string()
        .valid(
            "Laki_Laki",
            "Perempuan"
        )
        .required()
        .messages({
            "any.only": "Jenis kelamin harus Laki_Laki atau Perempuan.",
            "any.required": "Jenis kelamin wajib diisi."
        }),

    tanggal_lahir: Joi
        .date()
        .required()
        .messages({
            "date.base": "Tanggal lahir tidak valid",
            "any.required": "Tanggal lahir wajib diisi"
        }),

    tahun_bergabung: Joi
        .number()
        .integer()
        .required()
        .messages({
            "number.base": "Tahun bergabung harus berupa angka",
            "number.integer": "Tahun bergabung harus berupa bilangan bulat",
            "any.required":  "Tahun bergabing wajib diisi"
        }),

    pernah_melatih_sebelumnya: Joi
        .boolean()
        .required()
        .messages({
            "boolean.base": "Pernah melatih sebelumnya harus berupa true atau false.",
            "any.required": "Informasi pengalaman melatih wajib diisi."
        }),

    klub_negara_sebelumnya: Joi
        .string()
        .allow("", null)
        .optional(),

    mantan_atlet_nasional: Joi
        .boolean()
        .required()
        .messages({
            "boolean.base":
                "Mantan atlet nasional harus berupa true atau false.",
            "any.required":
                "Informasi mantan atlet nasional wajib diisi."
        }),

    asal_klub_nasional: Joi
        .string()
        .allow("", null)
        .optional(),

    mantan_pelatnas: Joi
        .boolean()
        .required()
        .messages({
            "boolean.base":
                "Mantan pelatnas harus berupa true atau false.",
            "any.required":
                "Informasi mantan pelatnas wajib diisi."
        }),

    tahun_pelatnas: Joi
        .number()
        .integer()
        .allow(null)
        .optional()
        .messages({
            "number.base":
                "Tahun pelatnas harus berupa angka.",
            "number.integer":
                "Tahun pelatnas harus berupa bilangan bulat."
        }),

    foto: Joi
        .string()
        .allow("", null)
        .optional(),

    uid_provinsi: Joi.string()
        .required()
        .messages({
            "string.empty":
                "Provinsi wajib dipilih.",
            "any.required":
                "Provinsi wajib dipilih."
        })

});

export const updatePelatihSchema = Joi.object({

    nik: Joi.string()
        .optional(),

    nama_lengkap: Joi.string()
        .optional(),

    jenis_kelamin: Joi.string()
        .valid(
            "Laki_Laki",
            "Perempuan"
        )
        .optional()
        .messages({
            "any.only":
                "Jenis kelamin harus Laki_Laki atau Perempuan."
        }),

    tanggal_lahir: Joi.date()
        .optional()
        .messages({
            "date.base":
                "Tanggal lahir tidak valid."
        }),

    tahun_bergabung: Joi.number()
        .integer()
        .optional()
        .messages({
            "number.base":
                "Tahun bergabung harus berupa angka.",
            "number.integer":
                "Tahun bergabung harus berupa bilangan bulat."
        }),

    pernah_melatih_sebelumnya: Joi.boolean()
        .optional()
        .messages({
            "boolean.base":
                "Pernah melatih sebelumnya harus berupa true atau false."
        }),

    klub_negara_sebelumnya: Joi.string()
        .allow("", null)
        .optional(),

    mantan_atlet_nasional: Joi.boolean()
        .optional()
        .messages({
            "boolean.base":
                "Mantan atlet nasional harus berupa true atau false."
        }),

    asal_klub_nasional: Joi.string()
        .allow("", null)
        .optional(),

    mantan_pelatnas: Joi.boolean()
        .optional()
        .messages({
            "boolean.base":
                "Mantan pelatnas harus berupa true atau false."
        }),

    tahun_pelatnas: Joi.number()
        .integer()
        .allow(null)
        .optional()
        .messages({
            "number.base":
                "Tahun pelatnas harus berupa angka.",
            "number.integer":
                "Tahun pelatnas harus berupa bilangan bulat."
        }),

    foto: Joi.string()
        .allow("", null)
        .optional(),

    uid_provinsi: Joi.string()
        .optional()

});