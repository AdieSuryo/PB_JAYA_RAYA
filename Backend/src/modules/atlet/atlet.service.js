import atletRepository from "./atlet.repository.js";
import { generateUID } from "../../utils/generateUID.js";
import AppError from "../../errors/AppError.js";
import HTTP_STATUS from "../../constants/httpStatus.js";
import {uploadImage } from "../../utils/cloudinaryHelper.js";

const atletService = {

    // GET ALL
    getAllAtlet: async () => {

        return await atletRepository.findAll();

    },

    // GET BY ID
    getAtletById: async (uid_atlet, user) => {

        // Atlet hanya boleh melihat dirinya sendiri
        if (
            user.role === "Atlet" &&
            user.uid_atlet !== uid_atlet
        ) {
            throw new AppError(
                "Anda tidak boleh melihat data atlet lain.",
                HTTP_STATUS.FORBIDDEN
            );
        }

        const atlet =
            await atletRepository.findById(uid_atlet);

        if (!atlet || atlet.deleted_at !== null) {
            throw new AppError(
                "Atlet tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );
        }

        return atlet;

    },

    // CREATE
    createAtlet: async (body, file, actor) => {

        //Cek NIK
        const nikExist = await atletRepository.findByNik(body.nik);

        if (nikExist) {
            throw new AppError(
                "NIK sudah terdaftar",
                HTTP_STATUS.CONFLICT
            );
        }

        const uid_atlet = await generateUID(
            "mAtlet",
            "uid_atlet",
            "ATL"
        );

        let fotoUrl = null;

        if (file) {
            
            const uploadResult = await uploadImage(
                file.buffer,
                "atlet"
            );

            fotoUrl = uploadResult.secure_url;
        }

        const {
            nik,
            id_pbsi,
            nama_lengkap,
            nama_ayah,
            nama_ibu,
            tempat_lahir,
            tanggal_lahir,
            alamat,
            jenis_kelamin,
            pegangan_raket,
            tinggi_badan,
            berat_badan,
            status_atlet,         
            uid_provinsi
        } = body;

        return await atletRepository.create({

            uid_atlet,

            nik,
            id_pbsi,
            nama_lengkap,
            nama_ayah,
            nama_ibu,
            tempat_lahir,

            tanggal_lahir: new Date(tanggal_lahir),

            alamat,

            jenis_kelamin,

            pegangan_raket,

            tinggi_badan:
                tinggi_badan
                    ? parseInt(tinggi_badan)
                    : null,

            berat_badan:
                berat_badan
                    ? parseInt(berat_badan)
                    : null,

            status_atlet,

            foto: fotoUrl,

            uid_provinsi,

            created_by_uid: actor.uid_user,

            updated_by_uid: actor.uid_user

        });

    },

    // UPDATE
    updateAtlet: async (uid_atlet, body) => {

        const atlet = await atletRepository.findById(uid_atlet);

        if (!atlet || atlet.deleted_at !== null) {
            throw new AppError(
                "Atlet tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );
        }

        if (body.tanggal_lahir) {
            body.tanggal_lahir =
                new Date(body.tanggal_lahir);
        }

        if (body.tinggi_badan !== undefined) {
            body.tinggi_badan =
                body.tinggi_badan !== ""
                    ? parseInt(body.tinggi_badan)
                    : null;
        }

        if (body.berat_badan !== undefined) {
            body.berat_badan =
                body.berat_badan !== ""
                    ? parseInt(body.berat_badan)
                    : null;
        }

        return await atletRepository.update(
            uid_atlet,
            body
        );

    },

    // DELETE
    deleteAtlet: async (uid_atlet, actor) => {

        const atlet =
            await atletRepository.findById(uid_atlet);

        if (!atlet || atlet.deleted_at !== null) {
            throw new AppError(
                "Atlet tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );
        }

        return await atletRepository.softDelete(
            uid_atlet,
            actor.uid_user
        );

    }

};

export default atletService;