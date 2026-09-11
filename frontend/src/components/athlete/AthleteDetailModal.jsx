function AthleteDetailModal({
    athlete,
    onClose
}) {

    if (!athlete) {
        return null;
    }

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
                    width: "600px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "12px"
                }}
            >

                <h2>
                    Detail Atlet
                </h2>

                <hr />

                {athlete.foto && (
                    <div
                        style={{
                            marginTop: "16px"
                        }}
                    >
                        <img
                            src={athlete.foto}
                            alt={
                                athlete.nama_lengkap
                            }
                            style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                borderRadius: "8px"
                            }}
                        />
                    </div>
                )}

                <div
                    style={{
                        marginTop: "20px"
                    }}
                >
                    <p>
                        <strong>
                            UID Atlet:
                        </strong>{" "}
                        {athlete.uid_atlet}
                    </p>

                    <p>
                        <strong>
                            Nama Lengkap:
                        </strong>{" "}
                        {athlete.nama_lengkap}
                    </p>

                    <p>
                        <strong>
                            NIK:
                        </strong>{" "}
                        {athlete.nik}
                    </p>

                    <p>
                        <strong>
                            ID PBSI:
                        </strong>{" "}
                        {athlete.id_pbsi || "-"}
                    </p>

                    <p>
                        <strong>
                            Tempat Lahir:
                        </strong>{" "}
                        {athlete.tempat_lahir || "-"}
                    </p>

                    <p>
                        <strong>
                            Tanggal Lahir:
                        </strong>{" "}
                        {athlete.tanggal_lahir
                            ? new Date(
                                  athlete.tanggal_lahir
                              ).toLocaleDateString(
                                  "id-ID"
                              )
                            : "-"}
                    </p>

                    <p>
                        <strong>
                            Jenis Kelamin:
                        </strong>{" "}
                        {athlete.jenis_kelamin}
                    </p>

                    <p>
                        <strong>
                            Pegangan Raket:
                        </strong>{" "}
                        {athlete.pegangan_raket || "-"}
                    </p>

                    <p>
                        <strong>
                            Tinggi Badan:
                        </strong>{" "}
                        {athlete.tinggi_badan
                            ? `${athlete.tinggi_badan} cm`
                            : "-"}
                    </p>

                    <p>
                        <strong>
                            Berat Badan:
                        </strong>{" "}
                        {athlete.berat_badan
                            ? `${athlete.berat_badan} kg`
                            : "-"}
                    </p>

                    <p>
                        <strong>
                            Nama Ayah:
                        </strong>{" "}
                        {athlete.nama_ayah || "-"}
                    </p>

                    <p>
                        <strong>
                            Nama Ibu:
                        </strong>{" "}
                        {athlete.nama_ibu || "-"}
                    </p>

                    <p>
                        <strong>
                            Alamat:
                        </strong>{" "}
                        {athlete.alamat || "-"}
                    </p>

                    <p>
                        <strong>
                            Provinsi:
                        </strong>{" "}
                        {athlete.provinsi
                            ?.nama_provinsi ||
                            athlete.uid_provinsi ||
                            "-"}
                    </p>

                    <p>
                        <strong>
                            Status:
                        </strong>{" "}
                        {athlete.status_atlet}
                    </p>
                </div>

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

export default AthleteDetailModal;