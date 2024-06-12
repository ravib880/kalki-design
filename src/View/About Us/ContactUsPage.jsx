import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

function ContactUsPage() {

    var storeSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const storeData = [
        {
            name: 'KALKI Mumbai Store',
            address: '101, Prime Plaza, S. V. Road, Santacruz. (W), Mumbai - 400054, India.',
            email: 'info@kalkifashion.com',
            phone: '+91 22 4890 0247',
            openTime: '10.30',
            closeTime: '9.00',
            image: require('../../Assets/Img/700x400-mumbai-store-image-4-7-2023.jpg')
        },
        {
            name: 'KALKI Delhi Store',
            address: 'E-3, South Extension 2 Market, New Delhi, Delhi - 110049, India.',
            email: 'info@kalkifashion.com',
            phone: '+91 11 4117 0730',
            openTime: '10.30',
            closeTime: '9.00',
            image: require('../../Assets/Img/700x400-delhi-store-image_1.jpg')
        },
        {
            name: 'KALKI ahmedabad Store',
            address: '101, Prime Plaza, S. V. Road, Santacruz. (W), Mumbai - 400054, India.',
            email: 'info@kalkifashion.com',
            phone: '+91 22 4890 0247',
            openTime: '10.30',
            closeTime: '9.00',
            image: require('../../Assets/Img/700x400-ahmedabad-store-image-26-7-23.jpg')
        },
        {
            name: 'KALKI bangaluru Store',
            address: 'E-3, South Extension 2 Market, New Delhi, Delhi - 110049, India.',
            email: 'info@kalkifashion.com',
            phone: '+91 11 4117 0730',
            openTime: '10.30',
            closeTime: '9.00',
            image: require('../../Assets/Img/700x400-bangaluru-store-image-22-11-23.jpg')
        },
    ]

    return (
        <div>
            <Container className='container-backimg py-0 ff-lexend'>
                <Container className='px-0 py-5 custom-container-contact'>
                    <Row>
                        <Col xs='12' md='7' className='bgSecondaryColor p-3 p-md-4'>
                            <div>
                                <h4>Get in touch</h4>
                                <div className='p-0 pt-4 d-grid gap-3'>
                                    <div className="d-flex custom-box-contact p-3 halfBorderRad">
                                        <div className='px-2 pe-3'><i className="bi bi-telephone"></i></div>
                                        <div className='d-grid'>
                                            <span className='text-uppercase fs-md-12'>Call us</span>
                                            <Link className='fs-md-10'>(India) +91 (22) 489-00416</Link>
                                            <Link className='fs-md-10'>(US) +1 (408) 520-9415</Link>
                                            <Link className='fs-md-10'>(UK) +44 (20) 7193-0887</Link>
                                            <Link className='fs-md-10'>(AUS) +61 (02) 8006-4667</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex custom-box-contact p-3 halfBorderRad">
                                        <div className='px-2 pe-3'><i className="bi bi-telephone"></i></div>
                                        <div className='d-grid'>
                                            <span className='text-uppercase fs-md-12'>mail us</span>
                                            <Link className='fs-md-10'>info@kalkifashion.com</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex custom-box-contact p-3 halfBorderRad">
                                        <div className='px-2 pe-3'><i className="bi bi-telephone"></i></div>
                                        <div className='d-grid'>
                                            <span className='text-uppercase fs-md-12'>chat with us</span>
                                            <Link className='fs-md-10'>info@kalkifashion.com</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex custom-box-contact p-3 halfBorderRad">
                                        <div className='px-2 pe-3'><i className="bi bi-telephone"></i></div>
                                        <div className='d-grid'>
                                            <span className='text-uppercase fs-md-12'>WhatsApp</span>
                                            <Link className='fs-md-10'>+91 9920012474</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs='12' md='5' className='bgSubThemeColor p-3 p-md-4'>
                            <div>
                                <h4>Catact Us</h4>
                                <div className='p-0 pt-4 d-grid gap-3'>
                                    <input type="text" className='custom-input-contact px-2' placeholder='*Full Name' />
                                    <input type="email" className='custom-input-contact px-2' placeholder='*Email Address' />
                                    <input type="number" className='custom-input-contact px-2' placeholder='*Telephone' />
                                    <textarea name="" id="" className='custom-input-contact p-2' placeholder='Add Address' style={{ height: "100px" }}></textarea>
                                </div>
                                <div className='p-0 pt-4 flex-center'>
                                    <button className='text-uppercase darkBtn halfBorderRad'>Send Message</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr />
                {/* Visit our Stores */}

                <Col className='col-12 py-4 pb-5 px-md-0'>
                    <h4 className='text-center ff-lexend pb-3'>Visit our Stores</h4>
                    <div className="slider-container">
                        <Slider {...storeSettings}>
                            {
                                storeData.map((item, index) => {
                                    return (
                                        <div key={index} className='store-slider pe-2 fs-md-12'>
                                            <img src={item.image} alt="" />
                                            <div className='pt-3 flex-between'>
                                                <Link className='primaryColor'><i className="bi bi-geo-alt-fill"></i></Link>
                                                <div className='ps-2'>
                                                    <h5 className='text-capitalize'>{item.name}</h5>
                                                    <address>{item.address}</address>
                                                    <section>Email: <Link className='subSecondoryColor'>{item.email}</Link></section>
                                                    <section>Call: <span>{item.phone}</span></section>
                                                </div>
                                            </div>
                                            <div className='pt-3 flex-between'>
                                                <Link className='primaryColor'><i className="bi bi-clock"></i></Link>
                                                <div className='ps-2'>
                                                    <h5>Opening Hours</h5>
                                                    <address>
                                                        <span>{item.openTime}</span>am
                                                        to
                                                        <span>{item.closeTime}</span>pm
                                                        - All days Open.
                                                        (Flagship, Bridal Couture, Ready-To-Wear & Occasion Wear)
                                                    </address>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </Col>

                {/* Stores in writing */}

                <Col className='col-12 py-5'>
                    <Row>
                        <Col xs='12' md='6' className='custom-border px-0 pe-md-5'>
                            <div className='d-grid gap-2'>
                                <div>
                                    <span>KALKI AT MULTI-DESIGNER STORES</span>
                                    <p className='fs-md-12'><b>Mumbai</b>: Deme | <b>Delhi</b>: Agashe, Megaan, PERSONAL BELONGING | <b>Kolkata</b>: Citrine, Elahe | <b>Bangalore</b>: Armadio | <b>Raipur</b>: Azra | <b>Kanpur</b>: Ekanga | <b>Hyderabad</b>: Elahe, Agastya | <b>Surat</b>: Monsoon Surat</p>
                                </div>
                                <div>
                                    <span>KALKI AT INTERNATIONAL STORES:</span>
                                    <p className='fs-md-12'><b>London</b>: Nikaza Asian Couture, Roops limited, Lilly's Boutique London | <b>Dubai</b>: Vesimi | <b>Denmark</b>: Fabilicious | <b>Uk-London</b>: Roops limited | <b>Australia</b>: Paaro, Karegar Pty LTD | <b>Bangkok</b>: Adaa Bangkok</p>
                                </div>
                                <div>
                                    <span>KALKI AT ONLINE STORES:</span>
                                    <p className='fs-md-12'>Estie Couture, Elahe</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs='12' md='6' className='ps-0 ps-md-5 pt-3 pt-md-0'>
                            <div className='d-grid gap-2'>
                                <div>
                                    <span>CUSTOMER CARE</span>
                                </div>
                                <div>

                                    <section>Customer Care: +91 22-4890-0416</section>
                                    <section>Whatsapp: +91 9920012474</section>
                                    <section>Email: info@kalkifashion.com</section>
                                </div>

                                <address>KALKI Fashion 101, Prime Plaza, S. V. Road, Near Aasha Parekh Hospital, Santacruz, Mumbai - 400054.</address>

                            </div>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}

export default ContactUsPage
