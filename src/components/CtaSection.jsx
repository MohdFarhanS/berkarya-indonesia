function CtaSection({ onOpenModal }) {
  return (
    <section className="cta-section" id="aksi">
      <div className="cta-card">
        <div>
          <p className="section-label">Call To Action</p>
          <h2>Mulai dari Satu Ide, Wujudkan untuk Indonesia</h2>
          <p>
            Jangan menunggu sempurna untuk memulai. Gunakan kreativitas,
            teknologi, dan semangat kolaborasi untuk menciptakan karya yang
            bermanfaat.
          </p>
        </div>

        <button type="button" className="btn btn-light" onClick={onOpenModal}>
          Gabung Sekarang
        </button>
      </div>
    </section>
  );
}

export default CtaSection;