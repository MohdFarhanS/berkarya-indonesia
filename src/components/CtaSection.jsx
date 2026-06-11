function CtaSection({ onOpenModal }) {
  return (
    <section className="cta-section" id="aksi">
      <div className="cta-card">
        <div>
          <p className="section-label">Call To Action</p>
          <h2>Mulai dari Ide Kecil, Wujudkan Dampak untuk Indonesia</h2>
          <p>
            Gunakan kreativitas, teknologi, dan semangat kolaborasi untuk
            membuat karya yang membantu masyarakat dan menginspirasi generasi
            muda lainnya.
          </p>
        </div>

        <button type="button" className="btn btn-light" onClick={onOpenModal}>
          Mulai Berkarya
        </button>
      </div>
    </section>
  );
}

export default CtaSection;
