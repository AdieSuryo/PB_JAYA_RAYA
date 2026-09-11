import {
    useEffect,
    useState
} from "react";

import {
    getAthletesApi,
    createAthleteApi,
    getAthleteDetailApi,
    updateAthleteApi,
    deleteAthleteApi
} from "../../api/athleteApi.js";

import {
    useAuth
} from "../../context/useAuth.jsx";

import CreateAthleteModal from "../../components/athlete/CreateAthleteModal.jsx";
import AthleteDetailModal from "../../components/athlete/AthleteDetailModal.jsx";
import EditAthleteModal from "../../components/athlete/EditAthleteModal.jsx";



function AthletePage() {

    const {
        hasPermission
    } = useAuth();


    const [
        athletes,
        setAthletes
    ] = useState([]);

    const [
        loading,
        setLoading
    ] = useState(true);

    const [
        error,
        setError
    ] = useState("");

    const [
        search,
        setSearch
    ] = useState("");

    const [
        createModalOpen,
        setCreateModalOpen
    ] = useState(false);

    const [
        createLoading,
        setCreateLoading
    ] = useState(false);

    const [
        selectedAthlete,
        setSelectedAthlete
    ] = useState(null);

    const [
        detailLoading,
        setDetailLoading
    ] = useState(false);

    const [
        editAthlete,
        setEditAthlete
    ] = useState(null);

    const [
        editLoading,
        setEditLoading
    ] = useState(false);

    const [
        deletingUid,
        setDeletingUid
    ] = useState(null);


    // =========================
    // LOAD ATHLETE
    // =========================

    const loadAthletes =
        async () => {

            try {

                setLoading(true);
                setError("");

                const token =
                    localStorage.getItem(
                        "pb_jaya_raya_token"
                    );

                const result =
                    await getAthletesApi(
                        token
                    );

                console.log(
                    "ATHLETE RESULT =",
                    result
                );

                setAthletes(
                    result.data || []
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

        loadAthletes();

    }, []);

    const handleCreateAthlete = 
        async (formData) => {

            try {

                setCreateLoading(true);

                const token = localStorage.getItem(
                    "pb_jaya_raya_token"
                );

                const result = await createAthleteApi(
                    token,
                    formData
                );

                alert(
                    result.message
                );

                setCreateModalOpen(false);

                await loadAthletes();
            } catch (err) {

                alert(
                    err.message
                );
            } finally {
                setCreateLoading(false);
            }
        };


    const handleDetailAthlete = async (uidAtlet) => {

        try {

            setDetailLoading(true);

            const token = localStorage.getItem(
                "pb_jaya_raya_token"
            );

            const result = await getAthleteDetailApi(
                token,
                uidAtlet
            );

            setSelectedAthlete(result.data);
        } catch (error) {
            alert(
                error.message
            );
        } finally {
            setDetailLoading(false);
        }
    };

    const handleUpdateAthlete = async (
        uidAtlet,
        formData
    ) => {

        try {

            setEditLoading(true);

            const token =
                localStorage.getItem(
                    "pb_jaya_raya_token"
                );

            const result =
                await updateAthleteApi(
                    token,
                    uidAtlet,
                    formData
                );

            alert(
                result.message
            );

            setEditAthlete(null);

            // refresh list atlet
            await loadAthletes();

        } catch (error) {

            alert(
                error.message
            );

        } finally {

            setEditLoading(false);

        }
    };

    const handleEditAthlete = async (
        uidAtlet
    ) => {

        try {

            const token =
                localStorage.getItem(
                    "pb_jaya_raya_token"
                );

            const result =
                await getAthleteDetailApi(
                    token,
                    uidAtlet
                );

            console.log(
                "EDIT ATHLETE RESULT =",
                result
            );

            setEditAthlete(
                result.data
            );

        } catch (error) {

            alert(
                error.message
            );

        }
    };

    const handleDeleteAthlete = async (
        uidAtlet,
        namaAtlet
    ) => {
        const confirmDelete =
            window.confirm(
                `Yakin ingin menonaktifkan atlet ${namaAtlet}?`
            );

        if (!confirmDelete) {
            return;
        }

        try {
            setDeletingUid(uidAtlet);
            
            const token =
                localStorage.getItem(
                    "pb_jaya_raya_token"
                );

            const result = 
                await deleteAthleteApi(
                    token,
                    uidAtlet
                );

            alert(
                result.message
            );

            await loadAthletes();
        } catch (error) {
            alert(
                error.message
            );
        } finally {
            setDeletingUid(null);
        }
    };

    // =========================
    // SEARCH
    // =========================

    const filteredAthletes =
        athletes.filter(
            (athlete) => {

                const keyword =
                    search
                        .trim()
                        .toLowerCase();

                if (!keyword) {
                    return true;
                }

                return (
                    athlete.nama_lengkap
                        ?.toLowerCase()
                        .includes(keyword) ||

                    athlete.uid_atlet
                        ?.toLowerCase()
                        .includes(keyword) ||

                    athlete.nik
                        ?.toLowerCase()
                        .includes(keyword)
                );
            }
        );


    if (loading) {

        return (
            <div>
                Memuat data atlet...
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


    return (

        <div>

            {/* HEADER */}
            <div
                style={{
                    marginBottom: "24px"
                }}
            >

                <h1>
                    Manajemen Atlet
                </h1>

                <p>
                    Kelola data atlet
                    PB Jaya Raya
                </p>

            </div>


            {/* SUMMARY */}
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "24px"
                }}
            >

                <div>
                    <strong>
                        Total Atlet
                    </strong>

                    <p>
                        {athletes.length}
                    </p>
                </div>

            </div>


            {/* SEARCH + CREATE */}
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


                {
                    hasPermission(
                        "athlete.create"
                    ) && (

                    <button
                        onClick={() =>
                            setCreateModalOpen(
                                true
                            )
                        }
                    >
                        Tambah Atlet
                    </button>

                    )
                }

            </div>


            {/* TABLE */}
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
                                UID
                            </th>

                            <th style={thStyle}>
                                NIK
                            </th>

                            <th style={thStyle}>
                                Jenis Kelamin
                            </th>

                            <th style={thStyle}>
                                Status
                            </th>

                            <th style={thStyle}>
                                Aksi
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {
                            filteredAthletes.length === 0
                                ? (

                                    <tr>

                                        <td
                                            colSpan="8"
                                            style={{
                                                padding:
                                                    "20px",
                                                textAlign:
                                                    "center"
                                            }}
                                        >
                                            Data atlet tidak ditemukan
                                        </td>

                                    </tr>

                                )
                                : filteredAthletes.map(
                                    (athlete) => (

                                        <tr
                                            key={
                                                athlete.uid_atlet
                                            }
                                        >

                                            <td style={tdStyle}>
                                                {
                                                    athlete
                                                        .nama_lengkap
                                                }
                                            </td>

                                            <td style={tdStyle}>
                                                {
                                                    athlete
                                                        .uid_atlet
                                                }
                                            </td>

                                            <td style={tdStyle}>
                                                {
                                                    athlete
                                                        .nik
                                                }
                                            </td>

                                            <td style={tdStyle}>
                                                {
                                                    athlete
                                                        .jenis_kelamin
                                                }
                                            </td>

                                            <td style={tdStyle}>
                                                {
                                                    athlete
                                                        .status_atlet
                                                }
                                            </td>

                                            <td style={tdStyle}>

                                                <div
                                                    style={{
                                                        display:
                                                            "flex",
                                                        gap: "8px"
                                                    }}    
                                                >
                                                        
                                                <button
                                                    onClick={() =>
                                                        handleDetailAthlete(
                                                            athlete.uid_atlet
                                                        )
                                                    }
                                                >
                                                    Detail
                                                </button>

                                                
                                                {hasPermission("athlete.update") && (
                                                 <button
                                                    onClick={() => {
                                                        console.log(
                                                            "Edit athlete",
                                                            athlete.uid_atlet
                                                        );

                                                        handleEditAthlete(
                                                            athlete.uid_atlet
                                                        )
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                )}

                                                {hasPermission("athlete.delete") && (
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteAthlete(
                                                                athlete.uid_atlet,
                                                                athlete.nama_lengkap
                                                            )
                                                        }
                                                        disabled={
                                                            deletingUid === athlete.uid_atlet
                                                        }
                                                    >
                                                        {
                                                            deletingUid === athlete.uid_atlet
                                                                ? "Menonaktifkan..."
                                                                : "Nonaktifkan"
                                                        }
                                                    </button>
                                                )}

                                                </div>


                                            </td>

                                        </tr>

                                    )
                                )
                        }

                    </tbody>

                </table>

            </div>

            {
                createModalOpen && (

                    <CreateAthleteModal
                        onClose={() =>
                            setCreateModalOpen(
                                false
                            )
                        }
                        onSubmit={
                            handleCreateAthlete
                        }
                        loading={
                            createLoading
                        }
                    />

                )
            }

            {
                selectedAthlete && (
                    <AthleteDetailModal
                        athlete={selectedAthlete}
                        onClose={() =>
                            setSelectedAthlete(null)
                        }
                        loading={
                            detailLoading
                        }
                    />
                )
            }

            {
                editAthlete && (
                    <EditAthleteModal
                        athlete={editAthlete}
                        onClose={() =>
                            setEditAthlete(null)
                        }
                        onSubmit={
                            handleUpdateAthlete
                        }
                        loading={
                            editLoading
                        }
                    />
                )
            }
            
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


export default AthletePage;