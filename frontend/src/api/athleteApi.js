const API_URL = "http://localhost:5001/api";

export const getAthletesApi = async (
    token
) => {

    const response = await fetch(
        `${API_URL}/atlet`,
        {

            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

    const result =
        await response.json();

    if (!response.ok) {
        throw new Error(
            result.message ||
            "Terjadi kesalahan pada server"
        );
    }

    return result;
};

export const  createAthleteApi = async (
    token,
    formData
) => {

    const response = await fetch(
        `${API_URL}/atlet`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },

            body: formData
        }
    );

    const result =
        await response.json();

    if (!response.ok) {
        throw new Error(
            result?.message ??
            "Terjadi kesalahan pada server"
        );
    }

    return result;
};

export const getAthleteDetailApi = async (
    token,
    uidAtlet
) => {

    const response = await fetch(
        `${API_URL}/atlet/${uidAtlet}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const result = 
        await response.json();

    if (!response.ok) {
        throw new Error(
            result?.message ??
            "Gagal mengambil data atlet"
        );
    }

    return result;
};

export const updateAthleteApi = async (
    token,
    uidAtlet,
    formData
) => {

    const response = await fetch(
        `${API_URL}/atlet/${uidAtlet}`,
        {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result?.message ??
            "Gagal memperbarui atlet"
        );
    }

    return result;
};

export const deleteAthleteApi = async (
    token,
    uidAtlet
) => {

    const response = await fetch(
        `${API_URL}/atlet/${uidAtlet}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result?.message ??
            "Gagal menonaktifkan atlet"
        );
    }

    return result;
};