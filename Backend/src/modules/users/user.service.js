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
    // CREATE USER
    // ===========================
    createUser: async (body, actor) => {

        const {
            username,
            password,
            role,
            uid_atlet,
            uid_pelatih
        } = body;

        if (
            actor.role === "Manajemen" &&
            role === "Admin"
        ) {
            throw new AppError(
                "Manager tidak memiliki izin untuk membuat user Admin",
                HTTP_STATUS.FORBIDDEN  
            )
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
        return await userRepository.create({

            uid_user,

            username,

            password: hashedPassword,

            role,

            uid_atlet: uid_atlet || null,

            uid_pelatih: uid_pelatih || null,

            created_by_uid: actor.uid_user,

            updated_by_uid: actor.uid_user

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
            role,
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

        if (
            actor.role === "Manajemen" &&
            role === "Admin"
        ) {
            throw new AppError(
                "Manager tidak memiliki izin untuk menetapkan role Admin",
                HTTP_STATUS.FORBIDDEN
            );
        }

        if (
            actor.role === "Manajermen" &&
            existingUser.role === "Admin"
        ) {
            throw new AppError(
                "Manajemen tidak memiliki izin untuk mengubah user Admin",
                HTTP_STATUS.FORBIDDEN
            );
        }

        const data = {

            username,

            role,

            uid_atlet: uid_atlet || null,

            uid_pelatih: uid_pelatih || null,

            updated_by_uid: actor.uid_user

        };

        if (password) {

            data.password =
                await bcrypt.hash(password, 10);

        }

        return await userRepository.update(
            uid_user,
            data
        );

    },

    // ===========================
    // DELETE USER
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

        if (
            actor.role === "Manajemen" &&
            existingUser.role === "Admin"
        ) {
            throw new AppError(
                "Manajemen tidak memiliki izin untuk menonaktifkan user Admin.",
                HTTP_STATUS.FORBIDDEN
            );
        }

        return await userRepository.softDelete(
            uid_user,
            actor.uid_user
        );

    }

};

export default userService;