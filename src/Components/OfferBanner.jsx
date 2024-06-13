import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function OfferBanner() {
    return (
        <div className='main_offerBanner'>
            <Container className='py-4 pt-lg-5'>
                <Row className='offerBanner'>
                    <Col className='col-12 col-md-4 py-3 px-0 d-flex justify-content-center justify-content-md-center imgStyle'>
                        <img src={require('../Assets/Img/carnival-new-logo-sale2.webp')} className='h-100' alt="" />
                    </Col>
                    <Col className='col-12 col-md-8 d-grid px-0 d-md-flex align-items-center text-center'>
                        <div className='offerBorder'></div>
                        <h4 className='py-3 py-md-0 px-3 px-md-4 ff-roboto m-0 fontStyle fw-normal'>Shop For INR 7,999 & Get 16% Off* | Use Code: KALKI16IN</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OfferBanner
