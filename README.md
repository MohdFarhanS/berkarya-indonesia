# Berkarya untuk Indonesia | Mahreen Indonesia

Landing page ini dibuat sebagai project test kompetensi Web Developer Intern untuk Mahreen Indonesia. Website mengangkat tema **Berkarya untuk Indonesia** dan ditujukan untuk mengajak generasi muda Indonesia memanfaatkan kreativitas serta teknologi untuk memberikan dampak positif bagi masyarakat.

## Konsep

Website ini dirancang sebagai halaman ajakan untuk generasi muda Indonesia agar berani mengembangkan ide, membuat karya digital, dan memberikan kontribusi positif untuk masyarakat. Secara visual, landing page menggunakan dark theme dengan aksen merah dan gold agar tetap memiliki nuansa Mahreen Indonesia tanpa menggeser tema utama.

Struktur halaman tetap mengikuti kebutuhan tugas:

- Hero Section
- Tentang Program
- Call To Action

Selain itu, halaman juga dilengkapi bagian langkah berkarya dan modal form partisipasi untuk menambah interaksi.

## Fitur Utama

- Hero section dengan pesan utama "Berkarya untuk Indonesia".
- Copywriting yang menekankan generasi muda, kreativitas, teknologi, dan dampak positif bagi masyarakat.
- Branding visual Mahreen Indonesia melalui dark theme dan aksen merah-gold.
- Navigasi anchor ke bagian Beranda, Program, Langkah, dan Aksi.
- Section program interaktif:
  - Creative Lab
  - Digital Solution
  - Social Impact
- Tombol "Lihat Detail" untuk membuka informasi tambahan setiap program.
- Section langkah berkarya dari insight, solusi, sampai publikasi dampak.
- CTA "Mulai Berkarya" yang membuka modal partisipasi.
- Form partisipasi dengan validasi sederhana.
- Penyimpanan data form sementara di browser menggunakan `localStorage`.
- Layout responsif untuk desktop, tablet, dan mobile.

## Teknologi

- React
- Vite
- JavaScript
- CSS
- ESLint

## Struktur Folder

```text
berkarya-indonesia/
+-- public/
|   +-- favicon.svg
|   +-- icons.svg
+-- src/
|   +-- components/
|   |   +-- CtaSection.jsx
|   |   +-- Footer.jsx
|   |   +-- HeroSection.jsx
|   |   +-- JoinModal.jsx
|   |   +-- Navbar.jsx
|   |   +-- ProgramSection.jsx
|   |   +-- StepsSection.jsx
|   +-- data/
|   |   +-- programs.js
|   +-- App.css
|   +-- App.jsx
|   +-- main.jsx
+-- index.html
+-- package.json
+-- vite.config.js
```

## Cara Menjalankan

Pastikan Node.js dan npm sudah terpasang.

1. Install dependency:

```bash
npm install
```

2. Jalankan development server:

```bash
npm run dev
```

Jika menggunakan PowerShell dan `npm` terkena pembatasan execution policy, gunakan:

```bash
npm.cmd run dev
```

3. Buka URL yang muncul di terminal, biasanya:

```text
http://localhost:5173
```

## Script

```bash
npm run dev
```

Menjalankan project dalam mode development.

```bash
npm run build
```

Membuat versi production di folder `dist`.

```bash
npm run preview
```

Menjalankan preview hasil build.

```bash
npm run lint
```

Memeriksa kode dengan ESLint.

## Catatan Data Form

Form partisipasi pada modal belum terhubung ke backend. Saat pengguna mengirim data, aplikasi menyimpannya sementara di browser menggunakan key:

```text
berkaryaIndonesiaRegistration
```

Data ini akan tetap berada di browser pengguna selama `localStorage` belum dibersihkan.

## Pengembangan Konten

- Data program dapat diubah melalui `src/data/programs.js`.
- Teks dan struktur utama halaman berada di folder `src/components`.
- Styling global, dark theme, dan responsive layout berada di `src/App.css`.
- Judul halaman dapat diubah melalui `index.html`.

## Build Production

Untuk membuat build production, jalankan:

```bash
npm run build
```

Hasil build akan tersedia di folder `dist` dan dapat di-deploy ke layanan hosting statis seperti Vercel, Netlify, GitHub Pages, atau hosting lain yang mendukung static site.
