function CtaSection({ onOpenModal }) {
  return (
    <section className="cta-section" id="aksi">
      <div className="cta-card">
        <div>
          <p className="section-label">Call To Action</p>
          <h2>Bangun Karya yang Modern, Profesional, dan Bermanfaat</h2>
          <p>
            Jadikan kreativitas dan teknologi sebagai langkah awal untuk
            bertumbuh bersama ekosistem Mahreen Indonesia dan memberi dampak
            nyata untuk masyarakat.
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
