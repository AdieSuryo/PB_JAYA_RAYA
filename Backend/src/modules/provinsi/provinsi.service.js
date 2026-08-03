import provinsiRepository from "./provinsi.repository.js";
import { generateUID } from "../../utils/generateUID.js";

const provinsiService = {

    // =====================================
    // GET ALL
    // =====================================
    getAllProvinsi: async () => {

        return await provinsiRepository.findAll();

    },

    // =====================================
    // GET BY ID
    // =====================================
    getProvinsiById: async (uid_provinsi) => {

        const provinsi =
            await provinsiRepository.findById(uid_provinsi);

        if (!provinsi || provinsi.deleted_at !== null) {
            throw new Error("Provinsi tidak ditemukan.");
        }

        return provinsi;

    },

    // =====================================
    // CREATE
    // =====================================
    createProvinsi: async (body, actor) => {

        const uid_provinsi = await generateUID(
            "mProvinsi",
            "uid_provinsi",
            "PRV"
        );

        const {
            nama_provinsi
        } = body;

        return await provinsiRepository.create({

            uid_provinsi,

            nama_provinsi,

            created_by_uid: actor.uid_user,

            updated_by_uid: actor.uid_user

        });

    },

    // =====================================
    // UPDATE
    // =====================================
    updateProvinsi: async (
        uid_provinsi,
        body,
        actor
    ) => {

        const provinsi =
            await provinsiRepository.findById(uid_provinsi);

        if (!provinsi || provinsi.deleted_at !== null) {
            throw new Error("Provinsi tidak ditemukan.");
        }

        const {
            nama_provinsi
        } = body;

        return await provinsiRepository.update(

            uid_provinsi,

            {

                nama_provinsi,

                updated_by_uid: actor.uid_user

            }

        );

    },

    // =====================================
    // DELETE
    // =====================================
    deleteProvinsi: async (
        uid_provinsi,
        actor
    ) => {

        const provinsi =
            await provinsiRepository.findById(uid_provinsi);

        if (!provinsi || provinsi.deleted_at !== null) {
            throw new Error("Provinsi tidak ditemukan.");
        }

        return await provinsiRepository.softDelete(

            uid_provinsi,

            actor.uid_user

        );

    }

};

export default provinsiService;