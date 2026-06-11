function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-mark">ID</span>
        <span>Untuk Negeri</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Beranda</a>
        <a href="#program">Program</a>
        <a href="#langkah">Langkah</a>
        <a href="#aksi">Aksi</a>
      </nav>
    </header>
  );
}

export default Navbar;