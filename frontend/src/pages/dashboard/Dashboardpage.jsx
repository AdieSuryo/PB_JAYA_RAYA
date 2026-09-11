import { useAuth }
    from "../../context/useAuth.jsx";


function DashboardPage() {

    const {
        user,
        roles
    } = useAuth();

    const getDisplayName = () => {

        if (user?.atlet_profile?.nama_lengkap) {
            return user.atlet_profile.nama_lengkap;
        }

        if (user?.pelatih_profile?.nama_lengkap) {
            return user.pelatih_profile.nama_lengkap;
        }

        if (
            roles.some(
                (role) =>
                    role.kode_role === "SUPERADMIN"
            )
        ) {
            return "Super Admin";
        }

        if (
            roles.some(
                (role) =>
                    role.kode_role === "ADMIN"
            )
        ) {
            return "Admin PB Jaya Raya";
        }

        return user?.username || "-";
    };

    const displayName =
        getDisplayName();

    return (

        <div>

            <h1>
                Dashboard
            </h1>


            <p>
                Selamat datang,{" "}
                <strong>
                    {displayName}
                </strong>
            </p>


            <p>
                Role:{" "}
                {
                    roles
                        .map(
                            (role) =>
                                role.nama_role
                        )
                        .join(", ")
                }
            </p>

        </div>

    );
}

export default DashboardPage;