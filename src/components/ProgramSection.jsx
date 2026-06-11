import { useState } from "react";
import { programs } from "../data/programs";

function ProgramSection() {
  const [selectedProgram, setSelectedProgram] = useState(null);

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

            <button
              type="button"
              className="program-detail-button"
              onClick={() =>
                setSelectedProgram((currentProgram) =>
                  currentProgram?.id === program.id ? null : program
                )
              }
              aria-expanded={selectedProgram?.id === program.id}
            >
              {selectedProgram?.id === program.id ? "Tutup Detail" : "Lihat Detail"}
            </button>
          </article>
        ))}
      </div>

      {selectedProgram && (
        <div className="program-detail-box">
          <div>
            <p className="section-label">Detail Program</p>
            <h3>
              {selectedProgram.icon} {selectedProgram.title}
            </h3>
            <p>{selectedProgram.detail}</p>

            <ul>
              {selectedProgram.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setSelectedProgram(null)}
            aria-label="Tutup detail program"
          >
            Tutup Detail
          </button>
        </div>
      )}
    </section>
  );
}

export default ProgramSection;
