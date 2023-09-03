import Cardfasilitas from "./Cardfasilitas";
import Hero from "./Hero";
import Slide from "./Slide";
import fasilitas1 from "./../asset/card1.jpg";
import fasilitas2 from "./../asset/card2.jpg";
import fasilitas3 from "./../asset/card3.jpg";
import Visimisi from "./Visimisi";
import Cardjumlah from "./Cardjumlah";
import Cardgaleri from "./Cardgaleri";
import galeri1 from "./../asset/galeri1.jpg";
import galeri2 from "./../asset/galeri2.jpg";
import galeri3 from "./../asset/galeri3.jpg";
import galeri4 from "./../asset/galeri4.jpg";
import galeri5 from "./../asset/galeri5.jpg";
import galeri6 from "./../asset/galeri6.jpg";
import Carduniversitas from "./Carduniversitas";
import universitas1 from "./../asset/universitas1.jpg";
import Cardberita from "./Cardberita";
import berita1 from "./../asset/hut-ri.jpeg";
import berita2 from "./../asset/isra'-mi'raj.jpeg";
import berita3 from "./../asset/sfl.jpeg";

const Maincontent = () => {
  return (
    <div>
      <Hero/>
      <Slide/>
      <Visimisi />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>FASILITAS SEKOLAH</h1>
            <p>
              Sekolah Menengah Atas (SMA) Negeri 3 Bojonegoro Memiliki Fasilitas
              lengkap mulai dari laboratorium, perpustakaan, dll.
            </p>
          </div>
          <div className="col-lg-4 col-12">
            <Cardfasilitas image={fasilitas1} fasilitas="Ruang Kelas" />
          </div>
          <div className="col-lg-4 col-12">
            <Cardfasilitas image={fasilitas2} fasilitas="Perpustakaan" />
          </div>
          <div className="col-lg-4 col-12">
            <Cardfasilitas image={fasilitas3} fasilitas="Tempat Parkir" />
          </div>
        </div>
        <div className="btn btn-primary d-flex justify-content-center w-full mt-4">{" "}
            <a href="404.html" className="text-decoration-none text-light">Selengkapnya</a>{" "}
        </div>
      </div>
      <div className="container-fluid my-5 mx-0">
        <div className="row bg-primary p-auto py-4 p-lg-5 g-4">
          <div className="col-lg-3 col-12">
            <Cardjumlah jumlah="790" siapa="Peserta Didik" />
          </div>
          <div className="col-lg-3 col-12">
            <Cardjumlah jumlah="49" siapa="Guru Pengajar" />
          </div>
          <div className="col-lg-3 col-12">
            <Cardjumlah jumlah="20" siapa="Tenaga Pendidik" />
          </div>
          <div className="col-lg-3 col-12">
            <Cardjumlah jumlah="15" siapa="Ekstrakulikuler" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center mb-3" id="galeri">
          <h1>GALERI</h1>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 mb-3">
              <Cardgaleri galeri={galeri1} />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Cardgaleri galeri={galeri2} />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Cardgaleri galeri={galeri3} />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Cardgaleri galeri={galeri4} />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Cardgaleri galeri={galeri5} />
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <Cardgaleri galeri={galeri6} />
            </div>
          </div>
          <div className="btn btn-primary d-flex justify-content-center w-full mt-2">{" "}
            <a href="404.html" className="text-decoration-none text-light">Selengkapnya</a>{" "}
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5 px-4 mt-5">
        <div classNamwe="container">
          <div className="col-12">
            <Carduniversitas universitas={universitas1} />
          </div>
        </div>
      </div>
      <div id="berita" className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>BERITA</h1>
            <p>
              Update Informasi Terbaru seputar Sekolah Menengah Atas (SMA)
              Negeri 3 Bojonegoro.
            </p>
          </div>
          <div className="col-lg-4 col-12 mb-lg-0 mb-2">
            <Cardberita
              image={berita1}
              judulBerita="Upacara Peringatan HUT RI ke-78"
              deskripsiBerita="Kamis, 17 Agustus 2023 SMAN 3 Bojonegoro mengadakan upacara peringatan HUT RI ke-78."
            />
          </div>
          <div className="col-lg-4 col-12 mb-lg-0 mb-2">
            <Cardberita
              image={berita2}
              judulBerita="Peringatan Isra' Mi'raj"
              deskripsiBerita="Pada hari Jum at, 24 Februari 2023 SMAN 3 Bojonegoro memperingati Isra' Mi'raj Nabi Muhammad SAW 1444 H."
            />
          </div>
          <div className="col-lg-4 col-12 mb-lg-0 mb-2">
            <Cardberita
              image={berita3}
              judulBerita="SFL 2022"
              deskripsiBerita="Pada tanggal 14-20 Desember 2022 SMAN 3 Bojonegoro mengadakan kompetisi futsal antar kelas. kegiatan ini diadakan setelah PAT."
            />
          </div>
        </div>
        <div className="btn btn-primary d-flex justify-content-center w-full mt-4" >
        {" "}
            <a href="404.html" className="text-decoration-none text-light">Selengkapnya</a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
