import pelatihRepository from "./pelatih.repository.js";
import { generateUID } from "../../utils/generateUID.js";
import AppError from "../../errors/AppError.js";
import HTTP_STATUS from "../../constants/httpStatus.js";

const pelatihService = {

    // ======================================
    // GET ALL
    // ======================================
    getAllPelatih: async () => {

        return await pelatihRepository.findAll();

    },

    // ======================================
    // GET BY ID
    // ======================================
    getPelatihById: async (uid_pelatih, user) => {

        // Pelatih hanya boleh melihat dirinya sendiri
        if (
            (
                user.role === "pelatih_teknik" ||
                user.role === "pelatih_fisik"
            ) &&
            user.uid_pelatih !== uid_pelatih
        ) {

            throw new AppError(
                "Anda tidak boleh melihat data pelatih lain.",
                HTTP_STATUS.FORBIDDEN
            );

        }

        const pelatih =
            await pelatihRepository.findById(uid_pelatih);

        if (!pelatih || pelatih.deleted_at !== null) {

            throw new AppError(
                "Pelatih tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );

        }

        return pelatih;

    },

    // ======================================
    // CREATE
    // ======================================
    createPelatih: async (body, actor) => {

        // Cek NIK
        const nikExist =
            await pelatihRepository.findByNik(body.nik);

        if (nikExist) {

            throw new AppError(
                "NIK sudah terdaftar",
                HTTP_STATUS.CONFLICT
            );

        }

        const uid_pelatih = await generateUID(
            "mPelatih",
            "uid_pelatih",
            "PLT"
        );

        const {

            nik,
            nama_lengkap,
            jenis_kelamin,
            tanggal_lahir,
            tahun_bergabung,
            pernah_melatih_sebelumnya,
            klub_negara_sebelumnya,
            mantan_atlet_nasional,
            asal_klub_nasional,
            mantan_pelatnas,
            tahun_pelatnas,
            foto,
            uid_provinsi

        } = body;

        return await pelatihRepository.create({

            uid_pelatih,

            nik,
            nama_lengkap,
            jenis_kelamin,

            tanggal_lahir:
                new Date(tanggal_lahir),

            tahun_bergabung,
            pernah_melatih_sebelumnya,
            klub_negara_sebelumnya,
            mantan_atlet_nasional,
            asal_klub_nasional,
            mantan_pelatnas,
            tahun_pelatnas,
            foto,
            uid_provinsi,

            created_by_uid: actor.uid_user,
            updated_by_uid: actor.uid_user

        });

    },

    // ======================================
    // UPDATE
    // ======================================
    updatePelatih: async (uid_pelatih, body) => {

        const pelatih =
            await pelatihRepository.findById(uid_pelatih);

        if (!pelatih || pelatih.deleted_at !== null) {

            throw new AppError(
                "Pelatih tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );

        }

        if (body.tanggal_lahir) {

            body.tanggal_lahir =
                new Date(body.tanggal_lahir);

        }

        return await pelatihRepository.update(
            uid_pelatih,
            body
        );

    },

    // ======================================
    // DELETE
    // ======================================
    deletePelatih: async (uid_pelatih, actor) => {

        const pelatih =
            await pelatihRepository.findById(uid_pelatih);

        if (!pelatih || pelatih.deleted_at !== null) {

            throw new AppError(
                "Pelatih tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );

        }

        return await pelatihRepository.softDelete(
            uid_pelatih,
            actor.uid_user
        );

    }

};

export default pelatihService;