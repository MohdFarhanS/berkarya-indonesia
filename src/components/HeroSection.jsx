function HeroSection({ onOpenModal }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-badge">Next Generation Brand Ecosystem</p>

        <h1>
          Berkarya untuk Indonesia
          <span>Lewat Kreativitas, Digital, dan Dampak Sosial</span>
        </h1>

        <p className="hero-description">
          Mahreen Indonesia mengajak generasi muda mengubah ide menjadi karya
          kreatif, solusi digital, dan kontribusi sosial yang modern,
          profesional, serta bermanfaat untuk masa depan Indonesia.
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
            <strong>04</strong>
            <span>Pilar Mahreen</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Fokus Karya</span>
          </div>
          <div>
            <strong>01</strong>
            <span>Dampak Negeri</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>

        <div className="visual-card main-card">
          <span className="card-icon">MI</span>
          <p className="card-eyebrow">Creative &bull; Digital &bull; Social</p>
          <h3>Ekosistem Anak Muda untuk Membuat Karya Bermakna</h3>
          <p>
            Dari branding, teknologi, sampai aksi sosial, setiap ide diarahkan
            menjadi karya yang relevan dan berdampak.
          </p>

          <div className="brand-pills" aria-label="Pilar Mahreen Indonesia">
            <span>Studio</span>
            <span>Tanya</span>
            <span>Peduli</span>
            <span>CSR</span>
          </div>
        </div>

        <div className="visual-card small-card top-card">
          <span>01</span>
          <p>Ide jadi karya</p>
        </div>

        <div className="visual-card small-card bottom-card">
          <span>MI</span>
          <p>Modern & berdampak</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
