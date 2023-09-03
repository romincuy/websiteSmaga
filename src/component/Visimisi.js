import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aboutsmaga from "./../asset/aboutsmaga.jpeg";

function Visimisi() {
  return (
    <Container className="my-lg-5 my-0">
      <Row className="lg-p-5" style={{ backgroundColor: "#F2F3F4" }}>
        <Col className="p-3 col-lg-6 col-12">
          <img src={Aboutsmaga} style={{ width: "100%" }} />
        </Col>
        <Col className="p-3 col-lg-6 col-12">
          <div className="">
            <h1 className="text-center">Visi dan Misi</h1>
            <p>
              Mewujudkan Insan yang Bertaqwa, Berakhlak Mulia, Berprestasi,
              Mandiri, dan Berdaya Saing Global serta Peduli Lingkungan.
            </p>
            <h5>MISI</h5>
            <ol>
              <li>
                Menanamkan keimanan, dan ketaqwaan serta menerapkan tuntunan
                agama melalui kegiatan pembiasaan dalam kehidupan sehari hari.
              </li>
              <li>
                Menciptakan insan yang unggul, dan terampil dalam prestasi
                akademik, olahraga, dan seni.
              </li>
              <li>
                Meningkatkan kecakapan hidup melalui kegiatan pembelajaran, dan
                pengembangan diri yang berwawasan gender.
              </li>
            </ol>
            <div className="btn btn-primary mx-auto">
            <a href="404.html" className="text-decoration-none text-light">Read More</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Visimisi;
