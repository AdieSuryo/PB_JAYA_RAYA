import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign(
        {
            uid_user: user.uid_user,
            username: user.username,
            roles: user.roles,
            uid_atlet: user.uid_atlet || null,
            uid_pelatih: user.uid_pelatih || null
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );
};

export default generateToken;