import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/fav-icon.png'
import "../styles/navbar.css"

export default function NavBar() {
  return (
    <Navbar expand="lg" className='navbar-style'>
      <Container>
        <Navbar.Brand href="/">
            <img 
                src={Logo}
                width="30"
                height="30"
                className='d-inline-block align-top'
                alt="Dillon's Porfolio Logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="GitHub Links" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://github.com/dilbot-cot">My Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/repos">GitHub Repo List</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact">Contact</Nav.Link>


            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}