import provinsiService from "./provinsi.service.js";

const provinsiController = {

    // =====================================
    // GET ALL
    // =====================================
    getAllProvinsi: async (req, res) => {

        try {

            const provinsi = await provinsiService.getAllProvinsi();

            return res.status(200).json({
                success: true,
                data: provinsi
            });

        } catch (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

    },

    // =====================================
    // GET BY ID
    // =====================================
    getProvinsiById: async (req, res) => {

        try {

            const provinsi = await provinsiService.getProvinsiById(
                req.params.id
            );

            return res.status(200).json({
                success: true,
                data: provinsi
            });

        } catch (err) {

            if (err.message === "Provinsi tidak ditemukan.") {

                return res.status(404).json({
                    success: false,
                    message: err.message
                });

            }

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

    },

    // =====================================
    // CREATE
    // =====================================
    createProvinsi: async (req, res) => {

        try {

            const provinsi = await provinsiService.createProvinsi(
                req.body,
                req.user
            );

            return res.status(201).json({
                success: true,
                message: "Provinsi berhasil ditambahkan.",
                data: provinsi
            });

        } catch (err) {

            if (err.message === "Nama provinsi sudah digunakan.") {

                return res.status(400).json({
                    success: false,
                    message: err.message
                });

            }

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

    },

    // =====================================
    // UPDATE
    // =====================================
    updateProvinsi: async (req, res) => {

        try {

            await provinsiService.updateProvinsi(

                req.params.id,

                req.body,

                req.user

            );

            return res.status(200).json({

                success: true,

                message: "Provinsi berhasil diperbarui."

            });

        } catch (err) {

            if (err.message === "Provinsi tidak ditemukan.") {

                return res.status(404).json({
                    success: false,
                    message: err.message
                });

            }

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

    },

    // =====================================
    // DELETE
    // =====================================
    deleteProvinsi: async (req, res) => {

        try {

            await provinsiService.deleteProvinsi(

                req.params.id,

                req.user

            );

            return res.status(200).json({

                success: true,

                message: "Provinsi berhasil dihapus."

            });

        } catch (err) {

            if (err.message === "Provinsi tidak ditemukan.") {

                return res.status(404).json({
                    success: false,
                    message: err.message
                });

            }

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

    }

};

export default provinsiController;