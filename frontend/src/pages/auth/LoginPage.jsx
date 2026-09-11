import { useState } from "react";
import { useAuth } from "../../context/useAuth.jsx";

function LoginPage() {
    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            await login(username, password);
        } catch (err) {
            setError(
                err.message || "Login gagal"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Login PB Jaya Raya</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <br />

                    <input
                        type="text"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        placeholder="Masukkan username"
                    />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        placeholder="Masukkan password"
                    />
                </div>

                <br />

                {error && (
                    <p>
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Login..."
                        : "Login"}
                </button>
            </form>
        </div>
    );
}

export default LoginPage;