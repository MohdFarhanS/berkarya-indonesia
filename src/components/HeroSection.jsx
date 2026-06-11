function HeroSection({ onOpenModal }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-badge">Gerakan Kreatif Generasi Muda</p>

        <h1>
          Berkarya untuk Indonesia
          <span>Lewat Kreativitas dan Teknologi</span>
        </h1>

        <p className="hero-description">
          Landing page ini mengajak generasi muda Indonesia memanfaatkan
          kreativitas dan teknologi untuk menciptakan karya yang berdampak
          positif bagi masyarakat.
        </p>

        <div className="hero-actions">
          <a href="#program" className="btn btn-primary">
            Lihat Program
          </a>

          <button type="button" className="btn btn-secondary" onClick={onOpenModal}>
            Mulai Berkarya
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <strong>01</strong>
            <span>Ide Bermakna</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Ruang Berkarya</span>
          </div>
          <div>
            <strong>+</strong>
            <span>Dampak Sosial</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>

        <div className="visual-card main-card">
          <span className="card-icon">MI</span>
          <p className="card-eyebrow">Creative &bull; Digital &bull; Social</p>
          <h3>Kreativitas dan Teknologi untuk Masyarakat</h3>
          <p>
            Setiap ide dapat berkembang menjadi solusi digital, konten edukatif,
            atau gerakan sosial yang relevan dengan kebutuhan sekitar.
          </p>

          <div className="brand-pills" aria-label="Fokus program">
            <span>Kreatif</span>
            <span>Digital</span>
            <span>Kolaboratif</span>
            <span>Berdampak</span>
          </div>
        </div>

        <div className="visual-card small-card top-card">
          <span>01</span>
          <p>Ide jadi karya</p>
        </div>

        <div className="visual-card small-card bottom-card">
          <span>MI</span>
          <p>Untuk masyarakat</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
