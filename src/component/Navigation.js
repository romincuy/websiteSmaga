import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../asset/logo.png';

function Navigation() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" className="my-0 sticky-top" id="home">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} style={{ width: '8rem'}}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#berita">Berita</Nav.Link>
            <NavDropdown title="Tentang Kami" id="navbarScrollingDropdown">
              <NavDropdown.Item href="404.html">Profil</NavDropdown.Item>
              <NavDropdown.Item href="404.html">Ekstrakulikuler</NavDropdown.Item>
              <NavDropdown.Item href="404.html">Visi Misi</NavDropdown.Item>
              <NavDropdown.Item href="404.html">Fasilitas</NavDropdown.Item>
              <NavDropdown.Item href="404.html">Prestasi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#galeri">
              Galeri
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
