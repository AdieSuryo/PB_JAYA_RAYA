import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import { useAuth } from "../context/useAuth.jsx";

import LoginPage from "../pages/auth/LoginPage.jsx";

import DashboardPage from "../pages/dashboard/DashboardPage.jsx";

import DashboardLayout from "../layouts/DashboardLayout.jsx";

import UserPage from "../pages/user/UserPage.jsx";

import AthletePage from "../pages/athlete/AthletePage.jsx";

import CoachPage from "../pages/coach/CoachPage.jsx";


function AppRoutes() {

    const {
        user,
        loading
    } = useAuth();


    if (loading) {

        return (
            <div>
                Loading...
            </div>
        );

    }


    // =========================
    // BELUM LOGIN
    // =========================

    if (!user) {

        return (

            <Routes>

                <Route
                    path="/login"
                    element={
                        <LoginPage />
                    }
                />

                <Route
                    path="*"
                    element={
                        <Navigate
                            to="/login"
                            replace
                        />
                    }
                />

            </Routes>

        );

    }


    // =========================
    // SUDAH LOGIN
    // =========================

    return (

        <Routes>

            <Route
                element={
                    <DashboardLayout />
                }
            >

                <Route
                    path="/dashboard"
                    element={
                        <DashboardPage />
                    }
                />


                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/dashboard"
                            replace
                        />
                    }
                />

                <Route
                    path="/users"
                    element={
                        <UserPage />
                    }
                />

                <Route
                    path="/athlete"
                    element={
                        <AthletePage/>
                    }
                />

                <Route
                    path="/coach"
                    element={
                        <CoachPage />
                    }
                />


                <Route
                    path="*"
                    element={
                        <div>

                            <h1>
                                Halaman
                            </h1>

                            <p>
                                Halaman ini belum dibuat.
                            </p>

                        </div>
                    }
                />

            </Route>

        </Routes>

    );
}

export default AppRoutes;