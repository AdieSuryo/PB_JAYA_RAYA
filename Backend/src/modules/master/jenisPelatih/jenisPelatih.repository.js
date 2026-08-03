import prisma from "../../../config/prisma.js";

const jenisPelatihRepository = {

    // Get All
    findAll: async () => {
        return await prisma.mJenisPelatih.findMany({

            where: {
                deleted_at: null
            },

            orderBy: {
                nama_jenis_pelatih: "asc"
            }
        });
    },
    


    // Get By ID
    findById: async (uid_jenis_pelatih) => {

        return await prisma.mJenisPelatih.findUnique({

            where: {
                uid_jenis_pelatih
            }
        });
    },

    // Get By Name
    findByName: async (nama_jenis_pelatih) => {

        return await prisma.mJenisPelatih.findFirst({

            where: {
                nama_jenis_pelatih: {
                    equals: nama_jenis_pelatih,
                    mode: "insensitive"
                },

                deleted_at: null
            }

        });
    },

    // Create

    create: async (data) => {

        return await prisma.mJenisPelatih.create({

            data
        });
    },

    // Update
    update: async (uid_jenis_pelatih, daya) => {

        return await prisma.mJenisPelatih.update({

            where: {
                uid_jenis_pelatih
            },

            data
        });
    },

    // Delete
    delete: async (uid_jenis_pelatih, deleted_by_uid) => {

        return await prisma.mJenisPelatih.update({

            where: {
                uid_jenis_pelatih
            },

            data: {
                deleted_at: new Date(),
                deleted_by_uid
            }
        });
    }
};

export default jenisPelatihRepository;