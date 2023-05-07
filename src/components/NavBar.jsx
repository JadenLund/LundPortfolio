import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(){
    return (<>
    <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
          <img
              alt=""
              src="https://www.freeiconspng.com/thumbs/letter-j-icon-png/letter-j-icon-png-26.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Jaden Lund</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
      </Navbar>
    </>
    )
}
