import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaTruckFast } from "react-icons/fa6";

function CartPage() {
    return (
        <div className='cartDetail ff-lexend'>
            <Container className='py-5'>
                <Row>
                    <Col className='col-12 col-lg-8'>
                        <Row className='py-2 py-sm-3'>
                            <Col className='col-3 col-sm-2 ps-0 pe-1 pe-sm-2'>
                                <Link>
                                    <img src={require('../../Assets/Img/3-banner-New-in-styles-400x533-14-5-24 (1).jpg')} className='w-100' alt="" />
                                </Link>
                            </Col>
                            <Col className='col-9 col-sm-10 p-0 ps-auto'>
                                <div className='d-flex h-100'>
                                    <div className='w-100 d-grid align-items-start'>
                                        <div className='d-grid d-lg-flex justify-content-between cartProductsize'>
                                            <Link className='m-0'>Purple Embroidered Fusion Jacket And Kurta Set</Link>
                                            <h5 className='m-0 text-start text-lg-end'><span className='text-secondary'>MRP</span> ₹11,499.00</h5>
                                        </div>
                                        <div className='d-grid d-sm-flex qtyPlusMinuse pt-2'>
                                            <section className='p-1 px-lg-2'>Select Size: <span>50</span></section>
                                            <div className='d-flex p-1 px-lg-2'>
                                                <span>-</span>
                                                <input type="number" className='mx-2' value={1} readOnly />
                                                <span>+</span>
                                            </div>
                                        </div>
                                        <div className='fs-12 ps-1 text-info d-none d-sm-block'>Other Details </div>
                                        <hr className='m-0 mb-2 d-none d-sm-block' />
                                        <div className='d-none d-sm-flex align-items-center fs-14'>
                                            <FaTruckFast /><section className='ps-1'>Est Delivery: <span>Friday, 14 Jun 2024</span>.</section>
                                        </div>
                                    </div>
                                    <div className='px-2 px-sm-4 px-lg-5 fs-20 d-grid customHeartColor align-content-between'>
                                        <Link><i className="bi bi-heart"></i></Link>
                                        <hr />
                                        <Link><i className="bi bi-trash3"></i></Link>
                                    </div>

                                </div>
                            </Col>
                            <Col className='cartItemPrd d-flex d-sm-none fs-12 py-2 mt-2'>
                                <FaTruckFast /><section className='ps-1'>Est Delivery: <span>Friday, 14 Jun 2024</span>.</section>
                            </Col>
                        </Row>
                        <Row className='py-2 py-sm-3'>
                            <Col className='col-3 col-sm-2 ps-0 pe-1 pe-sm-2'>
                                <Link>
                                    <img src={require('../../Assets/Img/3-banner-New-in-styles-400x533-14-5-24 (1).jpg')} className='w-100' alt="" />
                                </Link>
                            </Col>
                            <Col className='col-9 col-sm-10 p-0 ps-auto'>
                                <div className='d-flex h-100'>
                                    <div className='w-100 d-grid align-items-start'>
                                        <div className='d-grid d-lg-flex justify-content-between cartProductsize'>
                                            <Link className='m-0'>Purple Embroidered Fusion Jacket And Kurta Set</Link>
                                            <h5 className='m-0 text-start text-lg-end'><span className='text-secondary'>MRP</span> ₹11,499.00</h5>
                                        </div>
                                        <div className='d-grid d-sm-flex qtyPlusMinuse pt-2'>
                                            <section className='p-1 px-lg-2'>Select Size: <span>50</span></section>
                                            <div className='d-flex p-1 px-lg-2'>
                                                <span>-</span>
                                                <input type="number" className='mx-2' value={1} readOnly />
                                                <span>+</span>
                                            </div>
                                        </div>
                                        <div className='fs-12 ps-1 text-info d-none d-sm-block'>Other Details </div>
                                        <hr className='m-0 mb-2 d-none d-sm-block' />
                                        <div className='d-none d-sm-flex align-items-center fs-14'>
                                            <FaTruckFast /><section className='ps-1'>Est Delivery: <span>Friday, 14 Jun 2024</span>.</section>
                                        </div>
                                    </div>
                                    <div className='px-2 px-sm-4 px-lg-5 fs-20 customHeartColor d-grid align-content-between'>
                                        <Link><i className="bi bi-heart"></i></Link>
                                        <hr />
                                        <Link><i className="bi bi-trash3"></i></Link>
                                    </div>

                                </div>
                            </Col>
                            <Col className='cartItemPrd d-flex d-sm-none fs-12 py-2 mt-2'>
                                <FaTruckFast /><section className='ps-1'>Est Delivery: <span>Friday, 14 Jun 2024</span>.</section>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='col-12 col-lg-4 priceBox p-0 mt-5 mt-lg-0'>
                        <div className='p-3'>
                            <h5 className='fs-18 pb-2'>Price Details</h5>
                            <div className='d-flex justify-content-between'>
                                <span className='fs-16 w-100'>Subtotal</span>
                                <span className='w-100 text-end'>₹17,494.00</span>
                            </div>
                            <hr className='my-2' />
                            <div className='d-flex justify-content-between'>
                                <span className='fs-16 w-100'>Discount (KALKI16IN)</span>
                                <span className='w-100 text-end'>- ₹1,999.84</span>
                            </div>
                            <hr className='my-2' />
                            <div className='d-flex justify-content-between'>
                                <span className='fs-14 w-100'>Shipping & Handling (FREE - Blue Dart / Delhivery)</span>
                                <span className='w-100 text-end'>+ ₹0.00</span>
                            </div>
                            <hr className='my-2' />
                            <div className='d-flex justify-content-between'>
                                <span className='fs-18 w-100'>Grand Total</span>
                                <span className='fs-18 w-100 text-end'>₹15,494.16</span>
                            </div>
                        </div>
                        <div className='fs-12 py-1 text-center bgPink'>
                            <span>Congrats! You saved total <span className='text-danger fs-14'>₹1999.84</span> on this order.</span>
                        </div>
                        <div className='p-3'>
                            <h5 className='fs-18 pb-2'>Promo Code?</h5>
                            <div className='d-flex promoCodeInput'>
                                <input type="text" className='w-100 semiLightBtn text-uppercase' placeholder='Enter Code' />
                                <button >Apply</button>
                            </div>
                        </div>
                        <div className='fs-12 py-1 text-center bgPink'>
                            <span><Link>Login</Link> now to reveal your personalized coupon codes.</span>
                        </div>
                        <div className='p-3'>
                            <h5 className='fs-18 pb-2'>Available Coupon Codes</h5>
                            <div className='coupenCodeDesign halfBorderRad d-grid p-3'>
                                <div className='d-flex justify-content-between align-items-center fs-14'>
                                    <section className='text-uppercase px-2 py-1 bgPink'>Kalki16n</section>
                                    <button className='py-1 halfBorderRad'>Apply</button>
                                </div>
                                <span className='pt-2 fs-12 text-secondary'>Shop for INR 7,999 or more & get 16% off</span>
                                <Link>T&C</Link>
                            </div>
                        </div>
                        <div className='d-grid finalCheckOutBtn p-3 pt-1 pt-md-3 pb-0 pb-md-2 text-center footerForCart'>
                            <button className='mt-2 halfBorderRad'>Proceed to checkout</button>
                            <h5 className='fs-18 pt-1 pt-md-3 m-0'>48 Hours Easy Returns</h5>
                            <div>
                                <img src={require('../../Assets/Img/Indian Payment auth.png')} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CartPage
