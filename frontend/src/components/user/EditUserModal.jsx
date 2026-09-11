import { useState } from "react";

function EditUserModal({
    selectedUser,
    onClose,
    onSubmit,
    loading
}) {

    if (!selectedUser) {
        return null;
    }

    const account =
        selectedUser.account;

    const isAtlet =
        selectedUser.tipe === "Atlet";

    const [username, setUsername] =
        useState(
            account?.username || ""
        );

    const [password, setPassword] =
        useState("");

    const [roles, setRoles] =
        useState(
            account?.roles?.map(
                (role) =>
                    role.kode_role
            ) || []
        );


    const handleRoleChange =
        (roleCode) => {

            setRoles((prev) => {

                if (
                    prev.includes(roleCode)
                ) {
                    return prev.filter(
                        (role) =>
                            role !==
                            roleCode
                    );
                }

                return [
                    ...prev,
                    roleCode
                ];
            });
        };


    const handleSubmit =
        (e) => {

            e.preventDefault();

            const payload = {
                username,
            };

            // Password hanya dikirim
            // kalau user mengisi
            if (
                password.trim() !== ""
            ) {
                payload.password =
                    password;
            }

            if (isAtlet) {

                payload.roles = [
                    "ATLET"
                ];

            } else {

                payload.roles =
                    roles;
            }

            onSubmit(
                account.uid_user,
                payload
            );
        };


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
                    width: "450px",
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "24px"
                }}
            >

                <h2>
                    Edit Akun
                </h2>


                <div>
                    <label>
                        Nama
                    </label>

                    <input
                        type="text"
                        value={
                            selectedUser.nama
                        }
                        disabled
                    />
                </div>


                <div>
                    <label>
                        UID
                    </label>

                    <input
                        type="text"
                        value={
                            selectedUser
                                .uid_profile
                        }
                        disabled
                    />
                </div>


                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    <div>
                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) =>
                                setUsername(
                                    e.target.value
                                )
                            }
                            required
                        />
                    </div>


                    <div>
                        <label>
                            Password Baru
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            placeholder=
                                "Kosongkan jika tidak diubah"
                        />
                    </div>


                    {isAtlet ? (

                        <p>
                            Role:
                            {" "}
                            <strong>
                                Atlet
                            </strong>
                        </p>

                    ) : (

                        <div>

                            <p>
                                Role Pelatih
                            </p>

                            <label>
                                <input
                                    type="checkbox"
                                    checked={
                                        roles.includes(
                                            "PELATIH_TEKNIK"
                                        )
                                    }
                                    onChange={() =>
                                        handleRoleChange(
                                            "PELATIH_TEKNIK"
                                        )
                                    }
                                />

                                {" "}
                                Pelatih Teknik
                            </label>

                            <br />

                            <label>
                                <input
                                    type="checkbox"
                                    checked={
                                        roles.includes(
                                            "PELATIH_FISIK"
                                        )
                                    }
                                    onChange={() =>
                                        handleRoleChange(
                                            "PELATIH_FISIK"
                                        )
                                    }
                                />

                                {" "}
                                Pelatih Fisik
                            </label>

                        </div>

                    )}


                    <div
                        style={{
                            marginTop: "24px",
                            display: "flex",
                            justifyContent:
                                "flex-end",
                            gap: "10px"
                        }}
                    >

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {
                                loading
                                    ? "Menyimpan..."
                                    : "Simpan"
                            }
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}

export default EditUserModal;