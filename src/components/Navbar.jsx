import { Nav, Navbar, Container } from "react-bootstrap";
import '../sass/helpers/_reset.scss';

export default function CustomNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#">Maxime - Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projets">Projets</Nav.Link>
              <Nav.Link href="/cv">Mon CV</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
