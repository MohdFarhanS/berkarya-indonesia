function Navbar() {
    return (
        <header className="navbar">
            <a href="#home" className="logo">
                <span className="logo-mark">MI</span>
                <span>Mahreen Indonesia</span>
            </a>

            <nav className="nav-links">
                <a href="#home">Beranda</a>
                <a href="#program">Program</a>
                <a href="#aksi">Aksi</a>
            </nav>
        </header>
    );
}

export default Navbar;