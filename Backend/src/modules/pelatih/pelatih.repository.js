import { prisma } from "../../config/db.js";

const pelatihRepository = {

    // Get All
    findAll: async () => {

        return await prisma.mPelatih.findMany({
            where: {
                deleted_at: null
            },
            include: {
                provinsi: true,
                user_akun: true
            }
        });
    },

    //Get By Id
    findById: async (uid_pelatih) => {

        return await prisma.mPelatih.findUnique({
            where: {
                uid_pelatih
            },

            include: {
                provinsi: true,
                user_akun: true
            }
        });
    },

    //Find By NIK
    findByNik: async (nik) => {
        return await prisma.mPelatih.findFirst({
            where: {
                nik,
                deleted_at: null
            }
        });
    },

    //create
    create: async (data) => {
        return await prisma.mPelatih.create({
            data
        });
    },

    //Update
    update: async (uid_pelatih, data) => {
        return await prisma.mPelatih.update({
            where: {
                uid_pelatih
            },
            data
        });
    },

    //Delate
    softDelete: async (uid_pelatih, actorUid) => {

        return await prisma.$transaction([

            prisma.mPelatih.update({
                where: {
                    uid_pelatih
                },

                data: {
                    deleted_at: new Date(),
                    deleted_by_uid: actorUid
                }
            }),

            prisma.mUser.updateMany({
                where: {
                    uid_pelatih
                },

                data: {
                    deleted_at: new Date(),
                    deleted_by_uid: actorUid
                }
            })

        ]);

    }


};

export default pelatihRepository