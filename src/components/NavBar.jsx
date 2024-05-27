import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/fav-icon.png'
import "../styles/navbar.css"

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#abount">About</Nav.Link>
                <NavDropdown title="GitHub Links" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://github.com/dilbot-cot">My Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="link1">Repo 1</NavDropdown.Item>
                    <NavDropdown.Item href="link2">Repo 2</NavDropdown.Item>
                    <NavDropdown.Item href="link3">Repo 3</NavDropdown.Item>

                </NavDropdown>
                <Nav.Link href="#contact">Contact</Nav.Link>


            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="#link">About Me</Nav.Link>
//             <NavDropdown title="GitHub Links" id="github-dropdown">
//               <NavDropdown.Item href="#action/3.1">Repo 1</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Repo 2</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Repo 3</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="https://github.com/dilbot-cot">Profile</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#link">Contact Me</Nav.Link>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );