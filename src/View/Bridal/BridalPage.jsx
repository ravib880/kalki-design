import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BridalPage() {
    return (
        <div>
            <Container fluid className='d-none d-xl-grid p-0 sameCssForBtn'>
                <video className='h-100 w-100' autoPlay muted loop preload="none">
                    <source src={require('../../Assets/Video/Landscape Video.mp4')} type='video/mp4' />
                </video>
                <button className='darkBtn fullBorderRad px-4'>View Collection</button>
            </Container>
            <Container fluid className='d-grid d-xl-none p-0 sameCssForBtn portraitVideo'>
                <video className='h-100 w-100' autoPlay muted loop preload="none">
                    <source src={require('../../Assets/Video/Portrait Video.mp4')} type='video/mp4' />
                </video>
                <button className='darkBtn fullBorderRad px-4'>View Collection</button>
            </Container>
            <Container fluid className='p-0 sameCssForBtn'>
                <img src={require('../../Assets/Img/fashion-show-banner-desk-12-4-24.jpg')} className='w-100 d-none d-md-block' alt="" />
                <img src={require('../../Assets/Img/fashion-show-mobile-500x700-12-4-24.jpg')} className='w-100 d-block d-md-none' alt="" />
                <button className='darkBtn fullBorderRad px-4'>Sell All</button>
            </Container>
            <Container fluid className='p-0'>
                <Link>
                    <img src={require('../../Assets/Img/bridal-page-bride-27-03-24.jpg')} className='w-100 d-none d-md-block' alt="" />
                    <img src={require('../../Assets/Img/bridal-page-bride-mobile-500x700-27-03-24-1.jpg')} className='w-100 d-block d-md-none' alt="" />
                </Link>
            </Container>
            <Container className='py-5 pb-3'>
                <Row className='g-3 g-md-0'>
                    <Col className='col-0 col-md-1 col-lg-2'></Col>
                    <Col className='col-12 col-md-5 col-lg-4'>
                        <video className='w-100' autoPlay muted loop preload="none">
                            <source src={require('../../Assets/Video/main.mp4')} type='video/mp4' />
                        </video>
                    </Col>
                    <Col className='col-12 col-md-5 col-lg-4'>
                        <div className='h-100 d-grid align-items-center text-center'>
                            <div>
                                <h5 className='text-uppercase'>BRIDAL JEWELRY FOR YOUR BIG DAY</h5>
                                <div className='d-flex justify-content-center'>
                                    <button className='darkBtn fullBorderRad px-4'>VIew Collection</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-0 col-md-1 col-lg-2'></Col>
                </Row>
            </Container>

            <Container fluid className='py-4'>
                <Row className='g-4 g-md-0'>
                    <Col className='col-12 col-md-4 p-0 videoHeightShort'>
                        <video className='w-100' autoPlay muted loop preload="none">
                            <source src={require('../../Assets/Video/making-video.mp4')} type='video/mp4' />
                        </video>
                    </Col>
                    <Col className='col-12 col-md-4 p-0'>
                        <div className='h-100 d-grid align-items-center text-center'>
                            <div>
                                <h4 className='text-uppercase'>FROM 'YES' TO 'I DO' - ALL IN VIDEOS</h4>
                                <div className='pt-2 d-flex justify-content-center'>
                                    <button className='darkBtn fullBorderRad px-4'>Discover Collection</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-md-4 p-0 videoHeightShort'>
                        <video className='w-100' autoPlay muted loop preload="none">
                            <source src={require('../../Assets/Video/making-video-2.mp4')} type='video/mp4' />
                        </video>
                    </Col>
                </Row>
            </Container>

            <Container className='py-4'>
                <Row>
                    <Col className='col-12 text-center'><h3 className='fw-bolder'>FAQ's</h3></Col>
                    <Col className='col-12 col-md-6'>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase '><span className='fw-bold primaryColor'>Can I Customize The Design Or Size Of A Bridal Outfit?</span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <p>Yes, KALKI offers a range of customization options for your bridal outfit. You can personalize the design, size, sleeve design, neck pattern, neck depth, and even fabric color to create a bridal ensemble that perfectly aligns with your preference and style. Their expert team is dedicated to assisting you in crafting your dream bridal outfit and ensuring its tailor-made to match your exact requirement.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='text-uppercase '><span className='fw-bold primaryColor'>What Are The Popular Fabrics Used For Lehenga?</span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <p>Bridal lehengas are often made with luxurious fabrics such as raw silk, velvet, brocade, georgette, and chiffon. These fabrics are chosen for their elegance and ability to showcase intricate embroidery and detailing ensuring the bride looks her best on her special day.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='text-uppercase '><span className='fw-bold primaryColor'>What Should A Bride Wear For Every Pre Wedding Ocassion?</span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <p>For every pre-wedding occasion, a bride should select outfits that match the theme and formality of the event. Consider a traditional saree, or lehenga choli for ceremonies like mehendi and haldi and opt for a stylish gown or designer outfit for more formal events like sangeet and engagement parties. Make sure your choices align with your personal style and comfort.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='col-12 col-md-6'>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='text-uppercase '><span className='fw-bold primaryColor'>Can I Find Bridal Outfits With Traditional Embellishments Like Embroidery Or Beadwork?</span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <p>You can explore an extensive array of bridal outfits adorned with traditional embellishments like intricate embroidery and meticulous beadwork at KALKI Fashion. Their designs draw inspiration from various cultures, infusing bridal ensembles with a sense of elegance and cultural richness. These exquisite details enhance the uniqueness and grandeur of the bridal ensemble.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='text-uppercase '><span className='fw-bold primaryColor'>Are Wedding Gowns Suitable For All Kinds Of Venues And Themes?</span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <p>Wedding gowns are an excellent choice for a wide range of venues and themes, including fusion or destination weddings. Their fusion of Western and Indian elements allows brides to tailor their look to suit the wedding's setting and style, making them a versatile option for various occasions.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='text-uppercase '><span className='fw-bold primaryColor'>Which Bridal Wedding Outfits Are The Most Flattering?</span></Accordion.Header>
                                <Accordion.Body>
                                    <div className='accordianCnt d-grid text-capitalize gap-1 gap-md-2'>
                                        <p>The most flattering bridal outfits include the lehenga choli, saree and salwar kameez. Lehenga cholis provide a regal look, sarees are timeless and versatile, while salwar kameez sets offer comfort and style. Choose the one that aligns with your personal style and makes you feel confident on your special day.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default BridalPage
