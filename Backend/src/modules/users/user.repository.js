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

                user_roles: {
                    include: {
                        role: true
                    }
                },

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
                pelatih_profile: true,

                user_roles: {
                    include: {
                        role: true
                    }
                }
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
    // FIND ROLE BY CODES
    // ===========================
    findRolesByCodes: async (roleCodes) => {

        return await prisma.mRole.findMany({
            where: {
                kode_role: {
                    in: roleCodes
                },
                status_aktif: true,
                deleted_at: null
            }
        });

    },

    // Cek Histori User
    hasUserHistory: async (uid_user) => {

        const createdAtlete =
            await prisma.mAtlet.count({
                where: {
                    created_by_uid: uid_user
                }
            });

        const updateAthelete = 
            await prisma.mAtlet.count({
                where: {
                    updated_by_uid: uid_user
                }
            });

        const createdCoach =
            await prisma.mPelatih.count({
                where: {
                    created_by_uid: uid_user
                }
            });

        const updatedCoach =
            await prisma.mPelatih.count({
                where: {
                    updated_by_uid: uid_user
                }
            });

        return (
            createdAtlete > 0 ||
            updateAthelete > 0 ||
            createdCoach > 0 ||
            updatedCoach > 0 
        );
    },

    // ===========================
    // CREATE USER + ROLES
    // ===========================
    createWithRoles: async ({ user, roles }) => {

        return await prisma.$transaction(async (tx) => {

            // Create user
            const createdUser = await tx.mUser.create({
                data: user
            });

            // Create relasi user-role
            await tx.rUserRole.createMany({
                data: roles.map((uid_role) => ({
                    uid_user: createdUser.uid_user,
                    uid_role
                }))
            });

            // Ambil ulang user beserta role
            return await tx.mUser.findUnique({
                where: {
                    uid_user: createdUser.uid_user
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

        });

    },

    // ===========================
    // UPDATE USER
    // ===========================
    updateWithRoles: async (uid_user, data, roleUids) => {

        return await prisma.$transaction(async (tx) => {

            // Update Data User
            await tx.mUser.update({
                where: {
                    uid_user
                },
                data
            });

            // Update Role Jika Dikirim
            if (roleUids !== null) {

                // Hapus role lama
                await tx.rUserRole.deleteMany({
                    where: {
                        uid_user
                    }
                });

                // Tambah role baru
                if (roleUids.length > 0) {

                    await tx.rUserRole.createMany({
                        data: roleUids.map(
                            (uid_role) => ({
                                uid_user,
                                uid_role
                            })
                        )
                    });
                }
            }

            // Ambil Data User Terbaru
            return await tx.mUser.findUnique({
                where: {
                    uid_user
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
        });

    },

    // Get User Management Data
    getManagementData: async () => {

        const [
            atlet,
            pelatih,
            users
        ] = await Promise.all([

            prisma.mAtlet.findMany({
                where: {
                    deleted_at: null
                }
            }),

            prisma.mPelatih.findMany({
                where: {
                    deleted_at: null
                }
            }),

            prisma.mUser.findMany({
                select: {
                    uid_user: true,
                    username: true,
                    uid_atlet: true,
                    uid_pelatih: true,
                    deleted_at: true,

                    user_roles: {
                        select: {
                            role: {
                                select: {
                                    uid_role: true,
                                    nama_role: true,
                                    kode_role: true
                                }
                            }
                        }
                    }
                }
            })
        ]);

        return {
            atlet,
            pelatih,
            users
        };
    },

    // ===========================
    // SOFT DELETE USER
    // ===========================
    softDelete: async (
        uid_user,
        deleted_by_uid
    ) => {

        return await prisma.mUser.update({
            where: {
                uid_user
            },
            data: {
                deleted_at: new Date(),
                deleted_by_uid
            }
        });

    },

    // Mencari Soft Delete Users
    findByIdIncludeDeleted: async (uid_user) => {
        return await prisma.mUser.findUnique({
            where: {
                uid_user
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

    // Reactivate User
    reactivate: async (
        uid_user,
        updated_by_uid
    ) => {

        return await prisma.mUser.update({
            where: {
                uid_user
            },
            data: {
                deleted_at: null,
                deleted_by_uid: null,
                updated_by_uid
            }
        });
    },

    // Hard Delete
    hardDelete: async (uid_user) => {
        return await prisma.$transaction(async (tx) => {

            // Hapus relasi role user
            await tx.rUserRole.deleteMany({
                where: {
                    uid_user
                }
            });

            // Hapus user
            return await tx.mUser.delete({
                where: {
                    uid_user
                }
            });
        });
    }

};

export default userRepository;