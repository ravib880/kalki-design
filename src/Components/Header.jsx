import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../Assets/sass/header.scss';

function Header() {
    return (
        <div>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3 main_header">
                    <Container fluid>

                        {/* Left Side */}

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>

                        {/* Logo */}

                        <div className="d-flex flex-grow-1 justify-content-start justify-content-md-center ps-3 ps-md-0">
                            <Navbar.Brand>
                                <Link to="/" className='logoimg'>
                                    <img src={require('../Assets/Img/logo.png')} alt="Logo" />
                                </Link>
                            </Navbar.Brand>
                        </div>

                        {/* Right Side */}

                        <div className="d-flex justify-content-end pe-3 hdrcontent align-items-center">
                            <div className="d-none d-lg-flex searchmenu">
                                <input type="text" id='search' name='search' className='ps-2' placeholder='Search Product' />
                                <label htmlFor="search">
                                    <i className="bi bi-search"></i>
                                </label>
                            </div>
                            <Link to='/'><i class="bi bi-camera-video"></i></Link>
                            <Link to='/'><i class="bi bi-whatsapp"></i></Link>
                            <Link to='/'><i class="bi bi-person-circle"></i></Link>
                            <Link to='/'><i class="bi bi-cart"></i></Link>
                            <Link to='/'><i class="bi bi-heart"></i></Link>
                        </div>
                    </Container>
                    <div className='d-flex largesearch d-lg-none w-100 m-2 p-2'>
                        <label htmlFor="lgsearch"><i className="bi bi-search "></i></label>
                        <input type="text" className='w-100 px-2' id="lgsearch" placeholder='search product here...' />
                    </div>
                </Navbar>
            ))}
        </div>
    )
}

export default Header
