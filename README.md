# Berkarya Indonesia

Berkarya Indonesia adalah website landing page bertema gerakan anak muda untuk mengembangkan ide, membuat karya, dan memanfaatkan teknologi bagi Indonesia. Website ini dibuat dengan React dan Vite, dengan tampilan responsif bernuansa merah-putih serta beberapa interaksi sederhana seperti detail program dan form partisipasi.

## Fitur

- Hero section dengan ajakan utama untuk melihat program atau mulai berkarya.
- Navigasi anchor ke bagian Beranda, Program, Langkah, dan Aksi.
- Daftar program interaktif:
  - Ruang Kreativitas
  - Teknologi untuk Negeri
  - Kolaborasi Anak Muda
- Tombol "Lihat Detail" untuk membuka informasi tambahan tiap program.
- Section langkah berkarya dari ide hingga dampak.
- CTA "Gabung Sekarang" yang membuka modal partisipasi.
- Form modal dengan validasi sederhana untuk nama, email, dan minat program.
- Penyimpanan data pendaftaran sementara di browser menggunakan `localStorage`.
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

Form partisipasi pada modal belum terhubung ke backend. Saat pengguna mengirim data, aplikasi menyimpannya sementara di browser dengan key:

```text
berkaryaIndonesiaRegistration
```

Data ini akan tetap berada di browser pengguna selama `localStorage` belum dibersihkan.

## Pengembangan Konten

- Data program dapat diubah melalui `src/data/programs.js`.
- Teks dan struktur utama halaman berada di komponen dalam folder `src/components`.
- Styling global dan responsive layout berada di `src/App.css`.

## Build Production

Untuk membuat build production, jalankan:

```bash
npm run build
```

Hasil build akan tersedia di folder `dist` dan dapat di-deploy ke layanan hosting statis seperti Vercel, Netlify, GitHub Pages, atau hosting lain yang mendukung static site.
