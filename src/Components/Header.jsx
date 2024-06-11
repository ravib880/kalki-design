import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);
    const location = useLocation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cartShow, setCartShow] = useState(false);

    const cartHandleClose = () => setCartShow(false);
    const cartHandleShow = () => setCartShow(true);

    useEffect(() => {
        if (location.pathname !== '/' && location.pathname !== '/home' && location.pathname !== '/women' && location.pathname !== '/men' && location.pathname !== '/bridal' && location.pathname !== '/lux') {
            handleCloseOffcanvas();
            handleClose();
        }
    }, [location])

    const combinedClose = () => {
        handleCloseOffcanvas();
        handleClose();
    };

    const womenSubHeader = (
        <Container fluid className='sub_heading fw-normal d-grid d-lg-flex justify-content-start justify-content-xxl-between text-uppercase gap-3 py-3 py-lg-0 p-xl-0'>
            <Link to="/products">BestSeller</Link>
            <Link to="/saree" onClick={combinedClose}>
                Saree
                <ul className='sub_menu fw-bold '>
                    <li>
                        Style
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>See All Saree</li>
                            <li>Ready to Ship Saree</li>
                            <li>Embroidered Saree</li>
                            <li>Designer Saree</li>
                            <li>Sequin Saree</li>
                            <li>Ready Pleated Saree</li>
                            <li>Plain Saree with Border</li>
                            <li>Plain Saree</li>
                            <li>Classic Saree</li>
                            <li>Printed Saree</li>
                            <li>Embellished Saree</li>
                            <li>Handloom Saree</li>
                        </ul>
                    </li>
                    <li>
                        Occasion
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Bridal Saree</li>
                            <li>Party Wear Saree</li>
                            <li>Wedding Saree</li>
                            <li>Festive Saree</li>
                            <li>Haldi Saree</li>
                        </ul>
                    </li>
                    <li>
                        Fabric
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Organza Saree</li>
                            <li>Tissue Saree</li>
                            <li>Linen Sarees</li>
                            <li>Banarasi Saree</li>
                            <li>Silk Saree</li>
                            <li>Chiffon Saree</li>
                            <li>Georgette Saree</li>
                            <li>Satin Saree</li>
                            <li>Chanderi Saree</li>
                            <li>Chikankari Sarees</li>
                        </ul>
                    </li>
                    <li>
                        Quick Link
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Shape Wear</li>
                            <li>Saree under INR 12000</li>
                            <li>Ready Blouse Saree</li>
                            <li>Best Sellers Saree</li>
                            <li>Saree Blouse</li>
                            <li>Sale Saree</li>
                        </ul>
                    </li>
                    <li>
                        Color
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Black Saree</li>
                            <li>Pink Saree</li>
                            <li>Red Saree</li>
                            <li>Green Saree</li>
                            <li>Blue Saree</li>
                        </ul>
                    </li>
                    <li className='catImage'>
                        <img src={require('../Assets/Img/pink_resham_work_organza_saree_with_unstitched_blouse-sg227110_11_.jpg')} alt="" />
                    </li>
                </ul>
            </Link>
            <Link to="/" onClick={combinedClose}>
                Salwar Kameez
                <ul className='sub_menu fw-bold '>
                    <li>
                        Style
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>See All salavar kameez</li>
                            <li>Ready to Ship salavar kameez</li>
                            <li>Embroidered salavar kameez</li>
                            <li>Designer salavar kameez</li>
                            <li>Sequin salavar kameez</li>
                            <li>Ready Pleated salavar kameez</li>
                            <li>Plain salavar kameez with Border</li>
                            <li>Plain salavar kameez</li>
                            <li>Classic salavar kameez</li>
                            <li>Printed salavar kameez</li>
                            <li>Embellished salavar kameez</li>
                            <li>Handloom salavar kameez</li>
                        </ul>
                    </li>
                    <li>
                        Occasion
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Bridal salavar kameez</li>
                            <li>Party Wear salavar kameez</li>
                            <li>Wedding salavar kameez</li>
                            <li>Festive salavar kameez</li>
                            <li>Haldi salavar kameez</li>
                        </ul>
                    </li>
                    <li>
                        Fabric
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Organza salavar kameez</li>
                            <li>Tissue salavar kameez</li>
                            <li>Linen salavar kameezs</li>
                            <li>Banarasi salavar kameez</li>
                            <li>Silk salavar kameez</li>
                            <li>Chiffon salavar kameez</li>
                            <li>Georgette salavar kameez</li>
                            <li>Satin salavar kameez</li>
                            <li>Chanderi salavar kameez</li>
                            <li>Chikankari salavar kameezs</li>
                        </ul>
                    </li>
                    <li>
                        Quick Link
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Shape Wear</li>
                            <li>salavar kameez under INR 12000</li>
                            <li>Ready Blouse salavar kameez</li>
                            <li>Best Sellers salavar kameez</li>
                            <li>salavar kameez Blouse</li>
                            <li>Sale salavar kameez</li>
                        </ul>
                    </li>
                    <li>
                        Color
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Black salavar kameez</li>
                            <li>Pink salavar kameez</li>
                            <li>Red salavar kameez</li>
                            <li>Green salavar kameez</li>
                            <li>Blue salavar kameez</li>
                        </ul>
                    </li>
                    <li className='catImage'>
                        <img src={require('../Assets/Img/pink_embroidered_choli_with_exquisite_lehenga_an-sg220433_6_.jpg')} alt="" />
                    </li>
                </ul>
            </Link>
            <Link to="/" onClick={combinedClose}>
                Lehengas
                <ul className='sub_menu fw-bold '>
                    <li>
                        Style
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>See All lehengas</li>
                            <li>Ready to Ship lehengas</li>
                            <li>Embroidered lehengas</li>
                            <li>Designer lehengas</li>
                            <li>Sequin lehengas</li>
                            <li>Ready Pleated lehengas</li>
                            <li>Plain lehengas with Border</li>
                            <li>Plain lehengas</li>
                            <li>Classic lehengas</li>
                            <li>Printed lehengas</li>
                            <li>Embellished lehengas</li>
                            <li>Handloom lehengas</li>
                        </ul>
                    </li>
                    <li>
                        Occasion
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Bridal lehengas</li>
                            <li>Party Wear lehengas</li>
                            <li>Wedding lehengas</li>
                            <li>Festive lehengas</li>
                            <li>Haldi lehengas</li>
                        </ul>
                    </li>
                    <li>
                        Fabric
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Organza lehengas</li>
                            <li>Tissue lehengas</li>
                            <li>Linen lehengass</li>
                            <li>Banarasi lehengas</li>
                            <li>Silk lehengas</li>
                            <li>Chiffon lehengas</li>
                            <li>Georgette lehengas</li>
                            <li>Satin lehengas</li>
                            <li>Chanderi lehengas</li>
                            <li>Chikankari lehengass</li>
                        </ul>
                    </li>
                    <li>
                        Quick Link
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Shape Wear</li>
                            <li>lehengas under INR 12000</li>
                            <li>Ready Blouse lehengas</li>
                            <li>Best Sellers lehengas</li>
                            <li>lehengas Blouse</li>
                            <li>Sale lehengas</li>
                        </ul>
                    </li>
                    <li>
                        Color
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Black lehengas</li>
                            <li>Pink lehengas</li>
                            <li>Red lehengas</li>
                            <li>Green lehengas</li>
                            <li>Blue lehengas</li>
                        </ul>
                    </li>
                    <li className='catImage'>
                        <img src={require('../Assets/Img/multicolor_embroidered_lehenga_set_with_sequin_work-sg195857_7_.jpg')} alt="" />
                    </li>
                </ul>
            </Link>
            <Link to="/" onClick={combinedClose}>Co-ords sets</Link>
            <Link to="/" onClick={combinedClose}>Kurtis</Link>
            <Link to="/" onClick={combinedClose}>Blouse</Link>
            <Link to="/" onClick={combinedClose}>Bridal</Link>
            <Link to="/" onClick={combinedClose}>Men</Link>
            <Link to="/" onClick={combinedClose}>
                Kids
                <ul className='sub_menu fw-bold '>
                    <li>
                        Boys
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>See All</li>
                            <li>Kurtas Set</li>
                            <li>Nehru Jacket Sets</li>
                            <li>Sherwani</li>
                        </ul>
                    </li>
                    <li>
                        Girls
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>See All</li>
                            <li>Lehengas</li>
                            <li>Gowns</li>
                            <li>Salwar Kameez</li>
                        </ul>
                    </li>
                    <li>
                        Occasion
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Wedding</li>
                            <li>Festivals</li>
                        </ul>
                    </li>
                    <li>
                        Quick Link
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Offers on Kid's Wear</li>
                            <li>Trending Kid's Wear</li>
                        </ul>
                    </li>
                    <li className='catImage'>
                        <img src={require('../Assets/Img/250x350-desk-kids-15-05-24.jpg')} alt="" />
                    </li>
                </ul>
            </Link>
            <Link to="/" onClick={combinedClose}>Weaves</Link>
            <Link to="/" onClick={combinedClose}>Accessories</Link>
            <Link to="/" onClick={combinedClose}>Collection</Link>
            <Link to="/" onClick={combinedClose}>New</Link>
            <Link to="/" onClick={combinedClose}>
                Sale
                <ul className='sub_menu fw-bold '>
                    <li>
                        Style
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>See All lehengas</li>
                            <li>Ready to Ship lehengas</li>
                            <li>Embroidered lehengas</li>
                            <li>Designer lehengas</li>
                            <li>Sequin lehengas</li>
                            <li>Ready Pleated lehengas</li>
                            <li>Plain lehengas with Border</li>
                            <li>Plain lehengas</li>
                            <li>Classic lehengas</li>
                            <li>Printed lehengas</li>
                            <li>Embellished lehengas</li>
                            <li>Handloom lehengas</li>
                        </ul>
                    </li>
                    <li className='catImage'>
                        <img src={require('../Assets/Img/wine_organza_saree_with_unstitched_blouse-sg214665_11_.jpg')} alt="" />
                    </li>
                </ul>
            </Link>
        </Container>
    );

    const menSubHeader = (
        <Container fluid className='sub_heading fw-normal d-grid d-lg-flex justify-content-start justify-content-xxl-between text-uppercase gap-3 py-3 py-lg-0 p-xl-0'>
            <Link to="/men" onClick={combinedClose}>See all</Link>
            <Link to="/" onClick={combinedClose}>
                Kurta jacket set
                <ul className='sub_menu fw-bold '>
                    <li>
                        Style
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>See All Saree</li>
                            <li>Ready to Ship Saree</li>
                            <li>Embroidered Saree</li>
                            <li>Designer Saree</li>
                            <li>Sequin Saree</li>
                            <li>Ready Pleated Saree</li>
                            <li>Plain Saree with Border</li>
                            <li>Plain Saree</li>
                            <li>Classic Saree</li>
                            <li>Printed Saree</li>
                            <li>Embellished Saree</li>
                            <li>Handloom Saree</li>
                        </ul>
                    </li>
                    <li>
                        Occasion
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Bridal Saree</li>
                            <li>Party Wear Saree</li>
                            <li>Wedding Saree</li>
                            <li>Festive Saree</li>
                            <li>Haldi Saree</li>
                        </ul>
                    </li>
                    <li>
                        Fabric
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Organza Saree</li>
                            <li>Tissue Saree</li>
                            <li>Linen Sarees</li>
                            <li>Banarasi Saree</li>
                            <li>Silk Saree</li>
                            <li>Chiffon Saree</li>
                            <li>Georgette Saree</li>
                            <li>Satin Saree</li>
                            <li>Chanderi Saree</li>
                            <li>Chikankari Sarees</li>
                        </ul>
                    </li>
                    <li>
                        Quick Link
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Shape Wear</li>
                            <li>Saree under INR 12000</li>
                            <li>Ready Blouse Saree</li>
                            <li>Best Sellers Saree</li>
                            <li>Saree Blouse</li>
                            <li>Sale Saree</li>
                        </ul>
                    </li>
                    <li>
                        Color
                        <ul className='peta_menu p-0 pt-3 text-capitalize fw-light'>
                            <li>Black Saree</li>
                            <li>Pink Saree</li>
                            <li>Red Saree</li>
                            <li>Green Saree</li>
                            <li>Blue Saree</li>
                        </ul>
                    </li>
                    <li className='catImage'>
                        <img src={require('../Assets/Img/250x350-desk-mens-15-05-24.jpg')} alt="" />
                    </li>
                </ul>
            </Link>
            <Link to="/" onClick={combinedClose}>Kurta sets</Link>
            <Link to="/" onClick={combinedClose}>Tuxedos</Link>
            <Link to="/" onClick={combinedClose}>Jodhpuris</Link>
            <Link to="/" onClick={combinedClose}>Sherwanis</Link>
            <Link to="/" onClick={combinedClose}>Indowestern</Link>
            <Link to="/" onClick={combinedClose}>New arrival</Link>
            <Link to="/" onClick={combinedClose}>Sale</Link>
            <Link to="/" onClick={combinedClose}>Kids</Link>
        </Container>
    );

    return (
        <div>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className={location.pathname === '/bridal' ? "transparentHeader main_header" : 'main_header'}>
                    <Container fluid className='sub_header px-xl-5 d-flex justify-content-between'>

                        {/* Left Side */}

                        <div className='content1'>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShowOffcanvas} />
                            <Navbar.Offcanvas
                                show={showOffcanvas}
                                onHide={handleCloseOffcanvas}
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>
                                        <div className="content2 d-flex justify-content-center">
                                            <Navbar.Brand>
                                                <Link to="/" className='logoimg' onClick={handleCloseOffcanvas}>
                                                    <img src={require('../Assets/Img/logo.png')} alt="Logo" />
                                                </Link>
                                            </Navbar.Brand>
                                        </div>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='py-1'>
                                    <Nav className="justify-content-between justify-content-lg-start flex-wrap-1 text-uppercase pe-0 pe-lg-3 NavLinkCss">
                                        <Nav.Item className='d-grid' onClick={handleShow}>
                                            <Nav.Link className={location.pathname === '/' ? 'catImageHover catImageContain d-block d-lg-none p-0' : 'catImageContain d-block d-lg-none p-0'} as={Link} to='/'>
                                                <img src={require('../Assets/Img/pink_resham_work_organza_saree_with_unstitched_blouse-sg227110_1_.jpg')} alt="" />
                                            </Nav.Link>

                                            <Nav.Link
                                                as={Link}
                                                to='/'
                                                className={location.pathname === '/' ? 'darkBtn px-3' : 'lightBtn px-3'}
                                            >
                                                <span>Women</span> <i className="bi bi-caret-right d-block d-lg-none"></i>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='d-grid' onClick={handleShow}>
                                            <Nav.Link className={location.pathname === '/men' ? 'catImageHover catImageContain d-block d-lg-none p-0' : 'catImageContain d-block d-lg-none p-0'} as={Link} to='/men'>
                                                <img src={require('../Assets/Img/250x350-desk-mens-15-05-24.jpg')} alt="" />
                                            </Nav.Link>
                                            <Nav.Link
                                                as={Link}
                                                to='/men'
                                                className={location.pathname === '/men' ? 'darkBtn px-3' : 'lightBtn px-3'}
                                            >
                                                <span>Men</span> <i className="bi bi-caret-right d-block d-lg-none"></i>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='d-grid' onClick={combinedClose}>
                                            <Nav.Link className={location.pathname === '/bridal' ? 'catImageHover catImageContain d-block d-lg-none p-0' : 'catImageContain d-block d-lg-none p-0'} as={Link} to='/bridal'>
                                                <img src={require('../Assets/Img/elegant_wine_crepe_lehenga_set_with_zardosi_choli_and_heavy_-sg195843_7_.jpg')} alt="" />
                                            </Nav.Link>
                                            <Nav.Link
                                                as={Link}
                                                to='/bridal'
                                                className={location.pathname === '/bridal' ? 'darkBtn px-3' : 'lightBtn px-3'}
                                            >
                                                Bridal
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='d-grid' onClick={combinedClose}>
                                            <Nav.Link className={location.pathname === '/luxe' ? 'catImageHover catImageContain d-block d-lg-none p-0' : 'catImageContain d-block d-lg-none p-0'} as={Link} to='/luxe'>
                                                <img src={require('../Assets/Img/pink_embroidered_choli_with_exquisite_lehenga_an-sg220433_6_.jpg')} alt="" />
                                            </Nav.Link>
                                            <Nav.Link
                                                as={Link}
                                                to='/luxe'
                                                className={location.pathname === '/luxe' ? 'darkBtn px-3' : 'lightBtn px-3'}
                                            >
                                                Luxe
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Offcanvas.Body>
                                {/* New Canvas */}
                                <Offcanvas show={show} className="d-block d-lg-none" onHide={handleClose} placement="end">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            <div className="content2 d-flex justify-content-center">
                                                <Navbar.Brand>
                                                    <Link to='/' className='logoimg' onClick={handleClose}>
                                                        <img src={require('../Assets/Img/logo.png')} alt="Logo" />
                                                    </Link>
                                                </Navbar.Brand>
                                            </div>
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className='py-0'>
                                        {location.pathname === '/' &&
                                            <div className='d-grid d-lg-none'>
                                                {womenSubHeader}
                                            </div>
                                        }
                                        {location.pathname === '/men' &&
                                            <div className='d-grid d-lg-none'>
                                                {menSubHeader}
                                            </div>
                                        }
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </Navbar.Offcanvas>
                        </div>

                        {/* Logo */}

                        <div className="content2 d-flex justify-content-center">
                            <Navbar.Brand>
                                <Link to="/" className='logoimg'>
                                    <img src={require('../Assets/Img/logo.png')} alt="Logo" />
                                </Link>
                            </Navbar.Brand>
                        </div>

                        {/* Right Side */}

                        <div className="content2 d-flex justify-content-end hdrcontent align-items-center">
                            <div className="d-none d-lg-flex searchmenu">
                                <input type="text" id='search' name='search' className='ps-2' placeholder='Search Product' />
                                <label htmlFor="search">
                                    <i className="bi bi-search"></i>
                                </label>
                            </div>
                            <Link to='/'><i className="bi bi-camera-video"></i></Link>
                            <Link to='/' className='d-none d-sm-block'><i className="bi bi-whatsapp"></i></Link>
                            <Link to='/'><i className="bi bi-person-circle"></i></Link>
                            <Link className='cartItemDisplay' onClick={cartHandleShow} >
                                <i className="bi bi-cart"></i>
                                <span>3</span>
                            </Link>
                            {/* Cart OffCanvas */}
                            <Offcanvas show={cartShow} onHide={cartHandleClose} className='ff-lexend' placement={'end'} name={'end'} >
                                <Offcanvas.Header className='pb-0' closeButton>
                                    <Offcanvas.Title className='text-capitalize'><h4>your cart<span className='fs-14 ps-2'>(2 items)</span></h4></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='p-0'>
                                    <Container fluid>
                                        <Row className='d-grid'>
                                            <Col className='col-12 cartItemBox'>
                                                <Row className='py-4 cartItemOnly'>
                                                    <Col className='col-3'>
                                                        <Link>
                                                            <img src={require('../Assets/Img/3-banner-New-in-styles-400x533-14-5-24 (1).jpg')} className='w-100' alt="" />
                                                        </Link>
                                                    </Col>
                                                    <Col className='col-8 ps-0 d-grid gap-2'>
                                                        <div className='fs-14'>
                                                            <p className='p-0 m-0 text-capitalize'>
                                                                <span className='pe-2'>1</span>
                                                                <span className='pe-2'>X</span>
                                                                Purple Embroidered Fusion Jacket And Kurta Set
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h6 className='m-0'>MRP <span>₹11,499.00</span></h6>
                                                        </div>
                                                        <div className='d-flex gap-3 text-capitalize'>
                                                            <section className='px-1 bg-body-secondary fs-14'>
                                                                select size <span>50</span>
                                                            </section>
                                                            <Link className='px-1 bg-body-secondary text-dark fs-14' style={{ textDecoration: "none" }}>
                                                                Qty: <span>1</span>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-1 px-2 text-center'>
                                                        <Link className='text-dark'><i className="bi bi-heart"></i></Link>
                                                        <hr />
                                                        <Link className='text-dark'><i className="bi bi-trash3"></i></Link>
                                                    </Col>
                                                </Row>
                                                <Row className='py-4 cartItemOnly'>
                                                    <Col className='col-3'>
                                                        <Link>
                                                            <img src={require('../Assets/Img/3-banner-New-in-styles-400x533-14-5-24 (1).jpg')} className='w-100' alt="" />
                                                        </Link>
                                                    </Col>
                                                    <Col className='col-8 ps-0 d-grid gap-2'>
                                                        <div className='fs-14'>
                                                            <p className='p-0 m-0 text-capitalize'>
                                                                <span className='pe-2'>1</span>
                                                                <span className='pe-2'>X</span>
                                                                Purple Embroidered Fusion Jacket And Kurta Set
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h6 className='m-0'>MRP <span>₹11,499.00</span></h6>
                                                        </div>
                                                        <div className='d-flex gap-3 text-capitalize'>
                                                            <section className='px-1 bg-body-secondary fs-14'>
                                                                select size <span>50</span>
                                                            </section>
                                                            <Link className='px-1 bg-body-secondary text-dark fs-14' style={{ textDecoration: "none" }}>
                                                                Qty: <span>1</span>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-1 px-2 text-center'>
                                                        <Link className='text-dark'><i className="bi bi-heart"></i></Link>
                                                        <hr />
                                                        <Link className='text-dark'><i className="bi bi-trash3"></i></Link>
                                                    </Col>
                                                </Row>
                                                <Row className='py-4 cartItemOnly'>
                                                    <Col className='col-3'>
                                                        <Link>
                                                            <img src={require('../Assets/Img/3-banner-New-in-styles-400x533-14-5-24 (1).jpg')} className='w-100' alt="" />
                                                        </Link>
                                                    </Col>
                                                    <Col className='col-8 ps-0 d-grid gap-2'>
                                                        <div className='fs-14'>
                                                            <p className='p-0 m-0 text-capitalize'>
                                                                <span className='pe-2'>1</span>
                                                                <span className='pe-2'>X</span>
                                                                Purple Embroidered Fusion Jacket And Kurta Set
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h6 className='m-0'>MRP <span>₹11,499.00</span></h6>
                                                        </div>
                                                        <div className='d-flex gap-3 text-capitalize'>
                                                            <section className='px-1 bg-body-secondary fs-14'>
                                                                select size <span>50</span>
                                                            </section>
                                                            <Link className='px-1 bg-body-secondary text-dark fs-14' style={{ textDecoration: "none" }}>
                                                                Qty: <span>1</span>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-1 px-2 text-center'>
                                                        <Link className='text-dark'><i className="bi bi-heart"></i></Link>
                                                        <hr />
                                                        <Link className='text-dark'><i className="bi bi-trash3"></i></Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col className='col-12 py-5'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5 className='text-capitalize'>Subttotal</h5>
                                                    <h5 className='text-capitalize'>₹20,494.00</h5>
                                                </div>
                                                <div className='d-grid pt-3 cartBtn'>
                                                    <Link className='checkoutBtn' onClick={cartHandleClose}>Continue to checkout</Link>
                                                    <Link to={'/cart'} className='inCartBtn' onClick={cartHandleClose}>view cart</Link>
                                                </div>
                                            </Col>
                                            <Col className='col-12'>
                                                <div className='d-grid'>
                                                    <h5 className='text-capitalize'>We Accept</h5>
                                                    <img src={require('../Assets/Img/Indian Payment auth.png')} className='w-100' alt="" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Link className='cartItemDisplay'>
                                <i className="bi bi-heart"></i>
                                <span>10</span>
                            </Link>
                        </div>
                    </Container>
                    <div className='d-flex largesearch d-lg-none w-100 m-2 p-2'>
                        <label htmlFor="lgsearch"><i className="bi bi-search"></i></label>
                        <input type="text" className='w-100 px-2' id="lgsearch" placeholder='search product here...' />
                    </div>
                </Navbar>
            ))}
            {(location.pathname !== '/men' && location.pathname !== '/bridal') && (
                <Navbar className='main_sub_header d-none d-lg-block px-xl-5 py-1'>
                    {womenSubHeader}
                </Navbar>
            )}
            {location.pathname === '/men' && (
                <Navbar className='main_sub_header d-none d-lg-block px-xl-5 py-1'>
                    {menSubHeader}
                </Navbar>
            )}
            <div className={location.pathname === '/bridal' ? '' : 'forMargin'}></div>
        </div>
    );
}

export default Header;