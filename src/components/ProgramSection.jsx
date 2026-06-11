import { programs } from "../data/programs";

function ProgramSection() {
  return (
    <section className="program-section" id="program">
      <div className="section-heading">
        <p className="section-label">Tentang Program</p>
        <h2>Mengubah Ide Menjadi Karya Nyata</h2>
        <p>
          Program ini dirancang untuk menumbuhkan kreativitas, kemampuan
          berpikir, komunikasi, dan potensi anak muda Indonesia melalui
          pemanfaatan teknologi.
        </p>
      </div>

      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.id}>
            <div className="program-icon">{program.icon}</div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProgramSection;