function AdminDashboard({ user }) {

    return (
        <div>
            <h1>Dashboard Admin</h1>

            <p>
                Selamat datang, {user.username}
            </p>

            <p>
                Role: {user.role}
            </p>

            <hr />

            <h2>Menu Admin</h2>

            <ul>
                <li>Manajemen User</li>
                <li>Data Atlet</li>
                <li>Data Pelatih</li>
                <li>Master Data</li>
                <li>Laporan</li>
            </ul>
        </div>
    );
}

export default AdminDashboard;