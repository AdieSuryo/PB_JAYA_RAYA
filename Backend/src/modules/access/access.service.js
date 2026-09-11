import accessRepository from "./access.repository.js";
import AppError from "../../errors/AppError.js";
import HTTP_STATUS from "../../constants/httpStatus.js";

const accessService = {


    // GET MY ACCESS

    getMyAccess: async (uidUser) => {

    
        // Ambil User + Role + Menu
    
        const user =
            await accessRepository.getUserAccess(uidUser);

        if (!user) {

            throw new AppError(
                "User tidak ditemukan",
                HTTP_STATUS.NOT_FOUND
            );

        }

    
        // Validasi Role
    
        if (!user.user_roles || user.user_roles.length === 0) {

            throw new AppError(
                "User belum memiliki role",
                HTTP_STATUS.FORBIDDEN
            );

        }

    
        // Siapkan Data
    
        const roles = [];

        const menuMap =
            new Map();

        const permissionMap =
            new Map();

    
        // Loop Role User
    
        for (const userRole of user.user_roles) {

            const role =
                userRole.role;

        
            // Tambah Role
        
            roles.push({

                uid_role:
                    role.uid_role,

                nama_role:
                    role.nama_role,

                kode_role:
                    role.kode_role

            });

        
            // Ambil Menu Dari Role
        
            for (const roleMenu of role.role_menus) {

                const menu =
                    roleMenu.menu;

                // Abaikan menu nonaktif
                if (!menu.status_aktif) {

                    continue;

                }

                // Hindari menu duplicate
                if (!menuMap.has(menu.uid_menu)) {

                    menuMap.set(
                        menu.uid_menu,
                        {

                            uid_menu:
                                menu.uid_menu,

                            nama_menu:
                                menu.nama_menu,

                            kode_menu:
                                menu.kode_menu,

                            route:
                                menu.route,

                            icon:
                                menu.icon,

                            uid_parent:
                                menu.uid_parent,

                            urutan:
                                menu.urutan ?? 0

                        }
                    );

                }

            }

        
            // Ambil Permission Dari Role
        
            for (
                const rolePermission
                of role.role_permissions
            ) {

                const permission =
                    rolePermission.permission;

                // Hindari duplicate permission
                if (
                    !permissionMap.has(
                        permission.uid_permission
                    )
                ) {

                    permissionMap.set(
                        permission.uid_permission,
                        {

                            uid_permission:
                                permission.uid_permission,

                            kode_permission:
                                permission.kode_permission,

                            nama_permission:
                                permission.nama_permission,

                            action:
                                permission.action,

                            uid_menu:
                                permission.uid_menu

                        }
                    );

                }

            }

        }

    
        // Convert Map Ke Array
    
        const flatMenus =
            Array.from(menuMap.values());

        const permissions =
            Array.from(permissionMap.values());

    
        // Buat Menu Hierarchy
    
        const hierarchyMap =
            new Map();

        for (const menu of flatMenus) {

            hierarchyMap.set(
                menu.uid_menu,
                {

                    ...menu,

                    children: []

                }
            );

        }

    
        // Susun Parent - Child
    
        const menus = [];

        for (
            const menu
            of hierarchyMap.values()
        ) {

            if (

                menu.uid_parent &&

                hierarchyMap.has(
                    menu.uid_parent
                )

            ) {

                hierarchyMap
                    .get(menu.uid_parent)
                    .children
                    .push(menu);

            } else {

                menus.push(menu);

            }

        }

    
        // Sort Menu
    
        const sortMenus = (menuList) => {

            menuList.sort(
                (a, b) =>
                    (a.urutan ?? 0) -
                    (b.urutan ?? 0)
            );

            for (const menu of menuList) {

                if (
                    menu.children &&
                    menu.children.length > 0
                ) {

                    sortMenus(
                        menu.children
                    );

                }

            }

        };

        sortMenus(menus);

        // Response
        return {

            user: {

                uid_user:
                    user.uid_user,

                username:
                    user.username,

                atlet_profile: 
                    user.atlet_profile,

                pelatih_profile:
                    user.pelatih_profile

            },

            roles,

            menus,

            permissions

        };

    }

};

export default accessService;