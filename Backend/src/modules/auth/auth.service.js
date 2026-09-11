import bcrypt from "bcrypt";
import authRepository from "./auth.repository.js";
import generateToken from "../../utils/GenerateToken.js";
import { generateUID } from "../../utils/generateUID.js";
import AppError from "../../errors/AppError.js";
import HTTP_STATUS from "../../constants/httpStatus.js";

const authService = {

    // =====================================
    // REGISTER ADMIN
    // =====================================
    registerAdmin: async (body) => {

        const {

            username,

            password

        } = body;

        // ===============================
        // Cek Username
        // ===============================
        const existingUser =
            await authRepository.findByUsername(username);

        if (existingUser) {

            throw new AppError(
                "Username sudah digunakan",
                HTTP_STATUS.CONFLICT
            );

        }

        // ===============================
        // Generate UID
        // ===============================
        const uid_user = await generateUID(

            "mUser",

            "uid_user",

            "USR"

        );

        // ===============================
        // Hash Password
        // ===============================
        const hashedPassword =
            await bcrypt.hash(password, 10);

        // ===============================
        // Create Admin
        // ===============================
        const admin =
            await authRepository.createAdmin({

                uid_user,

                username,

                password: hashedPassword,

                role: "Admin"

            });

        return admin;

    },

    // =====================================
    // LOGIN
    // =====================================
    login: async (body) => {

        const {

            username,

            password

        } = body;

        // ===============================
        // Cari User
        // ===============================
        const user =
            await authRepository.findByUsername(username);

        if (!user) {

            throw new AppError(
                "Username atau password salah",
                HTTP_STATUS.UNAUTHORIZED
            );

        }

        // ===============================
        // Compare Password
        // ===============================
        const isMatch =
            await bcrypt.compare(

                password,

                user.password

            );

        if (!isMatch) {

            throw new AppError(
                "Username atau password salah",
                HTTP_STATUS.UNAUTHORIZED
            );

        }

        // Ambil Role
        const roles = user.user_roles.map((item) => ({
            uid_role: item.role.uid_role,
            nama_role: item.role.nama_role,
            kode_role: item.role.kode_role
        }));

        // Validasi Role
        if (roles.length === 0) {
            throw new AppError(
                "User belum memiliki role",
                HTTP_STATUS.FORBIDDEN
            );
        }

        // Ambil Kode Role
        const roleCodes =
            roles.map((role) => role.kode_role);

        // Profile
        let profile = null;

        if (roleCodes.includes("ATLET")) {

            profile = user.atlet_profile;

        }

        if (

            roleCodes.includes("PELATIH_TEKNIK") ||

            roleCodes.includes("PELATIH_FISIK")

        ) {

            profile = user.pelatih_profile;

        }

        // Generate JWT
        const token =
            generateToken({
                uid_user: user.uid_user,
                username: user.username,
                roles: roleCodes,
                uid_atlet: user.uid_atlet,
                uid_pelatih: user.uid_pelatih
            });

        // Response
        return {

            token,

            user: {

                uid_user: user.uid_user,

                username: user.username,

                roles,

                profile

            }

        };

    }

};

export default authService;