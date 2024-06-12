import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function AboutUsPage() {

    var milistoneSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

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

    const foundersData = [
        {
            name: 'Shravan Gupta',
            role: 'Chairman at Kailpar Engineering C Ltd',
            description: 'From an early age, he saw the building up of textile capabilities, the diversification of its product base, and emergence which gave birth to the business idea. From specializing in sourcing & supplying quality textile raw materials across the world, today his efforts have let the company be one of the leading importers of silk fabrics. His contagious zeal has let fashion companies across the globe entrust the brand with their development needs. Later his idea gave birth to the brand, KALKI Fashion which has achieved a remarkable presence as a manufacturer & exporter in Women’s Ethnic Wear.',
            image: require('../../Assets/Img/bade-sir-image.jpg')
        },
        {
            name: 'Saurabh, Shishir & Nishit Gupta',
            role: 'Directors',
            description: 'Saurabh, Shishir & Nishit Gupta joined the family business alongside a very passionate team led by his father. These second-generation entrepreneurs went on to study overseas and started their pioneering careers with KalkiFashion.com in 2007. They always envisioned KALKI as a dynamic enterprise. It is an omnichannel approach to business development & brand building that has enabled them to create a seamless, integrated & unique experience for their customers through its various touchpoints.',
            image: require('../../Assets/Img/all-sir-image.jpg')
        },
    ]

    const timeLineData = [
        {
            title: 'Inara Collection',
            time: 'march 2024',
            image: require('../../Assets/Img/Inara-Collection-lfw-2024.jpg')
        },
        {
            title: 'Hyderabad Store',
            time: 'march 2024',
            image: require('../../Assets/Img/hyderabad-store-08-03-24.jpg')
        },
        {
            title: 'Surat Store',
            time: 'dec 2023',
            image: require('../../Assets/Img/surat-store-08-03-24.jpg')
        },
        {
            title: 'Bengaluru Store',
            time: 'nov 2023',
            image: require('../../Assets/Img/bangaluru-store.jpg')
        },
        {
            title: 'Zayra Collection',
            time: 'Oct 2023 ',
            image: require('../../Assets/Img/disha-patani-30-10-2023.jpg')
        },
    ]

    const featuresData = [
        {
            title: 'Customization',
            description: 'Our clients experience personal attention and service from professional fashion consultants who help select and style each outfit. We tailor make designs of your choices & requirements through immaculate tailoring because your KALKI experience is our priority.',
            image: require('../../Assets/Img/Frame-1661.png')
        },
        {
            title: 'Collection Launches',
            description: 'Here at KALKI, we make sure that all our designs are latest & thereby we bring to you collection that we launch right before every season all across our stores & online.',
            image: require('../../Assets/Img/Frame-1661-2.png')
        },
        {
            title: 'Worldwide Shipping',
            description: 'We offer free shipping on order above USD $200 across 24 countries. KALKI guarantee you 100% authenticity of all the items. Our quality life cycle starts with the precise selection of the exclusive brands by our buyers and ends with the delivery of your shipment by our premium logistics partners (DHL, UPS, Blue Dart, Delhivery)',
            image: require('../../Assets/Img/Frame-1661-3.png')
        }
    ]

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
        <div className='about-container ff-lexend'>
            <Container className='py-5'>
                <Row>
                    <Col className='col-12 flex-center'>
                        <div className='about-logo-size'>
                            <img src={require('../../Assets/Img/logo.png')} alt="" />
                        </div>
                    </Col>

                    {/* Text Vision, Mission, Founders */}

                    <Col className='col-12 d-grid gap-4'>
                        <p>
                            Born in Mumbai, India in 2007, KALKI evokes the very spirit of the city it was founded in. An upstart, innovative, and dynamic brand – KALKI – offers the best of contemporary, ethnic Indian fashion and fusion-wear styles. Staying true to the brand’s unique promise of premium and wearable fashion, KALKI unveils fresh collections and all-new designs throughout the fashion calendar. KALKI’s design and aesthetic sensibility seek inspiration from all walks of life- be it the beauty of nature and heritage in art, architecture and culture, intricate creations, and the modern world to the home-bound handloom traditions of India.
                        </p>
                        <div className='text-center'>
                            <h5 className='fs-25 fw-bold'>Vision</h5>
                            <p>To be a company that is a benchmark in the Indian fashion industry for its offerings and experiences.</p>
                        </div>
                        <div className='text-center'>
                            <h5 className='fs-25 fw-bold'>Mission</h5>
                            <p>To be a preferred company of choice in Indian fashion globally for its delightful customer service, and quality product offerings by constantly evolving using innovation and design.</p>
                        </div>
                        <hr />
                        <div>
                            <h5 className='fs-25 text-center fw-bold'>Founders</h5>
                            {
                                foundersData.map((item, index) => {
                                    return (
                                        <Row className='pt-4' key={index}>
                                            <Col xs='12' md='6'>
                                                <img src={item.image} className='w-100' alt="" />
                                            </Col>
                                            <Col xs='12' md='6' className='d-grid gap-2 text-start'>
                                                <span>{item.name}</span>
                                                <span>{item.role}</span>
                                                <p className='fs-md-12'>{item.description}</p>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </div>
                    </Col>

                    {/* Milistone */}

                    <Col className='col-12 py-5'>
                        <h4 className='text-center pb-3'>Milistone</h4>
                        {/* Visit our Stores */}

                        <div className="slider-container">
                            <Slider {...milistoneSettings}>
                                {
                                    timeLineData.map((item, index) => {
                                        return (
                                            <div key={index} className='timline-slider pe-2'>
                                                <img src={item.image} alt="" />
                                                <div className='pt-3 pb-1 fs-md-12 text-capitalize'>{item.title}</div>
                                                <span className='text-secondary fs-md-12 text-capitalize'>{item.time}</span>
                                                <section className='mt-2'></section>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </Col>

                    {/* Features */}

                    <Col className='col-12 py-2 pb-5 d-grid'>
                        <h4 className='text-center pb-3'>Features</h4>
                        <Row className='flex-between pt-3'>
                            {
                                featuresData.map((item, index) => {
                                    return (
                                        <Col key={index} className='col-12 col-md-4 custom-feature text-center gap-2'>
                                            <Link>
                                                <img src={item.image} alt="" />
                                            </Link>
                                            <span className='fs-md-12'>{item.title}</span>
                                            <p className='fs-md-12'>{item.description}</p>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>

                    <hr />
                    {/* Visit our Stores */}

                    <Col className='col-12 py-4 px-md-0'>
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

                    <Col className='col-12 py-4 pt-5'>
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

                </Row>
            </Container>
        </div>
    )
}

export default AboutUsPage
