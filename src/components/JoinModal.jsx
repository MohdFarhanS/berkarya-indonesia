import { useCallback, useEffect, useState } from "react";

function JoinModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetModal = useCallback(() => {
    setForm({
      name: "",
      email: "",
      interest: "",
      message: "",
    });
    setError("");
    setIsSubmitted(false);
  }, []);

  const handleClose = useCallback(() => {
    resetModal();
    onClose();
  }, [onClose, resetModal]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.interest.trim()) {
      setError("Nama, email, dan minat program wajib diisi.");
      return;
    }

    const registrationData = {
      ...form,
      submittedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(
        "berkaryaIndonesiaRegistration",
        JSON.stringify(registrationData)
      );
    } catch {
      setError("Data belum bisa disimpan di browser. Coba lagi sebentar.");
      return;
    }

    setError("");
    setIsSubmitted(true);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="modal-overlay" onMouseDown={handleOverlayClick}>
      <div
        className="join-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-modal-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={handleClose}
          aria-label="Tutup modal"
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            <p className="section-label">Form Partisipasi</p>
            <h2 id="join-modal-title">Mulai Berkarya Bersama</h2>
            <p className="modal-description">
              Isi data singkat berikut untuk menunjukkan minat kamu dalam
              program Berkarya untuk Indonesia.
            </p>

            {error && <p className="form-error">{error}</p>}

            <form className="join-form" onSubmit={handleSubmit}>
              <label>
                Nama Lengkap
                <input
                  type="text"
                  name="name"
                  placeholder="Masukkan nama kamu"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="contoh@email.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                Minat Program
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pilih program</option>
                  <option value="Ruang Kreativitas">Ruang Kreativitas</option>
                  <option value="Teknologi untuk Negeri">
                    Teknologi untuk Negeri
                  </option>
                  <option value="Kolaborasi Anak Muda">
                    Kolaborasi Anak Muda
                  </option>
                </select>
              </label>

              <label>
                Pesan Singkat
                <textarea
                  name="message"
                  placeholder="Ceritakan ide atau ketertarikan kamu..."
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </label>

              <button type="submit" className="btn btn-primary">
                Kirim Pendaftaran
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h2 id="join-modal-title">Data Berhasil Disimpan</h2>
            <p>
              Terima kasih, {form.name}. Data minat kamu sudah tersimpan
              sementara di browser menggunakan localStorage.
            </p>

            <button type="button" className="btn btn-primary" onClick={handleClose}>
              Selesai
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JoinModal;
