# MovieList 🎬

Website sederhana berisi daftar film pilihan saya, dibuat untuk Tugas Individu Week 4 ISB II menggunakan React dan Vite.

## Fitur

- Menampilkan kartu film beserta poster dan deskripsinya.
- Tombol Like untuk menambah jumlah suka.
- Setiap film memiliki jumlah Like masing-masing.
- Tampilan menyesuaikan ukuran layar desktop dan HP.

Jumlah Like akan kembali menjadi nol ketika halaman dimuat ulang.

## Penerapan React

- **Component:** Header dan Card dibuat sebagai komponen terpisah.
- **Props:** Data film dikirim dari App.jsx ke komponen Card.
- **State:** useState digunakan untuk menyimpan dan memperbarui jumlah Like.
- **Reusable Component:** Komponen Card digunakan beberapa kali dengan data film berbeda.

## Teknologi

- React
- Vite
- JavaScript
- CSS

## Cara Menjalankan

Pastikan Node.js dan npm sudah terpasang.

1. Unduh atau clone repository ini.
2. Buka folder project di VS Code.
3. Buka terminal pada folder yang berisi package.json.
4. Instal dependency:

   ```bash
   npm install
   ```

5. Jalankan project:

   ```bash
   npm run dev
   ```

6. Buka alamat lokal yang muncul di terminal melalui browser.

## Cara Menggunakan

Lihat daftar film, lalu klik tombol Like pada film yang kamu suka. Jumlah Like pada kartu tersebut akan bertambah tanpa memuat ulang halaman.

## Pembuat

Najwa Aulia Nusa Putri