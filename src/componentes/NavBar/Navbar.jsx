import {Link, NavLink} from 'react-router-dom'
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
                <NavLink to="/categoria/gorras" className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >Remeras</NavLink>
                    <NavLink to="/categoria/remeras" className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >Bermudas</NavLink>

                    
                </Nav>
                <Nav>
                    { <Nav.Link href="#deets">🛒</Nav.Link> } 
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </Nav>

                     </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
