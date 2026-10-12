
import { useState } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Routes,
  Route,
  useNavigate,
} from 'react-router';
import './App.css';

const daftarBuku = [
  {
    judul: 'Atomic Habits',
    penulis: 'James Clear',
    kategori: 'Pengembangan Diri',
    deskripsi:
      'Perubahan kecil yang memberikan hasil luar biasa. Pelajari cara membangun kebiasaan baik dan meninggalkan kebiasaan buruk.',
    harga: 'Rp89.000',
    gambar:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85',
  },
  {
    judul: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    kategori: 'Novel',
    deskripsi:
      'Kisah inspiratif tentang persahabatan, pendidikan, dan semangat meraih cita-cita.',
    harga: 'Rp75.000',
    gambar:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85',
  },
  {
    judul: 'Laut Bercerita',
    penulis: 'Leila S. Chudori',
    kategori: 'Fiksi Sejarah',
    deskripsi:
      'Novel tentang persahabatan, keluarga, dan perjuangan yang meninggalkan kesan mendalam.',
    harga: 'Rp99.000',
    gambar:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=85',
  },
];

function AlbumContent({ pilihBuku }) {
  const [bukuUtama, setBukuUtama] = useState(0);
  const buku = daftarBuku[bukuUtama];

  function bukuBerikutnya() {
    setBukuUtama((index) => (index + 1) % daftarBuku.length);
  }

  function bukuSebelumnya() {
    setBukuUtama(
      (index) => (index - 1 + daftarBuku.length) % daftarBuku.length
    );
  }

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">TEMUKAN BUKU FAVORITMU</span>
          <h1>{buku.judul}: Temukan Cerita dan Inspirasi Baru</h1>
          <p>{buku.deskripsi}</p>

          <div className="hero-buttons">
            <button
              className="signup-btn hero-buy"
              onClick={() => alert(`Kamu memilih buku ${buku.judul}`)}
            >
              Beli Sekarang
            </button>

            <button
              className="detail-btn"
              onClick={() => pilihBuku(bukuUtama)}
            >
              Detail Buku
            </button>
          </div>

          <div className="hero-pagination">
            <button
              type="button"
              className="detail-btn"
              onClick={bukuSebelumnya}
              aria-label="Buku sebelumnya"
            >
              ←
            </button>

            <span>
              {bukuUtama + 1} / {daftarBuku.length}
            </span>

            <button
              type="button"
              className="detail-btn"
              onClick={bukuBerikutnya}
              aria-label="Buku berikutnya"
            >
              →
            </button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src={buku.gambar} alt={buku.judul} className="hero-image" />
          <div className="image-caption">
            <span>Buku Pilihan</span>
            <strong>{buku.judul}</strong>
            <small>{buku.penulis}</small>
          </div>
        </div>
      </section>

      <section className="book-section" id="koleksi">
        <div className="section-heading">
          <div>
            <span className="hero-label">KOLEKSI KAMI</span>
            <h2>Buku untuk Setiap Cerita</h2>
            <p>Pilih bacaan yang cocok untuk menemani harimu.</p>
          </div>
        </div>

        <div className="book-grid">
          {daftarBuku.map((item, index) => (
            <article className="book-card" key={item.judul}>
              <img src={item.gambar} alt={item.judul} />

              <div className="book-card-body">
                <span className="book-category">{item.kategori}</span>
                <h3>{item.judul}</h3>
                <p>Oleh {item.penulis}</p>

                <div className="book-card-bottom">
                  <strong>{item.harga}</strong>
                  <button onClick={() => pilihBuku(index)}>
                    Lihat Detail
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function BookContent({ bukuTerpilih, kembali }) {
  const buku = daftarBuku[bukuTerpilih] || daftarBuku[0];

  return (
    <section className="detail-page">
      <button className="back-button" onClick={kembali}>
        ← Kembali ke Home
      </button>

      <div className="detail-layout">
        <img src={buku.gambar} alt={buku.judul} />

        <div>
          <span className="hero-label">{buku.kategori}</span>
          <h1>{buku.judul}</h1>
          <p className="detail-author">Ditulis oleh {buku.penulis}</p>
          <p>{buku.deskripsi}</p>
          <h2 className="detail-price">{buku.harga}</h2>

          <button
            className="signup-btn"
            onClick={() => alert(`Kamu memilih buku ${buku.judul}`)}
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}

function TeamContent() {
  const anggota = [
    {
      nama: 'Muhtari Anwar',
      jabatan: 'Web Developer',
      foto: '/images/anwar.jpeg',
    },
    {
      nama: 'Fadel Yihua',
      jabatan: 'Desain dan Konten',
      foto: '/images/fadel.jpg',
    },
    {
      nama: 'Ahmad Ghazy',
      jabatan: 'Pengelolaan Buku',
      foto: '/images/ghazy.jpg',
    },
  ];

  return (
    <section className="subpage">
      <span className="hero-label">DI BALIK BOOKSTORE</span>
      <h1>Kenalan dengan Tim Kami</h1>

      <p className="subpage-intro">
        Kami ingin membuat pengalaman menemukan buku menjadi lebih mudah,
        nyaman, dan menyenangkan bagi semua pembaca.
      </p>

      <div className="team-grid">
        {anggota.map((orang) => (
          <article className="team-card" key={orang.nama}>
            <img
              src={orang.foto}
              alt={`Foto ${orang.nama}`}
              className="team-avatar team-photo"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />

            <h3>{orang.nama}</h3>
            <p>{orang.jabatan}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactContent() {
  function kirimPesan(event) {
    event.preventDefault();
    alert('Terima kasih! Pesan kamu berhasil disiapkan.');
    event.currentTarget.reset();
  }

  return (
    <section className="subpage contact-page">
      <span className="hero-label">KAMI SIAP MEMBANTU</span>
      <h1>Hubungi Bookstore</h1>

      <p className="subpage-intro">
        Punya pertanyaan atau saran tentang koleksi buku kami? Kirim pesan
        melalui formulir berikut.
      </p>

      <form className="contact-form" onSubmit={kirimPesan}>
        <label htmlFor="nama">Nama lengkap</label>
        <input
          id="nama"
          name="nama"
          type="text"
          placeholder="Masukkan nama kamu"
          required
        />

        <label htmlFor="email">Alamat email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="nama@email.com"
          required
        />

        <label htmlFor="pesan">Pesan</label>
        <textarea
          id="pesan"
          name="pesan"
          rows="5"
          placeholder="Tulis pesan kamu di sini..."
          required
        />

        <button className="signup-btn" type="submit">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}

function FooterContent() {
  return (
    <footer className="site-footer">
      <strong>▣ bookstore</strong>
      <p>Temukan buku, temukan cerita.</p>
      <small>© 2026 Bookstore. Dibuat oleh Muhtari Anwar.</small>
    </footer>
  );
}

function AppLayout() {
  const [bukuTerpilih, setBukuTerpilih] = useState(0);
  const navigate = useNavigate();

  function bukaDetail(index) {
    setBukuTerpilih(index);
    navigate('/book');
    window.scrollTo(0, 0);
  }

  function kembaliHome() {
    navigate('/');
    window.scrollTo(0, 0);
  }

  return (
    <div className="app-shell">
      <header className="bookstore-navbar">
        <div className="navbar-inner">
          <Link to="/" className="brand-logo">
            <span className="brand-icon">▣</span> bookstore
          </Link>

          <nav className="navbar-menu">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'menu-current' : ''
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/book"
              className={({ isActive }) =>
                isActive ? 'menu-current' : ''
              }
            >
              Book
            </NavLink>

            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? 'menu-current' : ''
              }
            >
              Team
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'menu-current' : ''
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="navbar-actions">
            <button
              className="login-btn"
              onClick={() => alert('Fitur Login belum diaktifkan.')}
            >
              Login
            </button>

            <button
              className="signup-btn"
              onClick={() => alert('Fitur Register belum diaktifkan.')}
            >
              Register
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<AlbumContent pilihBuku={bukaDetail} />}
          />

          <Route
            path="/book"
            element={
              <BookContent
                bukuTerpilih={bukuTerpilih}
                kembali={kembaliHome}
              />
            }
          />

          <Route path="/team" element={<TeamContent />} />

          <Route path="/contact" element={<ContactContent />} />

          <Route
            path="*"
            element={
              <section className="subpage">
                <h1>Halaman tidak ditemukan</h1>
                <button className="signup-btn" onClick={kembaliHome}>
                  Kembali ke Home
                </button>
              </section>
            }
          />
        </Routes>
      </main>

      <FooterContent />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
