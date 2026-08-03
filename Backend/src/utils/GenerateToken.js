import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign(
        {
            uid_user: user.uid_user,
            role: user.role,
            uid_atlet: user.uid_atlet,
            uid_pelatih: user.uid_pelatih
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );
};

export default generateToken;