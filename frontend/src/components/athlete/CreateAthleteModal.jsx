import { useState, useEffect } from "react";
import { getProvinsiApi } from "../../api/provinsiApi.js";

function CreateAthleteModal({
    onClose,
    onSubmit,
    loading
}) {

    const token =
        localStorage.getItem(
            "pb_jaya_raya_token"
        )

    const [form, setForm] =
        useState({
            nik: "",
            id_pbsi: "",
            nama_lengkap: "",
            nama_ayah: "",
            nama_ibu: "",
            tempat_lahir: "",
            tanggal_lahir: "",
            alamat: "",
            jenis_kelamin: "",
            pegangan_raket: "",
            tinggi_badan: "",
            berat_badan: "",
            status_atlet: "Aktif",
            uid_provinsi: ""
        });

    const [foto, setFoto] =
        useState(null);

    const [
        provinsi,
        setProvinsi
    ] = useState([]);

    const [
        loadingProvinsi,
        setLoadingProvinsi
    ] = useState(false);

    useEffect(() => {

        const fetchProvinsi = async () => {

            try {
                setLoadingProvinsi(true);

                const result =
                    await getProvinsiApi(
                        token
                    );

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
        
        fetchProvinsi();
    }, [token]);


    const handleChange = (e) => {

        const {
            name,
            value
        } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
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
                "foto_atlet",
                foto
            );
        }

        onSubmit(formData);
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
                    width: "700px",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "24px"
                }}
            >

                <h2>
                    Tambah Atlet
                </h2>


                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    <div>
                        <label>
                            NIK
                        </label>

                        <input
                            name="nik"
                            value={form.nik}
                            onChange={
                                handleChange
                            }
                            required
                        />
                    </div>


                    <div>
                        <label>
                            ID PBSI
                        </label>

                        <input
                            name="id_pbsi"
                            value={
                                form.id_pbsi
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


                    <div>
                        <label>
                            Nama Lengkap
                        </label>

                        <input
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


                    <div>
                        <label>
                            Nama Ayah
                        </label>

                        <input
                            name="nama_ayah"
                            value={
                                form.nama_ayah
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


                    <div>
                        <label>
                            Nama Ibu
                        </label>

                        <input
                            name="nama_ibu"
                            value={
                                form.nama_ibu
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


                    <div>
                        <label>
                            Tempat Lahir
                        </label>

                        <input
                            name="tempat_lahir"
                            value={
                                form.tempat_lahir
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


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
                        />
                    </div>


                    <div>
                        <label>
                            Alamat
                        </label>

                        <textarea
                            name="alamat"
                            value={
                                form.alamat
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


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
                                Pilih
                            </option>

                            <option value="Laki_Laki">
                                Laki-Laki
                            </option>

                            <option value="Perempuan">
                                Perempuan
                            </option>

                        </select>
                    </div>


                    <div>
                        <label>
                            Pegangan Raket
                        </label>

                        <select
                            name="pegangan_raket"
                            value={
                                form.pegangan_raket
                            }
                            onChange={
                                handleChange
                            }
                        >

                            <option value="">
                                Pilih
                            </option>

                            <option value="Kanan">
                                Kanan
                            </option>

                            <option value="Kiri">
                                Kiri
                            </option>

                        </select>
                    </div>


                    <div>
                        <label>
                            Tinggi Badan
                        </label>

                        <input
                            type="number"
                            name="tinggi_badan"
                            value={
                                form.tinggi_badan
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


                    <div>
                        <label>
                            Berat Badan
                        </label>

                        <input
                            type="number"
                            name="berat_badan"
                            value={
                                form.berat_badan
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


                    <div>
                        <label>
                            Status Atlet
                        </label>

                        <select
                            name="status_atlet"
                            value={
                                form.status_atlet
                            }
                            onChange={
                                handleChange
                            }
                        >

                            <option value="Aktif">
                                Aktif
                            </option>

                            <option value="Non_Aktif">
                                Non Aktif
                            </option>

                        </select>
                    </div>


                    <div>
<select
    name="uid_provinsi"
    value={form.uid_provinsi}
    onChange={handleChange}
>
    <option value="">
        Pilih Provinsi
    </option>

    {provinsi.map((item) => (
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
    ))}
</select>
                    </div>


                    <div>
                        <label>
                            Foto
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setFoto(
                                    e.target
                                        .files?.[0] ||
                                    null
                                )
                            }
                        />
                    </div>


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
                                    : "Simpan Atlet"
                            }
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
}

export default CreateAthleteModal;