import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect fixed="top"  expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">RunyIND</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Remeras</Nav.Link>
                    <Nav.Link href="#">Bermudas</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
