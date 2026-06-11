const steps = [
  {
    number: "01",
    title: "Temukan Insight",
    description:
      "Mulai dari keresahan, kebutuhan, atau peluang sederhana yang bisa diubah menjadi gagasan bernilai.",
  },
  {
    number: "02",
    title: "Rancang Solusi",
    description:
      "Kembangkan konsep dengan pendekatan kreatif, digital, dan komunikasi yang jelas.",
  },
  {
    number: "03",
    title: "Publikasikan Dampak",
    description:
      "Bagikan karya agar dapat dilihat, digunakan, dan menginspirasi lebih banyak orang.",
  },
];

function StepsSection() {
  return (
    <section className="steps-section" id="langkah">
      <div className="section-heading">
        <p className="section-label">Langkah Berkarya</p>
        <h2>Dari Insight Kecil Menjadi Karya Berdampak</h2>
        <p>
          Alur sederhana ini membantu peserta bergerak dari ide mentah menuju
          karya yang lebih siap dipresentasikan dan dikembangkan.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;
