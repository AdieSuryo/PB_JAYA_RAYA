import { prisma } from "../../config/db.js";

const authRepository = {

    // =====================================
    // FIND USERNAME
    // =====================================
    findByUsername: async (username) => {

        return await prisma.mUser.findFirst({

            where: {
                username,
                deleted_at: null
            },

            include: {

                atlet_profile: true,

                pelatih_profile: true,

                user_roles: {
                    include: {
                        role: true
                    }
                }

            }

        });

    },

    // =====================================
    // CREATE ADMIN
    // =====================================
    createAdmin: async (data) => {

        return await prisma.mUser.create({

            data

        });

    }

};

export default authRepository;