import jenisPelatihRepository from './jenisPelatih.repository.js';
import { generateUID } from '../../../utils/generateUID.js';
import AppError from '../../../errors/AppError.js';
import HTTP_STATUS from '../../../constants/httpStatus.js';

const jenisPelatihService = {

    // Get All
    getAllJenisPelatih: async () => {

        return await jenisPelatihRepository.findAll();

    },

    // Get By ID
    getJenisPelatihById: async (uid_jenis_pelatih) => {

        const jenisPelatih = 
            await jenisPelatihRepository.findById(
                uid_jenis_pelatih
            );

        if (
            !jenisPelatih || jenisPelatih.deleted_at !== null
        ) {
            throw new AppError(

                "Jenis Pelatih tidak ditemukan,",

                HTTP_STATUS.NOT_FOUND
            );
        }

        return jenisPelatih;
    },

    // Create
    createJenisPelatih: async (body, actor) => {

        const exist =
            await jenisPelatihRepository.findByName(
                body.nama_jenis_pelatih
            );
        
        if (exist) {
            throw new AppError(

                "Nama Jenis Pelatih sudah terdaftar.",

                HTTP_STATUS.CONFLICT
            );
        }

        const uid_jenis_pelatih = await genereateUID(

            "mJenisPelatih",
            "uid_jenis_pelatih",
            "JPL"
        );

        return await jenisPelatihRepository.create({

            uid_jenis_pelatih,
            nama_jenis_pelatih: body.nama_jenis_pelatih,
            created_by_uid: actor.uid_user,
            updated_by_uid: actor.uid_user
        });
    },

    // Update
    updateJenisPelatih: async (
        uid_jenis_pelatih,
        body,
        actor
    ) => {

        const jenisPelatih = 
            await jenisPelatihRepository.findById(
                uid_jenis_pelatih
            );

        if (
            !jenisPelatih || jenisPelatih.deleted_at !== null
        ) {
            throw new AppError(

                "Jenis Pelatih tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND

            );
        }

        if (body.nama_jenis_pelatih) {
            const exist =
                await jenisPelatihRepository.findByName(
                    body.nama_jenis_pelatih
                );
        
            if (
                exist &&
                exist.uid_jenis_pelatih !== 
                uid_jenis_pelatih
            ) {

                throw new AppError(

                    "Jenis Pelatih sudah terdaftar",

                    HTTP_STATUS.CONFLICT
                )
            }
        }

        return await jenisPelatihRepository.update(

            uid_jenis_pelatih,

            {
                ...body,
                updated_by_uid: actor.uid_user
            }
        );
    },

    // Delete
    deleteJenisPelatih: async (uid_jenis_pelatih, actor) => {

        const jenisPelatih =
            await jenisPelatihRepository.findById(
                uid_jenis_pelatih
            );

        if (
            !jenisPelatih ||
            jenisPelatih.deleted_at !== null
        ) {

            throw new AppError(
                "Jenis Pelatih tidak ditemukan.",
                HTTP_STATUS.NOT_FOUND
,            );
        }

        return await jenisPelatihRepository.softDelete(
            uid_jenis_pelatih,

            actor.uid_user
        );
    }

};

export default jenisPelatihService;