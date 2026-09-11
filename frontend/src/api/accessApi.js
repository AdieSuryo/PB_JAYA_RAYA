const API_URL = "http://localhost:5001/api";

export const getMyAccessApi = async (token) => {

    const response = await fetch(
        `${API_URL}/access/me`,
        {
            method: "GET",

            cache: "no-store",

            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.message ||
            "Gagal mengambil akses user"
        );
    }

    return result;
};