import {
    useEffect,
    useState
} from "react";

import {
    getCoachesApi,
    getCoachDetailApi,
    createCoachApi
} from "../../api/coachApi.js";
import { useAuth } from "../../context/useAuth.jsx";

import CoachDetailModal from "../../components/coach/CoachDetailModal.jsx";
import CreateCoachModal
    from "../../components/coach/CreateCoachModal.jsx";


function CoachPage() {

    const {
        hasPermission
    } = useAuth();

    const [
        coaches,
        setCoaches
    ] = useState([]);

    const [
        loading,
        setLoading
    ] = useState(false);

    const [
        error,
        setError
    ] = useState("");

    const [
        search,
        setSearch
    ] = useState("");

    const [
        selectedCoach,
        setSelectedCoach
    ] = useState(null);

    const [
        detailLoading,
        setDetailLoading
    ] = useState(false);

    const [
        createModalOpen,
        setCreateModalOpen
    ] = useState(false);

    const [
        createLoading,
        setCreateLoading
    ] = useState(false);


    const loadCoaches =
        async () => {

            try {

                setLoading(true);
                setError("");

                const token =
                    localStorage.getItem(
                        "pb_jaya_raya_token"
                    );

                const result =
                    await getCoachesApi(
                        token
                    );

                console.log(
                    "COACH RESULT =",
                    result
                );

                setCoaches(
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

        loadCoaches();

    }, []);


    const handleDetailCoach = async (uidPelatih) => {

        try {

            setDetailLoading(true);

            const token = localStorage.getItem(
                "pb_jaya_raya_token"
            );

            const result = await getCoachDetailApi(
                token,
                uidPelatih
            );

            setSelectedCoach(result.data);
        } catch (error) {
            alert(
                error.message
            );
        } finally {
            setDetailLoading(false);
        }
    };

    const handleCreateCoach = async (formData) => {

        try {
            setCreateLoading(true);

            const token = localStorage.getItem(
                "pb_jaya_raya_token"
            );

            const result = await createCoachApi(
                token,
                formData
            );

            alert(
                result.message
            );

            setCreateModalOpen(false);

            await loadCoaches();
        } catch (error) {
            alert(
                error.message
            );
        } finally {
            setCreateLoading(false);
        }
    };


    const filteredCoaches =
        coaches.filter(
            (coach) => {

                const keyword =
                    search.toLowerCase();

                return (
                    coach.nama_lengkap
                        ?.toLowerCase()
                        .includes(keyword) ||

                    coach.uid_pelatih
                        ?.toLowerCase()
                        .includes(keyword) ||

                    coach.nik
                        ?.toLowerCase()
                        .includes(keyword)
                );

            }
        );


    if (loading) {

        return (
           <div>
            Memuat data pelatih...
           </div> 
        );
    }


    if (error) {

        return (
            {error}
        );
    }


    return (
        <div>

            <div
                style={{
                    marginBottom: "24px"
                }}
            >
                <h1>
                    Manajemen Pelatih
                </h1>

                <p>
                    Kelola data pelatih PB Jaya Raya
                </p>
            </div>
            
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "24px"
                }}
            >
                <div>
                    <strong>
                        Total Pelatih
                    </strong>

                    <p>
                        {coaches.length}
                    </p>
                </div>
            </div>

            {/*Search create*/}
            <div
                style={{
                    marginBottom: "26px",
                    display: "flex",
                    gap: "12px"
                }}
            >
                <input
                    type="text"
                    placeholder= "Cari nama / UID / NIK..."
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
                        "coach.create"
                    ) && (

                        <button
                            onClick={() =>
                                setCreateModalOpen(true)
                            }
                        >
                            Tambah Pelatih
                        </button>
                    )
                }
            </div>


            {/* Table */}
            <div
                style={{
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    overflow: "hidden"
                }}
            >

                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse"
                    }}
                >

                    <thead>
                        <tr
                            style={{
                                background: "#f5f5f5"
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
                                Jenis Pelatih
                            </th>

                            <th style={thStyle}>
                                Aksi
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {
                            filteredCoaches.length === 0 ? (

                                <tr>
                                    <td
                                        colSpan="8"
                                        style={{
                                            padding: "20px",
                                            textAlign: "center"
                                        }}
                                    >
                                        Data atlet tidak ditemukan
                                    </td>
                                </tr>
                            ):

                            filteredCoaches.map(
                                (coach) => (

                                    <tr 
                                        key={
                                            coach.uid_pelatih
                                        }
                                    >

                                        <td style={tdStyle}>
                                            {
                                                coach.nama_lengkap
                                            }
                                        </td>

                                        <td style={tdStyle}>
                                            {
                                                coach.uid_pelatih
                                            }
                                        </td>

                                        <td style={tdStyle}>
                                            {
                                                coach.nik
                                            }
                                        </td>

                                        <td style={tdStyle}>
                                            {
                                                coach.jenis_kelamin
                                            }
                                        </td>

                                        <td style={tdStyle}>
                                            {
                                                coach.jenis_pelatih || "-"
                                            }
                                        </td>

                                        <td>

                                            <div style={{
                                                display: "flex",
                                                gap: "8px"
                                            }}> 

                                                <button
                                                    onClick={() => 
                                                        handleDetailCoach(
                                                            coach.uid_pelatih
                                                        )
                                                    }
                                                >
                                                    Detail
                                                </button>

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
                selectedCoach && (
                    <CoachDetailModal
                        coach={selectedCoach}
                        onClose={() =>
                            setSelectedCoach(null)
                        }
                    />
                )
            }

            {
                createModalOpen && (
                    <CreateCoachModal
                        onClose={() => 
                            setCreateModalOpen(false)
                        }
                        onSubmit={handleCreateCoach}
                        loading={createLoading}
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
    borderTop: "1px solid #eee"
}


export default CoachPage;