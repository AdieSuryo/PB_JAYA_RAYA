import { prisma } from  "../../config/db.js";

const atletPelatihRepository = {

    //Get All
    findAll: async () => {

        return await prisma.rAtletPelatih.findMany({

            where: {
                deleted_at: null
            },

            include: {
                atlet: true,
                pelatih: true
            }
        });
    },

    //Find By Id
    findById: async (uid_atlet_pelatih) => {

        return await prisma.rAtletPelatih.findUnique({

            where: {

                uid_atlet_pelatih

            }

        });

    },

    //Get By Pelatih
    findByPelatih: async (uid_pelatih) => {

        return await prisma.rAtletPelatih.findMany({

            where: {

                uid_pelatih,

                deleted_at: null

            },

            include: {

                atlet: {

                    select: {

                        uid_atlet: true,
                        nama_lengkap: true,
                        status_atlet: true,
                        foto: true

                    }

                }

            }

        });

    },

    //Get By Atlet
    findByAtlet: async (uid_atlet) => {

        return await prisma.rAtletPelatih.findMany({

            where: {
                uid_atlet,
                deleted_at: null
            },
            
            include: {
                pelatih: true
            }
        });
    },

    //Apakah sudah ada relasi
    findRelation: async (
        uid_atlet,
        uid_pelatih
    ) => {

        return await prisma.rAtletPelatih.findFirst({

            where: {
                uid_atlet,
                uid_pelatih,
                deleted_at: null
            }
        });
    },

    //Create
    create: async (data) => {

        return await prisma.rAtletPelatih.create({

            data
        });
    },

    //Soft delete
    softDelete: async (
        uid_atlet_pelatih,
        deleted_by_uid
    ) => {

        return await prisma.rAtletPelatih.update({

            where: {
                uid_atlet_pelatih
            },

            data: {

                deleted_at: new Date(),
                deleted_by_uid
            }
        });
    }
};

export default atletPelatihRepository;