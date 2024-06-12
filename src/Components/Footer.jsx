import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='main_footer py-5'>
            <Container>
                <Row>
                    <Col className='col-12 col-md-3 col-lg-2'>
                        {/* Display Block from Medium Size */}
                        <div className='d-none d-md-block'>
                            <h4 className='text-uppercase fs-14 pb-3'>Designer Wear</h4>
                            <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                <Link to='/'>Salwar Kameez</Link>
                                <Link to='/'>Sarees</Link>
                                <Link to='/'>Lehengas</Link>
                                <Link to='/'>Gowns</Link>
                                <Link to='/'>Kidswear</Link>
                                <Link to='/'>Saree blouse</Link>
                                <Link to='/'>Kurtis</Link>
                                <Link to='/'>Indowestern Styles</Link>
                                <Link to='/'>Mens</Link>
                                <Link to='/'>Accessories</Link>
                                <Link to='/'>KALKI influencers</Link>
                                <Link to='/'>Celebrity Wear</Link>
                            </div>
                        </div>
                        {/* Display None from Medium Size */}
                        <Accordion className='d-block d-md-none'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase'>Designer Wear</Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <Link to='/'>Salwar Kameez</Link>
                                        <Link to='/'>Sarees</Link>
                                        <Link to='/'>Lehengas</Link>
                                        <Link to='/'>Gowns</Link>
                                        <Link to='/'>Kidswear</Link>
                                        <Link to='/'>Saree blouse</Link>
                                        <Link to='/'>Kurtis</Link>
                                        <Link to='/'>Indowestern Styles</Link>
                                        <Link to='/'>Mens</Link>
                                        <Link to='/'>Accessories</Link>
                                        <Link to='/'>KALKI influencers</Link>
                                        <Link to='/'>Celebrity Wear</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='col-12 col-md-3 col-lg-2'>
                        {/* Display Block from Medium Size */}
                        <div className='d-none d-md-block'>
                            <h4 className='text-uppercase fs-14 pb-3'>About Us</h4>
                            <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                <Link to='/about-us'>About Us</Link>
                                <Link to='/contact'>Contact Us</Link>
                                <Link to='/'>Blog</Link>
                                <Link to='/'>Web Stories</Link>
                                <Link to='/'>Testimonial</Link>
                                <Link to='/'>Press</Link>
                                <Link to='/'>Lookbook</Link>
                                <Link to='/'>Careers</Link>
                                <Link to='/'>KALKI Boutique</Link>
                                <Link to='/'>KALKI Fashion Show</Link>
                                <Link to='/'>Video Call Appointment</Link>
                                <Link to='/'>Buying Guide</Link>
                            </div>
                        </div>
                        {/* Display None from Medium Size */}
                        <Accordion className='d-block d-md-none'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase'>About Us</Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <Link to='/about-us'>About Us</Link>
                                        <Link to='/contact'>Contact Us</Link>
                                        <Link to='/'>Blog</Link>
                                        <Link to='/'>Web Stories</Link>
                                        <Link to='/'>Testimonial</Link>
                                        <Link to='/'>Press</Link>
                                        <Link to='/'>Lookbook</Link>
                                        <Link to='/'>Careers</Link>
                                        <Link to='/'>KALKI Boutique</Link>
                                        <Link to='/'>KALKI Fashion Show</Link>
                                        <Link to='/'>Video Call Appointment</Link>
                                        <Link to='/'>Buying Guide</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='col-12 col-md-3 col-lg-2'>
                        {/* Display Block from Medium Size */}
                        <div className='d-none d-md-block'>
                            <h4 className='text-uppercase fs-14 pb-3'>POLICIES</h4>
                            <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                <Link to='/'>Terms & conditions</Link>
                                <Link to='/'>Shipping</Link>
                                <Link to='/'>Returns</Link>
                                <Link to='/'>Privacy Policy</Link>
                                <Link to='/'>Privacy Policy for APP</Link>
                                <Link to='/'>Payment Policy</Link>
                                <Link to='/'>FAQ's</Link>
                                <Link to='/'>Customization Charges</Link>
                            </div>
                        </div>
                        {/* Display None from Medium Size */}
                        <Accordion className='d-block d-md-none'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase'>POLICIES</Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <Link to='/'>Terms & conditions</Link>
                                        <Link to='/'>Shipping</Link>
                                        <Link to='/'>Returns</Link>
                                        <Link to='/'>Privacy Policy</Link>
                                        <Link to='/'>Privacy Policy for APP</Link>
                                        <Link to='/'>Payment Policy</Link>
                                        <Link to='/'>FAQ's</Link>
                                        <Link to='/'>Customization Charges</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='col-12 col-md-3 col-lg-2'>
                        {/* Display Block from Medium Size */}
                        <div className='d-none d-md-block'>
                            <h4 className='text-uppercase fs-14 pb-3'>My Account</h4>
                            <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                <Link to='/'>Shopping Bag</Link>
                                <Link to='/'>Wishlist</Link>
                                <Link to='/'>Order History</Link>
                                <Link to='/'>Privacy Policy</Link>
                                <Link to='/'>Order Tracking</Link>
                                <Link to='/'>Buy in Bulk</Link>
                            </div>
                        </div>
                        {/* Display None from Medium Size */}
                        <Accordion className='d-block d-md-none'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase'>My Account</Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <Link to='/'>Shopping Bag</Link>
                                        <Link to='/'>Wishlist</Link>
                                        <Link to='/'>Order History</Link>
                                        <Link to='/'>Privacy Policy</Link>
                                        <Link to='/'>Order Tracking</Link>
                                        <Link to='/'>Buy in Bulk</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='col-12 col-md-12 col-lg-4 mt-0 mt-md-5 mt-lg-0'>
                        <Row>
                            <Col className='col-12 col-md-6 col-lg-12'>
                                {/* Display Block from Medium Size */}
                                <div className='d-none d-md-block'>
                                    <h4 className='text-uppercase fs-14 pb-3'>SAFE & SECURE PAYMENT</h4>
                                    <div className='d-block'>
                                        <Link to='/'>
                                            <img src={require('../Assets/Img/secure-payment-India-new-1.png')} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                {/* Display None from Medium Size */}
                                <Accordion className='d-block d-md-none'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='text-uppercase'>SAFE & SECURE PAYMENT</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='d-block'>
                                                <Link to='/'>
                                                    <img src={require('../Assets/Img/secure-payment-India-new-1.png')} alt="" />
                                                </Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col className='col-12 col-md-6 col-lg-12 mt-0 mt-lg-4'>
                                {/* Display Block from Medium Size */}
                                <div className='d-none d-md-block'>
                                    <h4 className='text-uppercase fs-14 pb-3'>EXPERIENCE KALKI APP ON MOBILE</h4>
                                    <div className='d-flex gap-2'>
                                        <img src={require('../Assets/Img/google-play.png')} alt="" />
                                        <img src={require('../Assets/Img/app-store.png')} alt="" />
                                    </div>
                                </div>
                                {/* Display None from Medium Size */}
                                <Accordion className='d-block d-md-none'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='text-uppercase'>EXPERIENCE KALKI APP ON MOBILE</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='d-flex gap-2'>
                                                <img src={require('../Assets/Img/google-play.png')} alt="" />
                                                <img src={require('../Assets/Img/app-store.png')} alt="" />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col className='col-12 col-md-6 col-lg-12 mt-0 mt-md-4'>
                                {/* Display Block from Medium Size */}
                                <div className='d-none d-md-block'>
                                    <h4 className='text-uppercase fs-14 pb-2'>FOLLOW US</h4>
                                    <div className='d-flex accordianCnt gap-2 gap-md-3 fs-25'>
                                        <Link to="/"><i className="bi bi-instagram" /></Link>
                                        <Link to="/"><i className="bi bi-facebook" /></Link>
                                        <Link to="/"><i className="bi bi-whatsapp" /></Link>
                                        <Link to="/"><i className="bi bi-youtube" /></Link>
                                        <Link to="/"><i className="bi bi-pinterest" /></Link>
                                        <Link to="/"><i className="bi bi-twitter-x" /></Link>
                                    </div>
                                </div>
                                {/* Display None from Medium Size */}
                                <Accordion className='d-block d-md-none'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='text-uppercase'>FOLLOW US</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='d-flex accordianCnt gap-2 gap-md-3 fs-25'>
                                                <Link to="/"><i className="bi bi-instagram" /></Link>
                                                <Link to="/"><i className="bi bi-facebook" /></Link>
                                                <Link to="/"><i className="bi bi-whatsapp" /></Link>
                                                <Link to="/"><i className="bi bi-youtube" /></Link>
                                                <Link to="/"><i className="bi bi-pinterest" /></Link>
                                                <Link to="/"><i className="bi bi-twitter-x" /></Link>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col className='col-12 col-md-6 col-lg-12 mt-0 mt-md-4'>
                                <Row>
                                    <Col className='col-12 col-md-6 '>
                                        {/* Display Block from Medium Size */}
                                        <div className='d-none d-md-block'>
                                            <h4 className='text-uppercase fs-14 pb-3'>GET IN TOUCH</h4>
                                            <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                                <Link to='/'>+91 (22) 4890 0416 (INDIA)</Link>
                                                <Link to='/'>+1 (408) 520 9415(US)</Link>
                                                <Link to='/'>+44 (20) 7193 0887 (UK)</Link>
                                                <Link to='/'>+61 (02) 8006 4667 (AUS)</Link>
                                            </div>
                                        </div>
                                        {/* Display None from Medium Size */}
                                        <Accordion className='d-block d-md-none'>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className='text-uppercase'>GET IN TOUCH</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                                        <Link to='/'>+91 (22) 4890 0416 (INDIA)</Link>
                                                        <Link to='/'>+1 (408) 520 9415(US)</Link>
                                                        <Link to='/'>+44 (20) 7193 0887 (UK)</Link>
                                                        <Link to='/'>+61 (02) 8006 4667 (AUS)</Link>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                    <Col className='col-12 col-md-6 mt-0'>
                                        {/* Display Block from Medium Size */}
                                        <div className='d-none d-md-block'>
                                            <h4 className='text-uppercase fs-14 pb-3'>EMAIL US ON</h4>
                                            <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                                <Link to='/'>info@kalkifashion.com</Link>
                                            </div>
                                        </div>
                                        {/* Display None from Medium Size */}
                                        <Accordion className='d-block d-md-none'>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className='text-uppercase'>EMAIL US ON</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                                        <Link to='/'>info@kalkifashion.com</Link>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12 mt-0 mt-md-5'>
                        {/* Display Block from Medium Size */}
                        <div className='d-none d-md-block pt-3'>
                            <h4 className='text-uppercase fs-14 m-0 pb-1'>LATEST ETHNIC COLLECTION</h4>
                            <div className='accordianCnt d-flex justify-content-start text-capitalize gap-1 gap-md-2'>
                                <Link to='/'>KALKI Couture</Link>
                                <Link to='/'>Deme By Gabriella X Kalki</Link>
                                <Link to='/'>Dark Romance</Link>
                                <Link to='/'>La Soirée</Link>
                                <Link to='/'>ZOHA</Link>
                                <Link to='/'>KALKI X ALANNA PANDAY</Link>
                                <Link to='/'>Resort Prints</Link>
                                <Link to='/'>NOOR</Link>
                                <Link to='/'>RUMI</Link>
                                <Link to='/'>Zayra</Link>
                                <Link to='/'>Inara</Link>
                            </div>
                        </div>
                        {/* Display None from Medium Size */}
                        <Accordion className='d-block d-md-none'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase'>LATEST ETHNIC COLLECTION</Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <Link to='/'>KALKI Couture</Link>
                                        <Link to='/'>Deme By Gabriella X Kalki</Link>
                                        <Link to='/'>Dark Romance</Link>
                                        <Link to='/'>La Soirée</Link>
                                        <Link to='/'>ZOHA</Link>
                                        <Link to='/'>KALKI X ALANNA PANDAY</Link>
                                        <Link to='/'>Resort Prints</Link>
                                        <Link to='/'>NOOR</Link>
                                        <Link to='/'>RUMI</Link>
                                        <Link to='/'>Zayra</Link>
                                        <Link to='/'>Inara</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        {/* Display Block from Medium Size */}
                        <div className='d-none d-md-block pt-3'>
                            <h4 className='text-uppercase fs-14 m-0 pb-1'>new arrival</h4>
                            <div className='accordianCnt d-flex justify-content-start text-capitalize gap-1 gap-md-2'>
                                <Link to='/'>Latest Salwar Suits</Link>
                                <Link to='/'>Latest Sarees</Link>
                                <Link to='/'>Latest Lehengas</Link>
                                <Link to='/'>Latest Men's wear</Link>
                            </div>
                        </div>
                        {/* Display None from Medium Size */}
                        <Accordion className='d-block d-md-none'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase'>new arrival</Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <Link to='/'>Latest Salwar Suits</Link>
                                        <Link to='/'>Latest Sarees</Link>
                                        <Link to='/'>Latest Lehengas</Link>
                                        <Link to='/'>Latest Men's wear</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        {/* Display Block from Medium Size */}
                        <div className='d-none d-md-block pt-3'>
                            <h4 className='text-uppercase fs-14 m-0 pb-1'>BEST SELLER</h4>
                            <div className='accordianCnt d-flex justify-content-start text-capitalize gap-1 gap-md-2'>
                                <Link to='/'>Best Selling Salwar Suits</Link>
                                <Link to='/'>Best Selling Saree</Link>
                                <Link to='/'>Best Selling Lehengas</Link>
                                <Link to='/'>Best Selling Gown</Link>
                                <Link to='/'>Best Selling Kurti</Link>
                                <Link to='/'>Best Selling Men's wear</Link>
                            </div>
                        </div>
                        {/* Display None from Medium Size */}
                        <Accordion className='d-block d-md-none'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase'>BEST SELLER</Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <Link to='/'>Best Selling Salwar Suits</Link>
                                        <Link to='/'>Best Selling Saree</Link>
                                        <Link to='/'>Best Selling Lehengas</Link>
                                        <Link to='/'>Best Selling Gown</Link>
                                        <Link to='/'>Best Selling Kurti</Link>
                                        <Link to='/'>Best Selling Men's wear</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='col-12'>
                        <Row>
                            <Col className='col-6 col-lg-3 mt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="headerIcon bi bi-emoji-smile" />
                                    <h4 className='headerContent m-0'>24x7 Customer Support</h4>
                                </div>
                            </Col>
                            <Col className='col-6 col-lg-3 mt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="headerIcon bi bi-truck" />
                                    <h4 className='headerContent m-0'>Free Shipping*</h4>
                                </div>
                            </Col>
                            <Col className='col-6 col-lg-3 mt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="headerIcon bi bi-arrow-clockwise" />
                                    <h4 className='headerContent m-0'>Easy Returns</h4>
                                </div>
                            </Col>
                            <Col className='col-6 col-lg-3 mt-4'>
                                <div className='d-flex align-items-center gap-2'>
                                    <i className="headerIcon bi bi-percent" />
                                    <h4 className='headerContent m-0'>Custom Fitting</h4>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12 mt-4'>
                        <div className='fs-12'>We Ship Across the World <span className='text-body-secondary'>United States, United Kingdom, Canada, Australia, India</span></div>
                    </Col>
                    <Col className='col-12 mt-3 d-flex justify-content-end'>
                        <div className='fs-12 text-body-secondary'>© 2007 - 2024 Kalkifashion All Rights Reserved.</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
