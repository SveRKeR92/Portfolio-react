import { Nav, Navbar, Container } from "react-bootstrap";

export default function CustomNav() {
  return (
    <>
      <Navbar expand="sm" variant="dark" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
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
