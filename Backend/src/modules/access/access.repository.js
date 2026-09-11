import { prisma } from "../../config/db.js";

const accessRepository = {
  getUserAccess: async (uidUser) => {
    return await prisma.mUser.findUnique({
      where: {
        uid_user: uidUser,
      },
      select: {
        uid_user: true,
        username: true,

        atlet_profile: {
          select: {
            uid_atlet: true,
            nama_lengkap: true,
          },
        },

        pelatih_profile: {
          select: {
            uid_pelatih: true,
            nama_lengkap: true,
          },
        },

        user_roles: {
          select: {
            role: {
              select: {
                uid_role: true,
                nama_role: true,
                kode_role: true,

                role_menus: {
                  select: {
                    menu: {
                      select: {
                        uid_menu: true,
                        nama_menu: true,
                        kode_menu: true,
                        route: true,
                        icon: true,
                        uid_parent: true,
                        urutan: true,
                        status_aktif: true,
                      },
                    },
                  },
                },

                role_permissions: {
                  select: {
                    permission: {
                      select: {
                        uid_permission: true,
                        kode_permission: true,
                        nama_permission: true,
                        action: true,
                        uid_menu: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  },
};

export default accessRepository;