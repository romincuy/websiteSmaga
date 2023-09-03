import logosmaga from "./../asset/logo.png"

const Footer = () => {
    return (
        <footer id="footer" class="footer d-flex flex-column mt-4 pt-5 px-3 text-light" style={{ backgroundColor: '#221177'}}>
                <div class="top row d-flex justify-content-sm-around">
                    <div class="content col-lg-4 col-12 d-flex flex-column">
                        <img src={logosmaga} style={{ width: '13rem'}} />
                        <h3>Website SMAN 3 Bojonegoro</h3>
                        <p>Website ini karya siswa SMAN 3 Bojonegoro yang merupakan hasil belajar React JS.</p>
                    </div>
                    <div class="content d-flex flex-column col-lg-4 col-12 text-light ">
                        <h3>Useful Links</h3>
                        <a href="#home" className="text-decoration-none text-light">
                            Home</a>
                        <a href="#berita" className="text-decoration-none text-light">
                            Berita</a>
                        <a href="#tentang-kami" className="text-decoration-none text-light">
                            Tentang Kami</a>
                        <a href="#galeri" className="text-decoration-none text-light">
                            Galeri</a>
                    </div>
                    <div class="content  d-flex flex-column col-lg-4 col-12 mt-3">
                        <h4>Contact</h4>
                        <a href="mailto:rominmuh230@gmail.com" rel="noopener noreferrer" target="_blank" className="text-decoration-none text-light">
                            rominmuh230@gmail.com</a>
                        <a>
                            <i class="fas fa-map-marked-alt"></i>
                            East Java, Indonesia
                        </a>
                    </div>
                </div>
                <div class="bottom">
                    <div class="text-center p-4">
                        © 2023 Copyright:
                        <a class="text-reset fw-bold" href="#">Muhromin</a>
                    </div>
                </div>
            </footer>

    );
    };

    export default Footer;


