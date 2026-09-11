import { useState } from "react";

function CreateUserModal({
    selectedUser,
    onClose,
    onSubmit,
    loading
}) {
    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [roles, setRoles] =
        useState([]);

    if (!selectedUser) {
        return null;
    }

    const isAtlet =
        selectedUser.tipe === "Atlet";

    const handleRoleChange =
        (roleCode) => {

            setRoles((prev) => {

                if (
                    prev.includes(
                        roleCode
                    )
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

    const handleSubmit = (e) => {
        e.preventDefault();

        let payload;

        if (isAtlet) {
            payload = {
                username,
                password,
                uid_atlet:
                    selectedUser
                        .uid_profile,
                roles: [
                    "ATLET"
                ]
            };
        } else {
            payload = {
                username,
                password,
                uid_pelatih:
                    selectedUser
                        .uid_profile,
                roles
            };
        }

        onSubmit(payload);
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
                justifyContent:
                    "center",
                zIndex: 1000
            }}
        >
            <div
                style={{
                    background: "#fff",
                    padding: "24px",
                    borderRadius: "12px",
                    width: "420px"
                }}
            >
                <h2>
                    Buat Akun
                </h2>

                <form
                    onSubmit={
                        handleSubmit
                    }
                >
                    <div>
                        <label>
                            Nama
                        </label>

                        <input
                            type="text"
                            value={
                                selectedUser
                                    .nama
                            }
                            disabled
                            style={{
                                width: "100%"
                            }}
                        />
                    </div>

                    <br />

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
                            style={{
                                width: "100%"
                            }}
                        />
                    </div>

                    <br />

                    <div>
                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) =>
                                setUsername(
                                    e.target
                                        .value
                                )
                            }
                            required
                            style={{
                                width: "100%"
                            }}
                        />
                    </div>

                    <br />

                    <div>
                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target
                                        .value
                                )
                            }
                            required
                            style={{
                                width: "100%"
                            }}
                        />
                    </div>

                    <br />

                    {isAtlet ? (
                        <div>
                            Role:
                            <strong>
                                {" "}
                                Atlet
                            </strong>
                        </div>
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

                    <br />

                    <div
                        style={{
                            display: "flex",
                            justifyContent:
                                "flex-end",
                            gap: "10px"
                        }}
                    >
                        <button
                            type="button"
                            onClick={
                                onClose
                            }
                            disabled={
                                loading
                            }
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={
                                loading
                            }
                        >
                            {
                                loading
                                    ? "Menyimpan..."
                                    : "Buat Akun"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateUserModal;