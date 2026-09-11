import { useEffect, useState } from "react";

import { getUserManagementApi, createUserApi } from "../../api/userApi.js";
import CreateUserModal from "../../components/user/CreateUserModal.jsx";

import UserDetailModal from "../../components/user/UserDetailModal.jsx";
import EditUserModal from "../../components/user/EditUserModal.jsx";
import { updateUserApi } from "../../api/userApi.js";
import { deleteUserApi } from "../../api/userApi.js";
import { useAuth } from "../../context/useAuth.jsx";
import { reactiveUserApi } from "../../api/userApi.js";
import { hardDeleteUserApi } from "../../api/userApi.js";


function UserPage() {

    const [
        managementData,
        setManagementData
    ] = useState({
        summary: {
            atlet: {
                total: 0,
                punya_akun: 0,
                belum_akun: 0
            },

            pelatih: {
                total: 0,
                punya_akun: 0,
                belum_akun: 0
            }
        },

        users: []
    });

    const {
        hasPermission
    } = useAuth();


    const [
        loading,
        setLoading
    ] = useState(true);

    const [
        error,
        setError
    ] = useState("");

    const [
        activeTab,
        setActiveTab
    ] = useState("semua");

    const [
        search,
        setSearch
    ] = useState("");

    const [
        tipe,
        setTipe
    ] = useState("semua");

    const [
        selectedUser,
        setSelectedUser
    ] = useState(null);

    const [
        createLoading,
        setCreateLoading
    ] = useState(false);

    const [
        detailUser,
        setDetailUser
    ] = useState(null);

    const [
        editUser,
        setEditUser
    ] = useState(null);

    const [
        updateLoading,
        setUpdateLoading
    ] = useState(false);

    const [
        deleteLoading,
        setDeleteLoading
    ] = useState(false);

    const [
        reactivateLoading,
        setReactivateLoading
    ] = useState(false);

    const [
        hardDeleteLoading,
        setHardDeleteLoading
    ] = useState(false);


    // =========================
    // LOAD DATA
    // =========================

        const loadManagementData =
            async () => {

                try {

                    setLoading(true);
                    setError("");

                    const token =
                        localStorage.getItem(
                            "pb_jaya_raya_token"
                        );

                    const result =
                        await getUserManagementApi(
                            token
                        );

                    setManagementData(
                        result.data
                    );

                } catch (err) {

                    setError(
                        err.message
                    );

                } finally {

                    setLoading(false);

                }

            };

        useEffect(() => {
            loadManagementData();
        }, []);

    // Create User
    const handleCreateUser =
        async (payload) => {

            try {

                setCreateLoading(true);

                const token = localStorage.getItem(
                    "pb_jaya_raya_token"
                );

                const result =

                    await createUserApi(
                        token,
                        payload
                    );
                
                    alert(
                        result.message
                    );

                setSelectedUser(null);

                // Refresh data setelah akun dibuat
                await loadManagementData();
            } catch (err) {

                alert(
                    err.message
                );
            } finally {
                setCreateLoading(false);
            }
        };

    // Helper Update
    const handleUpdateUser =
        async (
            uidUser,
            payload
        ) => {
            
            try {
                
                setUpdateLoading(true);

                const token = 
                    localStorage.getItem(
                        "pb_jaya_raya_token"
                    );

                const result =
                    await updateUserApi(
                        token,
                        uidUser,
                        payload
                    );

                alert(
                    result.message
                );

                setEditUser(null);
                setDetailUser(null);

                await loadManagementData();

            } catch (err) {

                alert(
                    err.message
                );

            } finally {

                setUpdateLoading(false);
            }
        };

    // Helper Delete
    const handleDeleteUser = 
        async (uidUser) => {
            const confirmed = 
                window.confirm(
                    "Yakin ingin menonaktifkan akun ini?"
                );

            if (!confirmed) {
                return;
            }

            try {

                setDeleteLoading(true);

                const token = 
                    localStorage.getItem(
                        "pb_jaya_raya_token"
                    );

                const result =
                    await deleteUserApi(
                        token,
                        uidUser
                    );

                alert(
                    result.message
                );

                setDetailUser(null);

                await loadManagementData();

            } catch (err) {
                alert(
                    err.message
                );
            } finally {

                setDeleteLoading(false);
            }
        };

    const handleReactivateUser =
    async (uidUser) => {

        const confirmed =
            window.confirm(
                "Yakin ingin mengaktifkan kembali akun ini?"
            );

        if (!confirmed) {
            return;
        }

        try {

            setReactivateLoading(true);

            const token =
                localStorage.getItem(
                    "pb_jaya_raya_token"
                );

            const result =
                await reactiveUserApi(
                    token,
                    uidUser
                );

            alert(
                result.message
            );

            setDetailUser(null);

            await loadManagementData();

        } catch (err) {

            alert(
                err.message
            );

        } finally {

            setReactivateLoading(false);

        }

    };

    
    const handleHardDeleteUser =
    async (uidUser) => {

        const confirmed =
            window.confirm(
                "Hapus akun ini secara permanen? Data yang sudah dihapus tidak dapat dikembalikan."
            );

        if (!confirmed) {
            return;
        }

        try {

            setHardDeleteLoading(true);

            const token =
                localStorage.getItem(
                    "pb_jaya_raya_token"
                );

            const result =
                await hardDeleteUserApi(
                    token,
                    uidUser
                );

            alert(
                result.message
            );

            setDetailUser(null);

            await loadManagementData();

        } catch (err) {

            alert(
                err.message
            );

        } finally {

            setHardDeleteLoading(false);

        }
    };

    // =========================
    // FILTER DATA
    // =========================

    const filteredUsers =
        managementData.users.filter(
            (item) => {

                const matchTab =
                    activeTab === "semua"
                        ? true
                        : activeTab === "punya"
                        ? item.punya_akun
                        : !item.punya_akun;


                const matchTipe =
                    tipe === "semua"
                        ? true
                        : item.tipe === tipe;


                const keyword =
                    search
                        .trim()
                        .toLowerCase();


                const matchSearch =
                    !keyword ||
                    item.nama
                        ?.toLowerCase()
                        .includes(keyword) ||
                    item.uid_profile
                        ?.toLowerCase()
                        .includes(keyword) ||
                    item.nik
                        ?.toLowerCase()
                        .includes(keyword);


                return (
                    matchTab &&
                    matchTipe &&
                    matchSearch
                );

            }
        );


    if (loading) {

        return (
            <div>
                Memuat data...
            </div>
        );

    }


    if (error) {

        return (
            <div>
                {error}
            </div>
        );

    }


    const {
        summary
    } = managementData;


    return (

        <div>

            <div
                style={{
                    marginBottom: "24px"
                }}
            >

                <h1>
                    Manajemen User
                </h1>

                <p>
                    Kelola akun Atlet dan
                    Pelatih PB Jaya Raya
                </p>

            </div>


            {/* =========================
                SUMMARY
            ========================= */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(2, minmax(0, 1fr))",
                    gap: "20px",
                    marginBottom: "28px"
                }}
            >

                <div
                    style={{
                        border:
                            "1px solid #ddd",
                        borderRadius: "12px",
                        padding: "20px"
                    }}
                >

                    <h3>
                        Atlet
                    </h3>

                    <p>
                        Total Atlet:{" "}
                        {summary.atlet.total}
                    </p>

                    <p>
                        Punya Akun:{" "}
                        {
                            summary
                                .atlet
                                .punya_akun
                        }
                    </p>

                    <p>
                        Belum Akun:{" "}
                        {
                            summary
                                .atlet
                                .belum_akun
                        }
                    </p>

                </div>


                <div
                    style={{
                        border:
                            "1px solid #ddd",
                        borderRadius: "12px",
                        padding: "20px"
                    }}
                >

                    <h3>
                        Pelatih
                    </h3>

                    <p>
                        Total Pelatih:{" "}
                        {
                            summary
                                .pelatih
                                .total
                        }
                    </p>

                    <p>
                        Punya Akun:{" "}
                        {
                            summary
                                .pelatih
                                .punya_akun
                        }
                    </p>

                    <p>
                        Belum Akun:{" "}
                        {
                            summary
                                .pelatih
                                .belum_akun
                        }
                    </p>

                </div>

            </div>


            {/* =========================
                TAB
            ========================= */}

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "20px"
                }}
            >

                <button
                    onClick={() =>
                        setActiveTab(
                            "semua"
                        )
                    }
                >
                    Semua User
                </button>


                <button
                    onClick={() =>
                        setActiveTab(
                            "punya"
                        )
                    }
                >
                    Sudah Punya Akun
                </button>


                <button
                    onClick={() =>
                        setActiveTab(
                            "belum"
                        )
                    }
                >
                    Belum Punya Akun
                </button>

            </div>


            {/* =========================
                SEARCH & FILTER
            ========================= */}

            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    marginBottom: "20px"
                }}
            >

                <input
                    type="text"
                    placeholder=
                        "Cari nama / UID / NIK..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    style={{
                        flex: 1,
                        padding: "10px"
                    }}
                />


                <select
                    value={tipe}
                    onChange={(e) =>
                        setTipe(
                            e.target.value
                        )
                    }
                    style={{
                        padding: "10px"
                    }}
                >

                    <option value="semua">
                        Semua Tipe
                    </option>

                    <option value="Atlet">
                        Atlet
                    </option>

                    <option value="Pelatih">
                        Pelatih
                    </option>

                </select>

            </div>


            {/* =========================
                TABLE
            ========================= */}

            <div
                style={{
                    border:
                        "1px solid #ddd",
                    borderRadius: "12px",
                    overflow: "hidden"
                }}
            >

                <table
                    style={{
                        width: "100%",
                        borderCollapse:
                            "collapse"
                    }}
                >

                    <thead>

                        <tr
                            style={{
                                background:
                                    "#f5f5f5"
                            }}
                        >

                            <th style={thStyle}>
                                Nama
                            </th>

                            <th style={thStyle}>
                                Tipe
                            </th>

                            <th style={thStyle}>
                                UID
                            </th>

                            <th style={thStyle}>
                                Status Akun
                            </th>

                            <th style={thStyle}>
                                Aksi
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {
                            filteredUsers.length === 0
                                ? (

                                    <tr>

                                        <td
                                            colSpan="5"
                                            style={{
                                                padding:
                                                    "20px",
                                                textAlign:
                                                    "center"
                                            }}
                                        >
                                            Data tidak ditemukan
                                        </td>

                                    </tr>

                                )
                                : filteredUsers.map(
                                    (item) => (

                                        <tr
                                            key={
                                                item.uid_profile
                                            }
                                        >

                                            <td style={tdStyle}>
                                                {item.nama}
                                            </td>

                                            <td style={tdStyle}>
                                                {item.tipe}
                                            </td>

                                            <td style={tdStyle}>
                                                {item.uid_profile}
                                            </td>

                                            <td style={tdStyle}>
                                                {item.status_akun}
                                            </td>

                                            <td style={tdStyle}>

                                                {
                                                    !item.punya_akun
                                                        ? (
                                                            <button
                                                                onClick={() => 
                                                                    setSelectedUser(item)
                                                                }
                                                            >
                                                                Buat Akun
                                                            </button>
                                                        )
                                                        : (
                                                            <button
                                                                onClick={() =>
                                                                    setDetailUser(item)
                                                                }
                                                            >
                                                                Detail
                                                            </button>
                                                        )
                                                }

                                            </td>

                                        </tr>

                                    )
                                )
                        }

                    </tbody>

                </table>

            </div>

            <CreateUserModal
                selectedUser={selectedUser}
                onClose={() =>
                    setSelectedUser(null)
                }
                onSubmit={
                    handleCreateUser
                }
                loading={
                    createLoading
                }
            />

            <UserDetailModal
                selectedUser={detailUser}
                onClose={() =>
                    setDetailUser(null)
                }
                onEdit={(item) => {
                    setEditUser(item);
                    setDetailUser(null);
                }} 

                onDelete={handleDeleteUser}

                onHardDelete={handleHardDeleteUser}

                onReactivate={
                    handleReactivateUser
                }

                canHardDelete={
                    hasPermission(
                        "user.delete_permanent"
                    )
                }


                deleteLoading={deleteLoading}

                reactivateLoading={reactivateLoading}

                hardDeleteLoading={hardDeleteLoading}
            />

            <EditUserModal
                selectedUser={editUser}
                onClose={() =>
                    setEditUser(null)
                }

                onSubmit={handleUpdateUser}
                loading={updateLoading}
            />

        </div>

    );
}


const thStyle = {
    padding: "12px",
    textAlign: "left"
};


const tdStyle = {
    padding: "12px",
    borderTop:
        "1px solid #eee"
};


export default UserPage;