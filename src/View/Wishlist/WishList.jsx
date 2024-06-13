import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const productsImg = [
    {
        thubImg: require('../../Assets/Img/white_saree_with_floral_embroidery_and_unstitched_bl-sg214451_17_.jpg'),
        hoverImg: require('../../Assets/Img/white_saree_with_floral_embroidery_and_unstitched_bl-sg214451_19_.jpg'),
        name: 'White Saree With Floral Embroidery And Unstitched Blouse Piece',
        price: 5995,
        ready: true,
        best: true
    },
    {
        thubImg: require('../../Assets/Img/white_floral_printed_saree_in_satin-sg185461_6_.jpg'),
        hoverImg: require('../../Assets/Img/white_floral_printed_saree_in_satin-sg185461_8_.jpg'),
        name: ' White Floral Printed Saree In Satin With Unstitched Blouse Piece ',
        price: 3995,
        ready: true,
        best: false
    },
    {
        thubImg: require('../../Assets/Img/white_and_pink_printed_cotton_kurta_pant_set-sg231764_7_.jpg'),
        hoverImg: require('../../Assets/Img/white_and_pink_printed_cotton_kurta_pant_set-sg231764_5_.jpg'),
        name: 'White And Pink Printed Cotton Kurta Pant Set',
        price: 3799,
        ready: true,
        best: false
    },
    {
        thubImg: require('../../Assets/Img/black_pant_set_in_chiffon_with_zardozi_work_kurta-sg207799_7_.jpg'),
        hoverImg: require('../../Assets/Img/black_pant_set_in_chiffon_with_zardozi_work_kurta-sg207799_5_.jpg'),
        name: 'Black Pant Set In Chiffon With Zardozi Work Kurta',
        price: 12990,
        ready: false,
        best: false
    },
    {
        thubImg: require('../../Assets/Img/off_white_floral_embroidered_jacket_kurta_set-sg186548_4_.jpg'),
        hoverImg: require('../../Assets/Img/off_white_floral_embroidered_jacket_kurta_set-sg186548_7_.jpg'),
        name: 'Off White Floral Embroidered Jacket Kurta Set',
        price: 10799,
        ready: true,
        best: false
    },
    {
        thubImg: require('../../Assets/Img/green_embroidered_choli_with_printed_chiffon_lehenga-sg220510_12_.jpg'),
        hoverImg: require('../../Assets/Img/green_embroidered_choli_with_printed_chiffon_lehenga-sg220510_12_.jpg'),
        name: 'Green Embroidered Choli With Printed Chiffon Lehenga And Net Dupatta',
        price: 21219,
        ready: true,
        best: true
    },
]


function WishList() {
    return (
        <div className='wishDetail ff-lexend'>
            <Container className='py-5'>
                <Row>
                    <Col className='col-12'>
                        <div className='d-flex justify-content-between'>
                            <h4 className='text-capitalize'>My Wishlist <span className='ps-1 fs-14 text-secondary'>7 items</span></h4>
                        </div>
                    </Col>
                    <Col className='col-12'>
                        <Row className='py-1 py-lg-2 ff-lexend gy-4'>
                            {
                                productsImg.map((item, index) => {
                                    return (
                                        <Col key={index} className='col-6 col-md-4 col-xl-3'>
                                            <div>
                                                <Link to='/productdetails' className='wishProductImage boxBorder d-flex'>
                                                    <img src={item.thubImg} className='wishThumbImg' alt="" />
                                                    <img src={item.hoverImg} className='wishHoverImg' alt="" />
                                                    <div className='py-1 text-uppercase'>Buy Now</div>
                                                    <Link className='stretched-link'><i className="bi bi-x-lg"></i></Link>
                                                </Link>
                                                <div className='productContent d-grid'>
                                                    <Link to='/productdetails' className='mt-1 mt-sm-2 mb-1'>{item.name}</Link>
                                                    <section className='fs-16'><span className='fs-14 text-secondary pe-1'>MRP</span>₹{item.price}</section>
                                                    <section className='d-flex justify-content-start pt-2'>
                                                        {
                                                            item.ready &&
                                                            <div className='readyToShip text-capitalize px-1'><i className="fs-10 bi bi-lightning-fill"></i>Ready to ship</div>
                                                        }
                                                        {
                                                            item.best &&
                                                            <div className='bestSeller text-capitalize px-1'>BestSeller</div>
                                                        }
                                                    </section>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WishList
