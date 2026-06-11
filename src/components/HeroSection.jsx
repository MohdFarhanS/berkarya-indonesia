function HeroSection() {
    return (
      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="hero-badge">Berkarya untuk Indonesia</p>
  
          <h1>
            Saatnya Generasi Muda Indonesia
            <span> Berkarya Lewat Kreativitas dan Teknologi</span>
          </h1>
  
          <p className="hero-description">
            Mahreen Indonesia mengajak anak muda untuk mengembangkan ide,
            menciptakan karya, dan memanfaatkan teknologi sebagai langkah nyata
            membangun masa depan bangsa.
          </p>
  
          <div className="hero-actions">
            <a href="#program" className="btn btn-primary">
              Lihat Program
            </a>
            <a href="#aksi" className="btn btn-secondary">
              Mulai Berkarya
            </a>
          </div>
  
          <div className="hero-stats">
            <div>
              <strong>100+</strong>
              <span>Ide Kreatif</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Karya Digital</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Tujuan Indonesia</span>
            </div>
          </div>
        </div>
  
        <div className="hero-visual">
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>
  
          <div className="visual-card main-card">
            <span className="card-icon">🚀</span>
            <h3>Berani Membuat Perubahan</h3>
            <p>
              Dari ide sederhana, anak muda dapat menciptakan solusi yang
              berdampak.
            </p>
          </div>
  
          <div className="visual-card small-card top-card">
            <span>🇮🇩</span>
            <p>Untuk Negeri</p>
          </div>
  
          <div className="visual-card small-card bottom-card">
            <span>⚡</span>
            <p>Kreatif & Inovatif</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;