import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <strong>Employee Management System</strong>
        </Navbar.Brand>
        <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="custom-nav-link">
                Employees
            </Nav.Link>
            <Nav.Link as={Link} to="/employee" className="custom-nav-link">
                Post Employees
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
};

export default Header;
