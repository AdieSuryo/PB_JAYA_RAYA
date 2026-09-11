import bcrypt from "bcrypt";
import { generateUID } from "../../utils/generateUID.js";
import userRepository from "./user.repository.js";
import AppError from "../../errors/AppError.js";
import HTTP_STATUS from "../../constants/httpStatus.js";

const userService = {

    // ===========================
    // GET ALL USER
    // ===========================
    getAllUsers: async () => {

        return await userRepository.findAll();

    },

    // ===========================
    // GET USER BY ID
    // ===========================
    getUserById: async (uid_user) => {

        const user = await userRepository.findById(uid_user);

        if (!user || user.deleted_at !== null) {
            throw new AppError(
                "User tidak ditemukan",
                HTTP_STATUS.NOT_FOUND
            );
        }

        return user;

    },

    // ===========================
    // GET USER MANAGEMENT DATA
    // ===========================
    getManagementData: async () => {

        const {
            atlet,
            pelatih,
            users
        } =
            await userRepository
                .getManagementData();


        // ===========================
        // MAP USER BERDASARKAN PROFILE
        // ===========================

        const userByAtlet =
            new Map();

        const userByPelatih =
            new Map();


        users.forEach((user) => {

            if (user.uid_atlet) {
                userByAtlet.set(
                    user.uid_atlet,
                    user
                );
            }

            if (user.uid_pelatih) {
                userByPelatih.set(
                    user.uid_pelatih,
                    user
                );
            }

        });


        // ===========================
        // DATA ATLET
        // ===========================

        const atletData =
            atlet.map((item) => {

                const account =
                    userByAtlet.get(
                        item.uid_atlet
                    );

                return {

                    nama:
                        item.nama_lengkap,

                    tipe:
                        "Atlet",

                    uid_profile:
                        item.uid_atlet,

                    nik:
                        item.nik,

                    punya_akun:
                        !!account,

                    status_akun:
                        !account
                            ? "BELUM_PUNYA_AKUN"
                            : account.deleted_at
                                ? "NONAKTIF"
                                : "AKTIF",

                    account:
                        account
                            ? {
                                uid_user:
                                    account.uid_user,

                                username:
                                    account.username,

                                roles:
                                    account.user_roles.map(
                                        (item) =>
                                            item.role
                                    )
                            }
                            : null

                };

            });


        // ===========================
        // DATA PELATIH
        // ===========================

        const pelatihData =
            pelatih.map((item) => {

                const account =
                    userByPelatih.get(
                        item.uid_pelatih
                    );

                return {

                    nama:
                        item.nama_lengkap,

                    tipe:
                        "Pelatih",

                    uid_profile:
                        item.uid_pelatih,

                    nik:
                        item.nik,

                    punya_akun:
                        !!account,

                    status_akun:
                        !account
                            ? "BELUM_PUNYA_AKUN"
                            : account.deleted_at
                                ? "NONAKTIF"
                                : "AKTIF",

                    account:
                        account
                            ? {
                                uid_user:
                                    account.uid_user,

                                username:
                                    account.username,

                                roles:
                                    account.user_roles.map(
                                        (item) =>
                                            item.role
                                    )
                            }
                            : null

                };

            });


        // ===========================
        // SUMMARY
        // ===========================

        return {

            summary: {

                atlet: {

                    total:
                        atletData.length,

                    punya_akun:
                        atletData.filter(
                            (item) =>
                                item.punya_akun
                        ).length,

                    belum_akun:
                        atletData.filter(
                            (item) =>
                                !item.punya_akun
                        ).length

                },

                pelatih: {

                    total:
                        pelatihData.length,

                    punya_akun:
                        pelatihData.filter(
                            (item) =>
                                item.punya_akun
                        ).length,

                    belum_akun:
                        pelatihData.filter(
                            (item) =>
                                !item.punya_akun
                        ).length

                }

            },


            users: [
                ...atletData,
                ...pelatihData
            ]

        };

    },

    // ===========================
    // CREATE USER
    // ===========================
    createUser: async (body, actor) => {

        const {
            username,
            password,
            roles,
            uid_atlet,
            uid_pelatih
        } = body;

        // Validasi Role
        if (
            !roles ||
            !Array.isArray(roles) ||
            roles.length === 0
        ) {
            throw new AppError(
                "Minimal satu role wajib dipilih",
                HTTP_STATUS.BAD_REQUEST 
            );
        }

        // Hilangkan role duplicate
        const uniqueRoles = [...new Set(roles)];

        // Superadmin tidak boleh dibuat dari create user biasa
        if (uniqueRoles.includes("SUPERADMIN")) {

            throw new AppError(
                "Role Superadmin tidak dapat dibuat melalui menu User",
                HTTP_STATUS.FORBIDDEN
            );
        }

        if (
            uniqueRoles.includes("ADMIN") &&
            !actor.roles?.includes("SUPERADMIN")
        ) {

            throw new AppError(
                "Hanya Superadmin yang dapat membuat user Admin",
                HTTP_STATUS.FORBIDDEN
            );

        }

        // Cek username
        const existingUser =
            await userRepository.findByUsername(username);

        if (existingUser) {
            throw new AppError(
                "Username sudah digunakan",
                HTTP_STATUS.CONFLICT
            );
        }

        //Cari role di database
        const roleRecords =
            await userRepository.findRolesByCodes(
                uniqueRoles
            );

        if (
            roleRecords.length !==
            uniqueRoles.length
        ) {

            throw new AppError(
                "Terdapat role yang tidak valid",
                HTTP_STATUS.BAD_REQUEST
            );

        }

        // Generate UID
        const uid_user = await generateUID(
            "mUser",
            "uid_user",
            "USR"
        );

        // Hash Password
        const hashedPassword =
            await bcrypt.hash(password, 10);

        // Simpan
        return await userRepository.createWithRoles({

            user: {
                uid_user,

                username,

                password: hashedPassword,

                uid_atlet: uid_atlet || null,

                uid_pelatih: uid_pelatih || null,

                created_by_uid: actor.uid_user,

                updated_by_uid: actor.uid_user

            },

            roles: roleRecords.map(
                (role) => role.uid_role
            )

        });

    },

    // ===========================
    // UPDATE USER
    // ===========================
    updateUser: async (
        uid_user,
        body,
        actor
    ) => {

        const existingUser = await userRepository.findById(
            uid_user
        );

        if (!existingUser || existingUser.deleted_at !== null) {
            throw new AppError(
                "User tidak ditemukan",
                HTTP_STATUS.NOT_FOUND
            );
        }

        const {
            username,
            password,
            roles,
            uid_atlet,
            uid_pelatih
        } = body;

        if (username && username !== existingUser.username) {
            
            const usernameExist = await userRepository.findByUsername(
                username
            );

            if (usernameExist) {

                throw new AppError(
                    "Username sudah digunakan",
                    HTTP_STATUS.CONFLICT
                );
            }
        }

        // Validaso Role Jika Berubah
        let roleRecords = null;

        if (roles) {

            if (
                !Array.isArray(roles) ||
                roles.length === 0
            ) {
                
                throw new AppError(
                    "Minimal satu role wajib dipilih",
                    HTTP_STATUS.BAD_REQUEST
                );
            }

            const uniqueRoles = 
                [...new Set(roles)];

            if (
                uniqueRoles.includes("SUPERADMIIN")
            ) {

                throw new AppError(
                    "Role Superadmin tidak dapat ditetapkan melalui menu User",
                    HTTP_STATUS.FORBIDDEN
                );
            }

            if (
                uniqueRoles.includes("ADMIN") &&
                !actor.roles?.includes("SUPERADMIN")
            ) {

                throw new AppError(
                    "Hanya Superadmin yang dapat menetapkan role Admin",
                    HTTP_STATUS.FORBIDDEN
                );
            }

            roleRecords =
                await userRepository.findRolesByCodes(
                    uniqueRoles
                );

            if (
                roleRecords.length !==
                uniqueRoles.length
            ) {

                throw new AppError(
                    "Terdapat role yang tidak valid",
                    HTTP_STATUS.BAD_REQUEST
                );
            }
        }

        const data = {

            username,

            uid_atlet:
                uid_atlet ?? existingUser.uid_atlet,

            uid_pelatih:
                uid_pelatih ?? existingUser.uid_pelatih,

            updated_by_uid:
                actor.uid_user
            
        };

        if (password) {

            data.password = 
                await bcrypt.hash(
                    password,
                    10
                );
        }

        return await userRepository.updateWithRoles(
            uid_user,
            data,
            roleRecords
                ? roleRecords.map(
                    (role) => role.uid_role
                )
                : null
        );

       
    },

    // ===========================
    // SOFT DELETE USER
    // ===========================
    deleteUser: async (
        uid_user,
        actor
    ) => {

        const existingUser = await userRepository.findById(
            uid_user
        );

        if (
            !existingUser ||
            existingUser.deleted_at !== null
        ) {
            throw new AppError(
                "User tidak ditemukan",
                HTTP_STATUS.NOT_FOUND
            );
        }

        // Superadmin tidak menghaous akun sendiri
        if (actor.uid_user === uid_user) {
            throw new AppError(
                "Anda tidak bisa menonaktifkan akun sendiri.",
                HTTP_STATUS.FORBIDDEN
            )
        }

        const targetRoles = existingUser.user_roles.map(
            (item) => item.role.kode_role
        );

        if (
            actor.role?.includes("ADMIN") &&
            targetRoles.includes("SUPERADMIN")
        ) {
            throw new AppError(
                "Admin tidak memiliki izin untuk menonaktifkan user Superadmin.",
                HTTP_STATUS.FORBIDDEN
            );
        }

        return await userRepository.softDelete(
            uid_user,
            actor.uid_user
        );

    },

    // Reactive User
    reactiveUser: async (
        uid_user,
        actor
    ) => {

        const existingUser =
            await userRepository.findByIdIncludeDeleted(
                uid_user
            );

        if (!existingUser) {
            throw new AppError(
                "User tidak ditemukan",
                HTTP_STATUS.NOT_FOUND
            );
        }

        if (!existingUser.deleted_at) {
            throw new AppError(
                "User sudah dalam keadaan aktif",
                HTTP_STATUS.BAD_REQUEST
            );
        }

        return await userRepository.reactivate(
            uid_user,
            actor.uid_user
        );
    },

    // Delete Permanent
    deleteUserPermanent: async (
        uid_user,
        actor
    ) => {

        const existingUser = 
            await userRepository.findById(uid_user);

        if (!existingUser) {

            throw new AppError(
                "User tidak ditemukan",
                HTTP_STATUS.NOT_FOUND
            );
        }

        // Tidak bisa hapus diri sendiri
        if (actor.uid_user === uid_user) {
            
            throw new AppError(
                "Anda tidak dapat menghapus akun sendiri secara permanen.",
                HTTP_STATUS.FORBIDDEN
            );
        }

        const targetRoles = 
            existingUser.user_roles.map(
                (item) => item.role.kode_role
            );

        // Proteksi Superadmin
        if (targetRoles.includes("SUPERADMIN")) {

            throw new AppError(
                "User Superadmin tidak dapat dihapus permanen melalui menu User",
                HTTP_STATUS.FORBIDDEN
            );
        }

        // Harus sudah dinonaktifkan dulu
        if (!existingUser.deleted_at) {

            throw new AppError(
                "User harus dinonaktifkan terlebih dahulu sebelum dihapus permanen.",
                HTTP_STATUS.BAD_REQUEST
            );
        }

        // Cek apakah punya histori
        const hasHistory = 
            await userRepository.hasUserHistory(uid_user);

        if (hasHistory) {

            throw new AppError(
                "User tidak dapat dihapus permanen karena memiliki history aktivitas.",
                HTTP_STATUS.CONFLICT
            );
        }

        return await userRepository.hardDelete(
            uid_user
        );
    }

};

export default userService;