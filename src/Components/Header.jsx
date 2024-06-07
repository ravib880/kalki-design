import React, { useState } from 'react';
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
                            <Link to='/'><i className="bi bi-cart"></i></Link>
                            <Link to='/'><i className="bi bi-heart"></i></Link>
                        </div>
                    </Container>
                    <div className='d-flex largesearch d-lg-none w-100 m-2 p-2'>
                        <label htmlFor="lgsearch"><i className="bi bi-search"></i></label>
                        <input type="text" className='w-100 px-2' id="lgsearch" placeholder='search product here...' />
                    </div>
                </Navbar>
            ))}
            {(location.pathname !== '/men' && location.pathname !== '/bridal')  && (
                <Navbar className='main_sub_header d-none d-lg-block px-xl-5 py-1'>
                    {womenSubHeader}
                </Navbar>
            )}
            {location.pathname === '/men' && (
                <Navbar className='main_sub_header d-none d-lg-block px-xl-5 py-1'>
                    {menSubHeader}
                </Navbar>
            )}
            <div className={location.pathname ==='/bridal'? '':'forMargin'}></div>
        </div>
    );
}

export default Header;