import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CheckOutPage() {
    return (
        <div>
            <Container className='py-4 ff-lexend'>
                <Row>
                    <Col xs='12' md='7' className='pb-4 pb-md-0'>
                        <Row className='pt-3'>
                            <Col className='col-12 boxtext'>
                                <label htmlFor="label">Address Label<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='label' name='label' placeholder='Ex. : Home, Office etc...' className='w-100' />
                            </Col>
                            <Col className='col-12 boxtext pt-3'>
                                <label htmlFor="area">Address Apartment, suite, etc.<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='area' name='area' className='w-100' />
                            </Col>
                            <Col className='col-12 col-md-4 boxtext pt-3'>
                                <label htmlFor="country">Country/Region<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='country' name='country' className='w-100' />
                            </Col>
                            <Col className='col-12 col-md-4 boxtext pt-3'>
                                <label htmlFor="state">State<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='state' name='state' className='w-100' />
                            </Col>
                            <Col className='col-12 col-md-4 boxtext pt-3'>
                                <label htmlFor="city">City<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='city' name='city' className='w-100' />
                            </Col>
                            <Col className='col-12 boxtext pt-3'>
                                <label htmlFor="postcode">Postal/Zip Code<span className='text-danger fw-bolder'> *</span></label>
                                <input type="number" id='postcode' name='postcode' className='w-100' />
                            </Col>
                            <Col className='col-12 pt-3'>
                                <div className='d-flex justify-content-between'>
                                    <button className='style-btn-one halfBorderRad text-uppercase'>Submit</button>
                                    <button className='style-btn-two halfBorderRad text-uppercase'>Cancel</button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <hr className='d-block d-md-none mt-5'/>
                    <Col xs='12' md='5' className='pt-5 pt-md-0'>
                        <h3>Your Order</h3>
                        <div className='d-flex'>
                            <div className='w-100 p-2 p-md-3 custom-order-box'>Products</div>
                            <div className='w-100 p-2 p-md-3 custom-order-box'>Total</div>
                        </div>
                        <div className='d-flex'>
                            <div className='w-100 p-2 p-md-3 d-grid'>
                                <span className='fs-10'>Purple Embroidered Fusion Jacket And Kurta Set <span>x 1</span></span>
                                <span className='fs-10'>Red Embroidered Fusion Jacket And Kurta Set <span>x 3</span></span>
                                <span className='py-2'>SubTotal</span>
                                <span className='py-2'>Shipping</span>
                                <span className='py-2'>Coupon Discount</span>
                                <span className='py-2 fs-20'>Total</span>
                            </div>
                            <div className='w-100 p-2 p-md-3 d-grid'>
                                <span>₹59.97</span>
                                <span className='w-100 custom-order-box'>₹107.97</span>
                                <span className='w-100 py-2 custom-order-box'>₹167.94</span>
                                <span className='w-100 py-2 custom-order-box'>Free</span>
                                <span className='w-100 py-2 custom-order-box'>- ₹7.94</span>
                                <span className='w-100 py-2 custom-order-box fs-20'>₹100.00</span>
                            </div>
                        </div>
                        <div className='px-2 text-center custom-order'>
                            <Link className='text-uppercase halfBorderRad'>Order Confirm</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CheckOutPage
