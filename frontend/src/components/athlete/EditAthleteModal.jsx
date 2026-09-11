import {
    useEffect,
    useState
} from "react";

import {
    getProvinsiApi
} from "../../api/provinsiApi";


function EditAthleteModal({
    athlete,
    onClose,
    onSubmit,
    loading
}) {

    const token =
        localStorage.getItem(
            "pb_jaya_raya_token"
        );

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
        previewFoto,
        setPreviewFoto
    ] = useState(null);

    const [
        provinsi,
        setProvinsi
    ] = useState([]);

    const [
        loadingProvinsi,
        setLoadingProvinsi
    ] = useState(false);


    // ===========================
    // ISI FORM DARI DATA ATLET
    // ===========================

    useEffect(() => {

        if (!athlete) {
            return;
        }

        setForm({
            nik:
                athlete.nik || "",

            id_pbsi:
                athlete.id_pbsi || "",

            nama_lengkap:
                athlete.nama_lengkap || "",

            nama_ayah:
                athlete.nama_ayah || "",

            nama_ibu:
                athlete.nama_ibu || "",

            tempat_lahir:
                athlete.tempat_lahir || "",

            tanggal_lahir:
                athlete.tanggal_lahir
                    ? athlete.tanggal_lahir
                        .split("T")[0]
                    : "",

            alamat:
                athlete.alamat || "",

            jenis_kelamin:
                athlete.jenis_kelamin || "",

            pegangan_raket:
                athlete.pegangan_raket || "",

            tinggi_badan:
                athlete.tinggi_badan ?? "",

            berat_badan:
                athlete.berat_badan ?? "",

            status_atlet:
                athlete.status_atlet ||
                "Aktif",

            uid_provinsi:
                athlete.uid_provinsi || ""
        });

        setPreviewFoto(
            athlete.foto || null
        );

    }, [athlete]);


    // ===========================
    // GET PROVINSI
    // ===========================

    useEffect(() => {

        const fetchProvinsi =
            async () => {

                try {

                    setLoadingProvinsi(
                        true
                    );

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

        if (token) {
            fetchProvinsi();
        }

    }, [token]);


    // ===========================
    // HANDLE CHANGE
    // ===========================

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


    // ===========================
    // HANDLE FOTO
    // ===========================

    const handleFotoChange = (e) => {

        const file =
            e.target.files[0];

        if (!file) {
            return;
        }

        setFoto(file);

        setPreviewFoto(
            URL.createObjectURL(file)
        );
    };


    // ===========================
    // HANDLE SUBMIT
    // ===========================

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

        // hanya kirim foto kalau
        // user memilih foto baru
        if (foto) {

            formData.append(
                "foto_atlet",
                foto
            );

        }

        onSubmit(
            athlete.uid_atlet,
            formData
        );
    };


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
                alignItems: "center",
                justifyContent: "center",

                zIndex: 999
            }}
        >

            <div
                style={{
                    backgroundColor:
                        "white",

                    width: "700px",

                    maxHeight:
                        "90vh",

                    overflowY:
                        "auto",

                    borderRadius:
                        "12px",

                    padding:
                        "24px"
                }}
            >

                <h2>
                    Edit Atlet
                </h2>


                <form
                    onSubmit={
                        handleSubmit
                    }
                >

                    {/* FOTO */}

                    <div>
                        <label>
                            Foto Atlet
                        </label>

                        <br />

                        {previewFoto && (
                            <img
                                src={
                                    previewFoto
                                }
                                alt="Foto Atlet"
                                style={{
                                    width:
                                        "120px",

                                    height:
                                        "120px",

                                    objectFit:
                                        "cover",

                                    marginTop:
                                        "10px",

                                    marginBottom:
                                        "10px",

                                    borderRadius:
                                        "8px"
                                }}
                            />
                        )}

                        <br />

                        <input
                            type="file"
                            accept="
                                image/jpeg,
                                image/png,
                                image/webp
                            "
                            onChange={
                                handleFotoChange
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
                            value={
                                form.nik
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


                    {/* ID PBSI */}

                    <div>
                        <label>
                            ID PBSI
                        </label>

                        <input
                            type="text"
                            name="id_pbsi"
                            value={
                                form.id_pbsi
                            }
                            onChange={
                                handleChange
                            }
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


                    {/* NAMA AYAH */}

                    <div>
                        <label>
                            Nama Ayah
                        </label>

                        <input
                            type="text"
                            name="nama_ayah"
                            value={
                                form.nama_ayah
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


                    {/* NAMA IBU */}

                    <div>
                        <label>
                            Nama Ibu
                        </label>

                        <input
                            type="text"
                            name="nama_ibu"
                            value={
                                form.nama_ibu
                            }
                            onChange={
                                handleChange
                            }
                        />
                    </div>


                    {/* TEMPAT LAHIR */}

                    <div>
                        <label>
                            Tempat Lahir
                        </label>

                        <input
                            type="text"
                            name="tempat_lahir"
                            value={
                                form.tempat_lahir
                            }
                            onChange={
                                handleChange
                            }
                        />
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
                        >
                            <option value="">
                                Pilih
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


                    {/* PEGANGAN RAKET */}

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


                    {/* TINGGI */}

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


                    {/* BERAT */}

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


                    {/* ALAMAT */}

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


                    {/* PROVINSI */}

                    <div>
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


                    {/* STATUS */}

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

                            <option
                                value="Aktif"
                            >
                                Aktif
                            </option>

                            <option
                                value="Non_Aktif"
                            >
                                Non Aktif
                            </option>

                        </select>
                    </div>


                    <br />


                    {/* BUTTON */}

                    <div
                        style={{
                            display:
                                "flex",

                            justifyContent:
                                "flex-end",

                            gap:
                                "10px"
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
                                    : "Simpan Perubahan"
                            }
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}


export default EditAthleteModal;