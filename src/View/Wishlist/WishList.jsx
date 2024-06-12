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
    // {
    //     thubImg: require('../../Assets/Img/yellow_floral_shell_work_silk_co_ord_set-sg221588_8_.jpg'),
    //     hoverImg: require('../../Assets/Img/yellow_floral_shell_work_silk_co_ord_set-sg221588_6_.jpg'),
    //     name: 'Yellow Floral Shell Work Silk Co Ord Set',
    //     price: 4679,
    //     ready: false,
    //     best: true
    // },
    // {
    //     thubImg: require('../../Assets/Img/peacock_blue_saree_in_satin_with_embellishments_and_unstitched_blo-sg199280_8_.jpg'),
    //     hoverImg: require('../../Assets/Img/peacock_blue_saree_in_satin_with_embellishments_and_unstitched_blo-sg199280_5_.jpg'),
    //     name: 'Peacock Blue Saree In Satin With Embellishments And Unstitched Blouse Piece',
    //     price: 5995,
    //     ready: true,
    //     best: true
    // },
    // {
    //     thubImg: require('../../Assets/Img/_green_saree_with_swarovski_stone_embellishments-sg199274_8_.jpg'),
    //     hoverImg: require('../../Assets/Img/_green_saree_with_swarovski_stone_embellishments-sg199274_6_.jpg'),
    //     name: 'Green Saree With Swarovski Stone Embellishments',
    //     price: 6995,
    //     ready: true,
    //     best: false
    // },
    // {
    //     thubImg: require('../../Assets/Img/green_floral_printed-sg177306_6_.jpg'),
    //     hoverImg: require('../../Assets/Img/green_floral_printed-sg177306_5_.jpg'),
    //     name: 'Green Floral Printed Anarkali Suit Set In Silk',
    //     price: 6990,
    //     ready: true,
    //     best: true
    // },
    // {
    //     thubImg: require('../../Assets/Img/red_sequin_embellished_kurta-sg181090_4_.jpg'),
    //     hoverImg: require('../../Assets/Img/red_sequin_embellished_kurta-sg181090_3_.jpg'),
    //     name: 'Red Sequin Embellished Kurta Palazzo Set',
    //     price: 11990,
    //     ready: false,
    //     best: true
    // },
    // {
    //     thubImg: require('../../Assets/Img/blue_jacket_kurta_set_with_floral_motif_embroidery-sg186516_4_.jpg'),
    //     hoverImg: require('../../Assets/Img/blue_jacket_kurta_set_with_floral_motif_embroidery-sg186516_8_.jpg'),
    //     name: 'Blue Jacket Kurta Set With Floral Motif Embroidery',
    //     price: 9999,
    //     ready: true,
    //     best: true
    // },
    // {
    //     thubImg: require('../../Assets/Img/blue_fusion_jacket_kurta-sg178678_4_.jpg'),
    //     hoverImg: require('../../Assets/Img/blue_fusion_jacket_kurta-sg178678_7_.jpg'),
    //     name: 'Blue Fusion Jacket Kurta Set with Cutwork',
    //     price: 13499,
    //     ready: true,
    //     best: false
    // },
    // {
    //     thubImg: require('../../Assets/Img/blue_chanderi_pleated_kurta_set-sg179793_5_.jpg'),
    //     hoverImg: require('../../Assets/Img/blue_chanderi_pleated_kurta_set-sg179793_2_.jpg'),
    //     name: 'Blue Chanderi Pleated co ord set With Belt',
    //     price: 2092,
    //     ready: true,
    //     best: true
    // },
    // {
    //     thubImg: require('../../Assets/Img/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_8_.jpg'),
    //     hoverImg: require('../../Assets/Img/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_7_.jpg'),
    //     name: 'Pink Chiffon Saree With Floral Prints And Unstitched Blouse Piece',
    //     price: 5995,
    //     ready: false,
    //     best: true
    // },
    // {
    //     thubImg: require('../../Assets/Img/pink_tissue_saree_with_unstitched_blouse-sg213857_3_.jpg'),
    //     hoverImg: require('../../Assets/Img/pink_tissue_saree_with_unstitched_blouse-sg213857_11_.jpg'),
    //     name: 'Pink Tissue Saree With Unstitched Blouse',
    //     price: 9995,
    //     ready: true,
    //     best: true
    // },
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
