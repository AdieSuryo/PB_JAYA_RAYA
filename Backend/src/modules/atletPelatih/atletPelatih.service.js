import atletPelatihRepository from "./atletPelatih.repository.js";
import atletRepository from "../atlet/atlet.repository.js";
import pelatihRepository from "../pelatih/pelatih.repository.js";

import { generateUID } from "../../utils/generateUID.js";

import AppError from "../../errors/AppError.js";
import HTTP_STATUS from "../../constants/httpStatus.js";

const atletPelatihService = {

    // ======================================
    // GET ALL ASSIGNMENT
    // ======================================
    getAllAssignment: async () => {

        return await atletPelatihRepository.findAll();

    },

    // ======================================
    // GET MY ATHLETES
    // ======================================
    getMyAthletes: async (uid_pelatih) => {

        return await atletPelatihRepository.findByPelatih(
            uid_pelatih
        );

    },

    // ======================================
    // GET ASSIGNMENT BY PELATIH
    // ======================================
    getAssignmentByPelatih: async (uid_pelatih) => {

        const pelatih =
            await pelatihRepository.findById(uid_pelatih);

        if (!pelatih || pelatih.deleted_at !== null) {

            throw new AppError(
                "Pelatih tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );

        }

        return await atletPelatihRepository.findByPelatih(
            uid_pelatih
        );

    },

    // ======================================
    // ASSIGN PELATIH KE ATLET
    // ======================================
    assignPelatih: async (body, actor) => {

        const {

            uid_atlet,

            uid_pelatih

        } = body;

        //------------------------------------------------
        // Cek Atlet
        //------------------------------------------------
        const atlet =
            await atletRepository.findById(uid_atlet);

        if (!atlet || atlet.deleted_at !== null) {

            throw new AppError(
                "Atlet tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );

        }

        //------------------------------------------------
        // Cek Pelatih
        //------------------------------------------------
        const pelatih =
            await pelatihRepository.findById(uid_pelatih);

        if (!pelatih || pelatih.deleted_at !== null) {

            throw new AppError(
                "Pelatih tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
            );

        }

        //------------------------------------------------
        // Cek Sudah Pernah Di Assign
        //------------------------------------------------
        const existing =
            await atletPelatihRepository.findRelation(

                uid_atlet,

                uid_pelatih

            );

        if (existing) {

            throw new AppError(

                "Pelatih sudah ditugaskan kepada atlet ini.",

                HTTP_STATUS.CONFLICT

            );

        }

        //------------------------------------------------
        // Generate UID
        //------------------------------------------------
        const uid_atlet_pelatih =
            await generateUID(

                "rAtletPelatih",

                "uid_atlet_pelatih",

                "RAP"

            );

        //------------------------------------------------
        // Simpan
        //------------------------------------------------
        return await atletPelatihRepository.create({

            uid_atlet_pelatih,

            uid_atlet,

            uid_pelatih,

            created_by_uid: actor.uid_user,

            updated_by_uid: actor.uid_user

        });

    },

    // ======================================
    // REMOVE ASSIGNMENT
    // ======================================
    removeAssignment: async (

        uid_atlet_pelatih,

        actor

    ) => {

        const relation =
            await atletPelatihRepository.findById(
                uid_atlet_pelatih
            );

        if (!relation || relation.deleted_at !== null) {

            throw new AppError(

                "Relasi tidak ditemukan.",

                HTTP_STATUS.NOT_FOUND

            );

        }

        return await atletPelatihRepository.softDelete(

            uid_atlet_pelatih,

            actor.uid_user

        );

    },

    // ======================================
    // CEK APAKAH PELATIH BERWENANG
    // ======================================
    isPelatihAssignedToAtlet: async (

        uid_pelatih,

        uid_atlet

    ) => {

        const relation =
            await atletPelatihRepository.findRelation(

                uid_atlet,

                uid_pelatih

            );

        return !!relation;

    }

};

export default atletPelatihService;