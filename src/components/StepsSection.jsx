const steps = [
  {
    number: "01",
    title: "Temukan Ide",
    description:
      "Mulai dari masalah sederhana di sekitar, lalu ubah menjadi gagasan yang bisa dikembangkan.",
  },
  {
    number: "02",
    title: "Kembangkan Karya",
    description:
      "Gunakan kreativitas dan teknologi untuk membuat karya yang memiliki nilai manfaat.",
  },
  {
    number: "03",
    title: "Bagikan Dampak",
    description:
      "Publikasikan karya agar dapat menginspirasi dan memberikan manfaat bagi lebih banyak orang.",
  },
];

function StepsSection() {
  return (
    <section className="steps-section" id="langkah">
      <div className="section-heading">
        <p className="section-label">Langkah Berkarya</p>
        <h2>Dari Ide Kecil Menjadi Dampak Besar</h2>
        <p>
          Setiap karya tidak harus dimulai dari hal besar. Yang terpenting
          adalah berani memulai, mengembangkan, dan membagikannya.
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