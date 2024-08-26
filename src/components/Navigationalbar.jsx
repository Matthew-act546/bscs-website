import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigationalbar() {
    
    return (
        
        <Navbar key={false} expand={false} className="navbar-gradient">
          <Container fluid>
            <div className='navbar-content' >
              <a href="#home">
                <img src="../assets/images/cslogo.png" id='logo' alt="csLogo" />
              </a>
              <Navbar.Brand className='navbar-title' href="#home">Computer Science Society</Navbar.Brand>
            </div>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} className="offcanvas-style me-3" > 
              <FontAwesomeIcon className='icon' icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${false}`}>
                  Computer Science Society
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Form className="d-flex m-2">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action2">Announcements</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
        
        // <Navbar className="navbar-gradient">
        //     <Container>
        //         {/* <img src="../assets/images/cslogo.png" alt="sd" /> */}
        //         <Navbar.Brand className='navbar-title' href="#home">Computer Science Society</Navbar.Brand>
        //         <Navbar.Toggle />
        //         <Navbar.Collapse className="justify-content-end">
                
                
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}

export default Navigationalbar