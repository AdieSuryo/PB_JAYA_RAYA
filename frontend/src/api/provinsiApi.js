const API_URL = "http://localhost:5001/api";

export const getProvinsiApi = async (
    token
) => {

    const response = await fetch(
        `${API_URL}/provinsi`,
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
            "Gagal mengambil data provinsi"
        )
    }

    return result;
};