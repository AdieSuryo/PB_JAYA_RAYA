import Joi from "joi";

// ======================================
// CREATE ATLET
// ======================================
export const createAtletSchema = Joi.object({

    nik: Joi
        .string()
        .required()
        .messages({
            "string.empty": "NIK wajib diisi",
            "any.required": "NIK wajib diisi"
        }),

    id_pbsi: Joi
        .string()
        .allow(null, "")
        .optional(),

    nama_lengkap: Joi
        .string()
        .required()
        .messages({
            "string.empty": "Nama lengkap wajib diisi",
            "any.required": "Nama lengkap wajib diisi"
        }),

    nama_ayah: Joi
        .string()
        .allow(null, "")
        .optional(),

    nama_ibu: Joi
        .string()
        .allow(null, "")
        .optional(),

    tempat_lahir: Joi
        .string()
        .allow(null, "")
        .optional(),

    tanggal_lahir: Joi
        .date()
        .required()
        .messages({
            "date.base": "Tanggal lahir tidak valid",
            "any.required": "Tanggal lahir wajib diisi"
        }),

    alamat: Joi
        .string()
        .allow(null, "")
        .optional(),

    jenis_kelamin: Joi
        .valid("Laki_Laki", "Perempuan")
        .required()
        .messages({
            "any.only": "Jenis kelamin harus Laki_Laki atau Perempuan",
            "any.required": "Jenis kelamin wajib diisi"
        }),

    pegangan_raket: Joi
        .valid("Kanan", "Kiri")
        .required()
        .messages({
            "any.only": "Pegangan raket harus Kanan atau Kiri",
            "any.required": "Pegangan raket wajib diisi"
        }),

    tinggi_badan: Joi
        .number()
        .positive()
        .required()
        .messages({
            "number.base": "Tinggi badan harus berupa angka",
            "number.positive": "Tinggi badan harus lebih dari 0",
            "any.required": "Tinggi badan wajib diisi"
        }),

    berat_badan: Joi
        .number()
        .positive()
        .required()
        .messages({
            "number.base": "Berat badan harus berupa angka",
            "number.positive": "Berat badan harus lebih dari 0",
            "any.required": "Berat badan wajib diisi"
        }),

    status_atlet: Joi
        .string()
        .required()
        .messages({
            "string.empty": "Status atlet wajib diisi",
            "any.required": "Status atlet wajib diisi"
        }),

    foto: Joi
        .string()
        .allow(null, "")
        .optional(),

    uid_provinsi: Joi
        .string()
        .required()
        .messages({
            "string.empty": "Provinsi wajib dipilih",
            "any.required": "Provinsi wajib dipilih"
        })

});


// ======================================
// UPDATE ATLET
// ======================================
export const updateAtletSchema = Joi.object({

    nik: Joi
        .string()
        .optional(),

    id_pbsi: Joi
        .string()
        .allow(null, "")
        .optional(),

    nama_lengkap: Joi
        .string()
        .optional(),

    nama_ayah: Joi
        .string()
        .allow(null, "")
        .optional(),

    nama_ibu: Joi
        .string()
        .allow(null, "")
        .optional(),

    tempat_lahir: Joi
        .string()
        .allow(null, "")
        .optional(),

    tanggal_lahir: Joi
        .date()
        .optional()
        .messages({
            "date.base": "Tanggal lahir tidak valid"
        }),

    alamat: Joi
        .string()
        .allow(null, "")
        .optional(),

    jenis_kelamin: Joi
        .valid("Laki_Laki", "Perempuan")
        .optional()
        .messages({
            "any.only": "Jenis kelamin harus Laki-laki atau Perempuan"
        }),

    pegangan_raket: Joi
        .valid("Kanan", "Kiri")
        .optional()
        .messages({
            "any.only": "Pegangan raket harus Kanan atau Kiri"
        }),

    tinggi_badan: Joi
        .number()
        .positive()
        .optional()
        .messages({
            "number.base": "Tinggi badan harus berupa angka",
            "number.positive": "Tinggi badan harus lebih dari 0"
        }),

    berat_badan: Joi
        .number()
        .positive()
        .optional()
        .messages({
            "number.base": "Berat badan harus berupa angka",
            "number.positive": "Berat badan harus lebih dari 0"
        }),

    status_atlet: Joi
        .string()
        .optional(),

    foto: Joi
        .string()
        .allow(null, "")
        .optional(),

    uid_provinsi: Joi
        .string()
        .optional()

});