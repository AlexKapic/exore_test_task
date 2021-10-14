import { Navbar, Container, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="/">EXORE</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/create">Create product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
