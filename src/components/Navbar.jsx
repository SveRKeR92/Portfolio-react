import { Nav, Navbar, Container } from "react-bootstrap";
import '../sass/helpers/_reset.scss';
import { Link } from "react-router-dom";
const CustomNav= () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Maxime - Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/projets">Projets</Nav.Link>
              <Nav.Link as={Link} to="/cv">Mon CV</Nav.Link>
              <Nav.Link as={Link} to="/quizz">Quizz</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNav;
