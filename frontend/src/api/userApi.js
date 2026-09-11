import AppError from "../../../Backend/src/errors/AppError";

const API_URL =
    "http://localhost:5001/api";


export const getUserManagementApi =
    async (token) => {

        const response =
            await fetch(
                `${API_URL}/users/management`,
                {
                    method: "GET",

                    cache: "no-store",

                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            );

        const result =
            await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "Gagal mengambil data manajemen user"
            );
        }

        return result;
    };

export const createUserApi = async (
    token,
    payload
) => {
    
    const response = await fetch(
        `${API_URL}/users`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(
                payload
            ),
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result?.message ??
            "Terjadi kesalahan pada server"
        );
    }

    return result;
};

export const updateUserApi = async (
    token,
    uidUser,
    payload
) => {

    const response = await fetch(
        `${API_URL}/users/${uidUser}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",

                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(payload),
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

export const deleteUserApi = async (
    token,
    uidUser
) => {

    const response = await fetch(
        `${API_URL}/users/${uidUser}`,
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
            "Terjadi kesalahan pada server"
        );
    }

    return result;

};

export const reactiveUserApi = async (
    token,
    uidUser
) => {

    const response = await fetch(
        `${API_URL}/users/${uidUser}/activate`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new AppError(
            result?. message ??
            "Terjadi kesalahan pada server"
        );
    }

    return result;
};




export const hardDeleteUserApi = async (
    token,
    uidUser
) => {

    const response = await fetch(
        `${API_URL}/users/${uidUser}/permanent`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new AppError(
            result?.message ??
            "Terjadi kesalahan pada server"
        );
    }

    return result;
};