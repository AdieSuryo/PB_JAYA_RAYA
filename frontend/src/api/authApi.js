const API_URL = "http://localhost:5001/api";

export const loginApi = async (username, password) => {

    const response = await fetch(
        `${API_URL}/auth/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.message || "Login gagal"
        );
    }

    return result;
};