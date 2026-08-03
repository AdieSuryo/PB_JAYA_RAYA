import { prisma } from "../../config/db.js";

const userRepository = {

    // ===========================
    // GET ALL USER
    // ===========================
    findAll: async () => {

        return await prisma.mUser.findMany({
            where: {
                deleted_at: null
            },
            include: {
                atlet_profile: true,
                pelatih_profile: true,
                creator: {
                    select: {
                        username: true
                    }
                }
            }
        });

    },

    // ===========================
    // GET USER BY ID
    // ===========================
    findById: async (uid_user) => {

        return await prisma.mUser.findUnique({
            where: {
                uid_user
            },
            include: {
                atlet_profile: true,
                pelatih_profile: true
            }
        });

    },

    // ===========================
    // FIND USERNAME
    // ===========================
    findByUsername: async (username) => {

        return await prisma.mUser.findFirst({
            where: {
                username,
                deleted_at: null
            }
        });

    },

    // ===========================
    // CREATE USER
    // ===========================
    create: async (data) => {

        return await prisma.mUser.create({
            data
        });

    },

    // ===========================
    // UPDATE USER
    // ===========================
    update: async (uid_user, data) => {

        return await prisma.mUser.update({
            where: {
                uid_user
            },
            data
        });

    },

    // ===========================
    // SOFT DELETE USER
    // ===========================
    softDelete: async (uid_user, deleted_by_uid) => {

        return await prisma.mUser.update({
            where: {
                uid_user
            },
            data: {
                deleted_at: new Date(),
                deleted_by_uid
            }
        });

    }

};

export default userRepository;