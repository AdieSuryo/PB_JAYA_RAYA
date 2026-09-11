function CoachDetailModal({
    coach,
    onClose
}) {

    if (!coach) {
        return null;
    }

    const formatBoolean = (value) => {
        return value
            ? "Ya"
            : "Tidak";
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor:
                    "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999
            }}
        >

            <div
                style={{
                    width: "650px",
                    maxHeight: "85vh",
                    overflowY: "auto",
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "12px"
                }}
            >

                <h2>
                    Detail Pelatih
                </h2>

                <hr />


                {/* FOTO */}
                {coach.foto && (
                    <div
                        style={{
                            marginTop: "16px",
                            marginBottom: "20px"
                        }}
                    >

                        <img
                            src={coach.foto}
                            alt={coach.nama_lengkap}
                            style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                borderRadius: "8px"
                            }}
                        />

                    </div>
                )}


                {/* DATA UTAMA */}
                <div>

                    <h3>
                        Data Utama
                    </h3>

                    <p>
                        <strong>
                            UID Pelatih:
                        </strong>{" "}
                        {coach.uid_pelatih}
                    </p>

                    <p>
                        <strong>
                            NIK:
                        </strong>{" "}
                        {coach.nik || "-"}
                    </p>

                    <p>
                        <strong>
                            Nama Lengkap:
                        </strong>{" "}
                        {coach.nama_lengkap || "-"}
                    </p>

                    <p>
                        <strong>
                            Jenis Kelamin:
                        </strong>{" "}
                        {coach.jenis_kelamin || "-"}
                    </p>

                    <p>
                        <strong>
                            Tanggal Lahir:
                        </strong>{" "}
                        {
                            coach.tanggal_lahir
                                ? new Date(
                                    coach.tanggal_lahir
                                ).toLocaleDateString(
                                    "id-ID"
                                )
                                : "-"
                        }
                    </p>

                    <p>
                        <strong>
                            Tahun Bergabung:
                        </strong>{" "}
                        {
                            coach.tahun_bergabung ??
                            "-"
                        }
                    </p>

                </div>


                <hr />


                {/* RIWAYAT MELATIH */}
                <div>

                    <h3>
                        Riwayat Melatih
                    </h3>

                    <p>
                        <strong>
                            Pernah Melatih Sebelumnya:
                        </strong>{" "}
                        {
                            formatBoolean(
                                coach.pernah_melatih_sebelumnya
                            )
                        }
                    </p>

                    <p>
                        <strong>
                            Klub / Negara Sebelumnya:
                        </strong>{" "}
                        {
                            coach.klub_negara_sebelumnya ||
                            "-"
                        }
                    </p>

                </div>


                <hr />


                {/* RIWAYAT ATLET */}
                <div>

                    <h3>
                        Riwayat Sebagai Atlet
                    </h3>

                    <p>
                        <strong>
                            Mantan Atlet Nasional:
                        </strong>{" "}
                        {
                            formatBoolean(
                                coach.mantan_atlet_nasional
                            )
                        }
                    </p>

                    <p>
                        <strong>
                            Asal Klub Nasional:
                        </strong>{" "}
                        {
                            coach.asal_klub_nasional ||
                            "-"
                        }
                    </p>

                </div>


                <hr />


                {/* RIWAYAT PELATNAS */}
                <div>

                    <h3>
                        Riwayat Pelatnas
                    </h3>

                    <p>
                        <strong>
                            Mantan Pelatnas:
                        </strong>{" "}
                        {
                            formatBoolean(
                                coach.mantan_pelatnas
                            )
                        }
                    </p>

                    <p>
                        <strong>
                            Tahun Pelatnas:
                        </strong>{" "}
                        {
                            coach.tahun_pelatnas ??
                            "-"
                        }
                    </p>

                </div>


                {/* BUTTON */}
                <div
                    style={{
                        marginTop: "24px",
                        display: "flex",
                        justifyContent: "flex-end"
                    }}
                >

                    <button
                        type="button"
                        onClick={onClose}
                    >
                        Tutup
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CoachDetailModal;