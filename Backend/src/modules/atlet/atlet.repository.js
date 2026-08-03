import { prisma } from "../../config/db.js";

const atletRepository = {
  // ======================================
  // GET ALL
  // ======================================
  findAll: async () => {
    return await prisma.mAtlet.findMany({
      where: {
        deleted_at: null,
      },

      include: {
        provinsi: true,
        user_akun: true,
      },
    });
  },

  // ======================================
  // GET BY ID
  // ======================================
  findById: async (uid_atlet) => {
    return await prisma.mAtlet.findUnique({
      where: {
        uid_atlet,
      },

      include: {
        provinsi: true,
        user_akun: true,
      },
    });
  },

  //Find By NIK
  findByNik: async (nik) => {
    return await prisma.mAtlet.findFirst({
      where: {
        nik,
        deleted_at: null,
      },
    });
  },

  // ======================================
  // CREATE
  // ======================================
  create: async (data) => {
    return await prisma.mAtlet.create({
      data
    });
  },

  // ======================================
  // UPDATE
  // ======================================
  update: async (uid_atlet, data) => {
    return await prisma.mAtlet.update({
      where: {
        uid_atlet,
      },

      data,
    });
  },

  // ======================================
  // SOFT DELETE
  // ======================================
  softDelete: async (uid_atlet, actorUid) => {
    return await prisma.$transaction([
      prisma.mAtlet.update({
        where: {
          uid_atlet,
        },

        data: {
          deleted_at: new Date(),

          deleted_by_uid: actorUid,
        },
      }),

      prisma.mUser.updateMany({
        where: {
          uid_atlet,
        },

        data: {
          deleted_at: new Date(),

          deleted_by_uid: actorUid,
        },
      }),
    ]);
  },
};

export default atletRepository;