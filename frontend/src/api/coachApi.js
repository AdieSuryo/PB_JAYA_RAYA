const API_URL = "http://localhost:5001/api";

export const getCoachesApi = async (
    token
) => {

    const response = await fetch(
        `${API_URL}/pelatih`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result?.message ??
            "Gagal mengambil data pelatih"
        );
    }

    return result;
};

export const getCoachDetailApi = async (
    token,
    uidPelatih
) => {

    const response = await fetch(
        `${API_URL}/pelatih/${uidPelatih}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            "Gagal mengambil detail pelatih"
        );
        
    }

    return result;
};

export const createCoachApi = async (
    token,
    formData
) => {

    const response = await fetch(
        `${API_URL}/pelatih`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },

            body: formData
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error("Gagal menambahkan pelatih");
        
    }

    return result;
};