import {
    createContext,
    useEffect,
    useState
} from "react";

import {
    loginApi
} from "../api/authApi.js";

import {
    getMyAccessApi
} from "../api/accessApi.js";


export const AuthContext =
    createContext(null);


export const AuthProvider = ({
    children
}) => {

    const [user, setUser] =
        useState(null);

    const [roles, setRoles] =
        useState([]);

    const [menus, setMenus] =
        useState([]);

    const [
        permissions,
        setPermissions
    ] = useState([]);

    const [loading, setLoading] =
        useState(true);


    // =========================
    // LOAD ACCESS
    // =========================

    const loadAccess =
        async (token) => {

            const result =
                await getMyAccessApi(
                    token
                );

            console.log(
                "LOAD ACCESS RESULT =",
                result
            );

            console.log(
                "USER ACCESS =",
                result.data.user
            );


            setUser(
                result.data.user
            );

            setRoles(
                result.data.roles || []
            );

            setMenus(
                result.data.menus || []
            );

            setPermissions(
                result.data.permissions ||
                []
            );

        };


    // =========================
    // LOGIN
    // =========================

    const login =
        async (
            username,
            password
        ) => {

            const result =
                await loginApi(
                    username,
                    password
                );

            const token =
                result.data.token;

            localStorage.setItem(
                "pb_jaya_raya_token",
                token
            );

            await loadAccess(token);

            return result;
        };


    // =========================
    // LOGOUT
    // =========================

    const logout = () => {

        localStorage.removeItem(
            "pb_jaya_raya_token"
        );

        setUser(null);
        setRoles([]);
        setMenus([]);
        setPermissions([]);
    };


    // =========================
    // CHECK PERMISSION
    // =========================

    const hasPermission =
        (permissionCode) => {

            return permissions.some(
                (permission) =>
                    permission
                        .kode_permission ===
                    permissionCode
            );
        };


    // =========================
    // DISPLAY NAME
    // =========================

    const roleCodes =
        roles.map(
            (role) => role.kode_role
        );

    let displayName =
        user?.username || "-";

    if (
        user?.atlet_profile?.nama_lengkap
    ) {
        displayName =
            user.atlet_profile.nama_lengkap;
    }
    else if (
        user?.pelatih_profile?.nama_lengkap
    ) {
        displayName =
            user.pelatih_profile.nama_lengkap;
    }
    else if (
        roleCodes.includes("SUPERADMIN")
    ) {
        displayName =
            "Super Admin";
    }
    else if (
        roleCodes.includes("ADMIN")
    ) {
        displayName =
            "Admin PB Jaya Raya";
    }
    // =========================
    // INITIALIZE AUTH
    // =========================

    useEffect(() => {

        const initializeAuth =
            async () => {

                const token =
                    localStorage.getItem(
                        "pb_jaya_raya_token"
                    );

                if (!token) {
                    setLoading(false);
                    return;
                }

                try {

                    await loadAccess(
                        token
                    );

                } catch (error) {

                    console.error(
                        "Auth gagal:",
                        error
                    );

                    localStorage
                        .removeItem(
                            "pb_jaya_raya_token"
                        );

                    setUser(null);
                    setRoles([]);
                    setMenus([]);
                    setPermissions([]);

                } finally {

                    setLoading(false);

                }

            };

        initializeAuth();

    }, []);


    return (

        <AuthContext.Provider
            value={{
                user,
                roles,
                menus,
                permissions,
                loading,
                displayName,
                login,
                logout,
                hasPermission,
            }}
        >

            {children}

        </AuthContext.Provider>

    );
};