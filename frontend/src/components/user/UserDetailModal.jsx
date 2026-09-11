function UserDetailModal({
    selectedUser,
    onClose,
    onEdit,
    onDelete,
    onReactivate,
    onHardDelete,
    canHardDelete,
    deleteLoading,
    reactivateLoading,
    hardDeleteLoading
}) {

    if (!selectedUser) {
        return null;
    }

    const account =
        selectedUser.account;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background:
                    "rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000
            }}
        >
            <div
                style={{
                    background: "#fff",
                    width: "460px",
                    borderRadius: "12px",
                    padding: "24px"
                }}
            >
                <h2>
                    Detail Akun
                </h2>

                <div>
                    <strong>Nama</strong>

                    <p>
                        {selectedUser.nama}
                    </p>
                </div>

                <div>
                    <strong>UID</strong>

                    <p>
                        {selectedUser.uid_profile}
                    </p>
                </div>

                <div>
                    <strong>Tipe</strong>

                    <p>
                        {selectedUser.tipe}
                    </p>
                </div>

                <div>
                    <strong>NIK</strong>

                    <p>
                        {selectedUser.nik || "-"}
                    </p>
                </div>

                <div>
                    <strong>Username</strong>

                    <p>
                        {account?.username || "-"}
                    </p>
                </div>

                <div>
                    <strong>Status Akun</strong>

                    <p>
                        {selectedUser.status_akun}
                    </p>
                </div>

                {selectedUser.tipe === "Pelatih" && (
                    <div>
                        <strong>Role Pelatih</strong>

                        <p>
                            {
                                account?.roles?.length
                                    ? account.roles
                                        .map(
                                            (role) =>
                                                role.nama_role
                                        )
                                        .join(", ")
                                    : "-"
                            }
                        </p>
                    </div>
                )}

                <div
                    style={{
                        marginTop: "24px",
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "10px"
                    }}
                >
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={deleteLoading}
                    >
                        Tutup
                    </button>

                    <button
                        type="button"
                        onClick={() => 
                            onEdit(selectedUser)
                        }
                    >
                        Edit Akun
                    </button>
                            {
                                selectedUser.status_akun === "AKTIF" && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onDelete(
                                                selectedUser
                                                    .account
                                                    .uid_user
                                            )
                                        }
                                        disabled={deleteLoading}
                                    >
                                        {
                                            deleteLoading
                                                ? "Memproses..."
                                                : "Nonaktifkan"
                                        }
                                    </button>
                                )
                            }

                            {
                                selectedUser.status_akun === "NONAKTIF" && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onReactivate(
                                                selectedUser
                                                    .account
                                                    .uid_user
                                            )
                                        }
                                        disabled={
                                            reactivateLoading
                                        }
                                    >
                                        {
                                            reactivateLoading
                                                ? "Memproses..."
                                                : "Aktifkan Kembali"
                                        }
                                    </button>
                                )
                            }

                            {
    selectedUser.status_akun === "NONAKTIF" &&
    canHardDelete && (
        <button
            type="button"
            onClick={() =>
                onHardDelete(
                    selectedUser
                        .account
                        .uid_user
                )
            }
            disabled={
                hardDeleteLoading
            }
        >
            {
                hardDeleteLoading
                    ? "Menghapus..."
                    : "Hapus Permanen"
            }
        </button>
    )
}


                </div>
            </div>
        </div>
    );
}

export default UserDetailModal;