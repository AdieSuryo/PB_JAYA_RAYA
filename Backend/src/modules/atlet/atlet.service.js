import atletRepository from "./atlet.repository.js";
import { generateUID } from "../../utils/generateUID.js";
import AppError from "../../errors/AppError.js";
import HTTP_STATUS from "../../constants/httpStatus.js";

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
    createAtlet: async (body, actor) => {

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
            foto,
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

            tinggi_badan,

            berat_badan,

            status_atlet,

            foto,

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