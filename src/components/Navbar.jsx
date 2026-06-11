function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-mark">M</span>
        <span>
          <span className="logo-kicker">Mahreen Indonesia</span>
          <span className="logo-title">Berkarya</span>
        </span>
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
