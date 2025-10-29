import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">📚 Book Store</Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add" className="nav-link">Add Book</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
