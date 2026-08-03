import { prisma } from "../../config/db.js";

const provinsiRepository = {

    // =====================================
    // GET ALL
    // =====================================
    findAll: async () => {

        return await prisma.mProvinsi.findMany({

            where: {
                deleted_at: null
            },

            orderBy: {
                nama_provinsi: "asc"
            }

        });

    },

    // =====================================
    // GET BY ID
    // =====================================
    findById: async (uid_provinsi) => {

        return await prisma.mProvinsi.findUnique({

            where: {
                uid_provinsi
            }

        });

    },

    // =====================================
    // CREATE
    // =====================================
    create: async (data) => {

        return await prisma.mProvinsi.create({
            data
        });

    },

    // =====================================
    // UPDATE
    // =====================================
    update: async (
        uid_provinsi,
        data
    ) => {

        return await prisma.mProvinsi.update({

            where: {
                uid_provinsi
            },

            data

        });

    },

    // =====================================
    // SOFT DELETE
    // =====================================
    softDelete: async (
        uid_provinsi,
        actorUid
    ) => {

        return await prisma.mProvinsi.update({

            where: {
                uid_provinsi
            },

            data: {

                deleted_at: new Date(),

                deleted_by_uid: actorUid

            }

        });

    }

};

export default provinsiRepository;