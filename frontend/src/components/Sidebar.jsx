import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth.jsx";

function Sidebar() {

    const {
        menus,
        displayName,
        logout
    } = useAuth();


    const renderMenu = (menu) => {

        const hasChildren =
            menu.children &&
            menu.children.length > 0;


        // =========================
        // PARENT MENU
        // =========================

        if (hasChildren) {

            return (
                <div
                    key={menu.uid_menu}
                    style={{
                        marginBottom: "15px"
                    }}
                >

                    <div
                        style={{
                            fontWeight: "bold",
                            marginBottom: "8px"
                        }}
                    >
                        {menu.nama_menu}
                    </div>


                    <div
                        style={{
                            marginLeft: "15px"
                        }}
                    >

                        {menu.children.map(
                            (child) =>
                                renderMenu(child)
                        )}

                    </div>

                </div>
            );
        }


        // =========================
        // MENU YANG MEMILIKI ROUTE
        // =========================

        if (menu.route) {

            return (
                <div
                    key={menu.uid_menu}
                    style={{
                        marginBottom: "8px"
                    }}
                >

                    <Link
                        to={menu.route}
                        style={{
                            textDecoration: "none"
                        }}
                    >
                        {menu.nama_menu}
                    </Link>

                </div>
            );
        }


        return null;
    };


    return (

        <aside
            style={{
                width: "250px",
                minHeight: "100vh",
                borderRight:
                    "1px solid #ddd",
                padding: "20px"
            }}
        >

            <h2>
                PB Jaya Raya
            </h2>


            <div
                style={{
                    marginBottom: "25px"
                }}
            >

                <strong>
                    {displayName}
                </strong>

            </div>


            <nav>

                {menus.map(
                    (menu) =>
                        renderMenu(menu)
                )}

            </nav>


            <hr />


            <button
                onClick={logout}
            >
                Logout
            </button>

        </aside>

    );
}

export default Sidebar;