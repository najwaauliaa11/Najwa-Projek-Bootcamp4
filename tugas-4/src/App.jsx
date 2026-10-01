import Header from "./components/header";
import Card from "./components/card";
import "./App.css";

import avatar from "./assets/avatar.jpg";
import odyssey from "./assets/theodyssey.jpg";
import hailMary from "./assets/projecthailmarry.jpg";

function App() {
  return (
    <div className="halaman">
      <Header />

      <main id="koleksi">
        <div className="judul-koleksi">
          <div>
            <p className="label">THE COLLECTION</p>
            <h2>Daftar pilihan saya</h2>
          </div>

          <span className="jumlah-film">03 FILMS</span>
        </div>

        <div className="daftar-card">
          <Card
            nomor="01"
            gambar={avatar}
            tema="poster-avatar"
            teksPoster="AVATAR"
            kategori="MOVIE PICK / 01"
            nama="Avatar"
            deskripsi="Bagusss."
          />

          <Card
            nomor="02"
            gambar={odyssey}
            tema="poster-odyssey"
            teksPoster="THE ODYSSEY"
            kategori="MOVIE PICK / 02"
            nama="The Odyssey"
            deskripsi="Jujur deg-degan nontonnya, superrr recommended."
          />

          <Card
            nomor="03"
            gambar={hailMary}
            tema="poster-angkasa"
            teksPoster="PROJECT HAIL MARY"
            kategori="MOVIE PICK / 03"
            nama="Project Hail Mary"
            deskripsi="When yah di paksa ke luar angkasa juga."
          />
        </div>
      </main>
    </div>
  );
}

export default App;