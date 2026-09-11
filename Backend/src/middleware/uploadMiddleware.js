import multer from "multer";

const storage =
    multer.memoryStorage();

const upload = multer({
    storage,

    limits: {
        fileSize:
            5 * 1024 * 1024,
    },

    fileFilter: (
        req,
        foto_atlet,
        cb
    ) => {

        const allowedMimeTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
        ];

        if (
            !allowedMimeTypes.includes(
                foto_atlet.mimetype
            )
        ) {
            return cb(
                new Error(
                    "Format foto harus JPG, PNG, atau WEBP"
                )
            );
        }

        cb(null, true);
    },
});

export default upload;