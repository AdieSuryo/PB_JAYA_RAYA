import { useState, useEffect } from "react";
import { getProvinsiApi } from "../../api/provinsiApi";

function CreateCoachModal({
    onClose,
    onSubmit,
    loading
}) {

    const token = localStorage.getItem("pb_jaya_raya_token")

    const [form, setForm] =
        useState({
            nik: "",
            nama_lengkap: "",
            jenis_kelamin: "",
            tanggal_lahir: "",
            tahun_bergabung: "",
            pernah_melatih_sebelumnya: false,
            klub_negara_sebelumnya: "",
            mantan_atlet_nasional: false,
            asal_klub_nasional: "",
            mantan_pelatnas: false,
            tahun_pelatnas: "",
            uid_provinsi: ""
        });

    const [foto, setFoto] =
        useState(null);

    const [
        provinsi,
        setProvinsi
    ] = useState([])

    const [
        loadingProvinsi,
        setLoadingProvinsi
    ] = useState(false);


    useEffect(() => {

        const fetchProvinsi = async () => {

            try {

                setLoadingProvinsi(true);

                const result = await getProvinsiApi(token);

                setProvinsi(
                    result.data || []
                );
            } catch (error) {
                console.error(
                    error
                );
            } finally {
                setLoadingProvinsi(
                    false
                );
            }
        };

        if (token) {
            fetchProvinsi();
        }
    }, [token]);

    const handleChange = (e) => {

        const {
            name,
            value,
            type,
            checked
        } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value
        }));
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        const formData =
            new FormData();

        Object.entries(form)
            .forEach(
                ([key, value]) => {

                    if (
                        value !== "" &&
                        value !== null
                    ) {
                        formData.append(
                            key,
                            value
                        );
                    }

                }
            );

        if (foto) {
            formData.append(
                "foto_pelatih",
                foto
            );
        }

        for (const [key, value] of formData.entries()) {
    console.log(key, value);
}

        onSubmit(formData);
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
                    width: "700px",
                    maxHeight: "90vh",
                    overflowY: "auto",

                    backgroundColor:
                        "white",

                    padding: "24px",

                    borderRadius:
                        "12px"
                }}
            >

                <h2>
                    Tambah Pelatih
                </h2>

                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    {/* FOTO */}
                    <div>
                        <label>
                            Foto Pelatih
                        </label>

                        <br />

                        <input
                            type="file"
                            accept="
                                image/jpeg,
                                image/png,
                                image/webp
                            "
                            onChange={(e) =>
                                setFoto(
                                    e.target.files[0]
                                )
                            }
                        />
                    </div>


                    <br />


                    {/* NIK */}
                    <div>
                        <label>
                            NIK
                        </label>

                        <input
                            type="text"
                            name="nik"
                            value={form.nik}
                            onChange={handleChange}
                            required
                        />
                    </div>


                    {/* NAMA */}
                    <div>
                        <label>
                            Nama Lengkap
                        </label>

                        <input
                            type="text"
                            name="nama_lengkap"
                            value={
                                form.nama_lengkap
                            }
                            onChange={
                                handleChange
                            }
                            required
                        />
                    </div>


                    {/* JENIS KELAMIN */}
                    <div>
                        <label>
                            Jenis Kelamin
                        </label>

                        <select
                            name="jenis_kelamin"
                            value={
                                form.jenis_kelamin
                            }
                            onChange={
                                handleChange
                            }
                            required
                        >

                            <option value="">
                                Pilih Jenis Kelamin
                            </option>

                            <option
                                value="Laki_Laki"
                            >
                                Laki-Laki
                            </option>

                            <option
                                value="Perempuan"
                            >
                                Perempuan
                            </option>

                        </select>
                    </div>


                    {/* TANGGAL LAHIR */}
                    <div>
                        <label>
                            Tanggal Lahir
                        </label>

                        <input
                            type="date"
                            name="tanggal_lahir"
                            value={
                                form.tanggal_lahir
                            }
                            onChange={
                                handleChange
                            }
                            required
                        />
                    </div>


                    {/* TAHUN BERGABUNG */}
                    <div>
                        <label>
                            Tahun Bergabung
                        </label>

                        <input
                            type="number"
                            name="tahun_bergabung"
                            value={
                                form.tahun_bergabung
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Contoh: 2024"
                            required
                        />
                    </div>


                    <hr />


                    {/* PERNAH MELATIH */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                            marginTop: "12px"
                        }}
                    >
                        <label>
                            Pernah Melatih Sebelumnya
                        </label>

                        <select
                            name="pernah_melatih_sebelumnya"
                            value={
                                String(
                                    form.pernah_melatih_sebelumnya
                                )
                            }
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    pernah_melatih_sebelumnya:
                                        e.target.value === "true"
                                }))
                            }
                            style={{
                                width: "120px",
                                padding: "6px"
                            }}
                        >
                            <option value="false">
                                Tidak
                            </option>

                            <option value="true">
                                Ya
                            </option>
                        </select>
                    </div>

                    {/* KLUB / NEGARA SEBELUMNYA */}
                    {
                        form.pernah_melatih_sebelumnya && (

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                    marginTop: "12px"
                                }}
                            >

                                <label>
                                    Klub / Negara Sebelumnya
                                </label>

                                <select
                                    name="klub_negara_sebelumnya"
                                    value={
                                        form.klub_negara_sebelumnya
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    style={{
                                        width: "220px",
                                        padding: "6px"
                                    }}
                                >

                                    <option value="">
                                        Pilih Klub / Negara
                                    </option>

                                    <option value="Indonesia">
                                        Indonesia
                                    </option>

                                    <option value="Malaysia">
                                        Malaysia
                                    </option>

                                    <option value="Singapura">
                                        Singapura
                                    </option>

                                    <option value="Jepang">
                                        Jepang
                                    </option>

                                    <option value="China">
                                        China
                                    </option>

                                </select>

                            </div>

                        )
                    }

                    

                    

                    <hr />


                    {/* MANTAN PELATNAS */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                            marginTop: "12px"
                        }}
                    >
                        <label>
                            Mantan Atlet Nasional
                        </label>

                        <select
                            name="mantan_pelatnas"
                            value={
                                String(
                                    form.mantan_pelatnas
                                )
                            }
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    mantan_pelatnas:
                                        e.target.value === "true"
                                }))
                            }
                            style={{
                                width: "120px",
                                padding: "6px"
                            }}
                        >
                            <option value="false">
                                Tidak
                            </option>

                            <option value="true">
                                Ya
                            </option>
                        </select>
                    </div>

                    {/* ASAL KLUB NASIONAL */}
                    {
                        form.mantan_atlet_nasional && (

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                    marginTop: "12px"
                                }}
                            >

                                <label>
                                    Asal Klub Nasional
                                </label>

                                <select
                                    name="asal_klub_nasional"
                                    value={
                                        form.asal_klub_nasional
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    style={{
                                        width: "220px",
                                        padding: "6px"
                                    }}
                                >

                                    <option value="">
                                        Pilih Klub
                                    </option>

                                    <option value="PB Jaya Raya">
                                        PB Jaya Raya
                                    </option>

                                    <option value="PB Djarum">
                                        PB Djarum
                                    </option>

                                    <option value="Exist Badminton Club">
                                        Exist Badminton Club
                                    </option>

                                </select>

                            </div>

                        )
                    }



                    {/* TAHUN PELATNAS */}
                    {
                        form.mantan_pelatnas && (

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px",
                                    marginTop: "12px"
                                }}
                            >

                                <label>
                                    Tahun Pelatnas
                                </label>

                                <input
                                    type="number"
                                    name="tahun_pelatnas"
                                    value={form.tahun_pelatnas}
                                    onChange={handleChange}
                                    placeholder="Contoh: 2018"
                                    style={{
                                        width: "180px",
                                        padding: "6px"
                                    }}
                                />

                            </div>

                        )
                    }


                    <br />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                            marginTop: "12px"
                        }}
                    >
                        <label>
                            Provinsi
                        </label>

                        <select
                            name="uid_provinsi"
                            value={
                                form.uid_provinsi
                            }
                            onChange={
                                handleChange
                            }
                            disabled={
                                loadingProvinsi
                            }

                            style={{
                                width: "120px",
                                padding: "6px"
                            }}
                        >

                            <option value="">
                                {
                                    loadingProvinsi
                                        ? "Memuat provinsi..."
                                        : "Pilih Provinsi"
                                }
                            </option>

                            {
                                provinsi.map(
                                    (item) => (

                                        <option
                                            key={
                                                item.uid_provinsi
                                            }
                                            value={
                                                item.uid_provinsi
                                            }
                                        >
                                            {
                                                item.nama_provinsi
                                            }
                                        </option>

                                    )
                                )
                            }

                        </select>
                    </div>


                    {/* BUTTON */}
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
                                    : "Simpan Pelatih"
                            }
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default CreateCoachModal;