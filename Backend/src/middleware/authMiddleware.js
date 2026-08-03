import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;



    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Token tidak ditemukan"
        });
    }

    if (!authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Format token salah"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("DECODED :", decoded);

        req.user = decoded;

        next();

    } catch (err) {

        return res.status(401).json({
            success: false,
            message: "Token tidak valid"
        });

    }

};

export default authMiddleware;