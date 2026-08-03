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

        // ===============================
        // Generate JWT
        // ===============================
        const token =
            generateToken(user);

        let profile = null;

        if (user.role === "Atlet") {

            profile = user.atlet_profile;

        }

        if (

            user.role === "pelatih_teknik" ||

            user.role === "pelatih_fisik"

        ) {

            profile = user.pelatih_profile;

        }

        return {

            token,

            user: {

                uid_user: user.uid_user,

                username: user.username,

                role: user.role,

                profile

            }

        };

    }

};

export default authService;