import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaTruckFast } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';

function ProductDetail() {

    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const newHandleClose = () => setNewShow(false);
    const newHandleShow = () => setNewShow(true);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 6,
                }
            }
        ],
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    const imgList = [
        {
            img: require('../../Assets/Img/prd1.jpg')
        },
        {
            img: require('../../Assets/Img/prd2.jpg')
        },
        {
            img: require('../../Assets/Img/prd3.jpg')
        },
        {
            img: require('../../Assets/Img/prd4.jpg')
        },
        {
            img: require('../../Assets/Img/prd5.jpg')
        },
        {
            img: require('../../Assets/Img/prd6.jpg')
        },
        {
            img: require('../../Assets/Img/prd7.jpg')
        },
        {
            img: require('../../Assets/Img/prd8.jpg')
        },
        {
            img: require('../../Assets/Img/prd9.jpg')
        },
        {
            img: require('../../Assets/Img/prd10.jpg')
        },
    ]

    return (
        <div className='prdDetail'>
            <Container>
                <Row className='pt-2 pb-4'>
                    <Col className='col-12 col-md-7'>
                        <div className="row slider-container">
                            <Slider asNavFor={nav1} ref={slider => (sliderRef2 = slider)} className='customSlider d-none d-lg-block col-12 col-lg-2 text-center' {...settings}>
                                {
                                    imgList.map((item, index) => {
                                        return (
                                            <div>
                                                <img src={item.img} alt='' className='w-100' />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} fade={true} className='col-12 col-lg-10 text-center'>
                                {
                                    imgList.map((item, index) => {
                                        return (
                                            <div>
                                                <img src={item.img} alt='' className='w-100' />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                            <Slider asNavFor={nav1} ref={slider => (sliderRef2 = slider)} className='customSlider d-block d-lg-none col-12 col-lg-2 text-center' {...settings}>
                                {
                                    imgList.map((item, index) => {
                                        return (
                                            <div>
                                                <img src={item.img} alt='' className='w-100' />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </Col>
                    <Col className='col-12 px-auto px-md-4 col-md-5 ff-lexend'>
                        <section>
                            <div className='d-flex justify-content-between pt-2 pt-md-0'>
                                <div className='prdTitle'>
                                    <h4>White Floral Printed Saree In Satin With Unstitched Blouse Piece</h4>
                                    <span>Style No <span className='text-secondary'>SG185461</span></span>
                                </div>
                                <div className='iconShareList'>
                                    <Link><i className="bi bi-heart"></i></Link>
                                    <Link><i className="bi bi-share"></i></Link>
                                </div>
                            </div>
                            <div className='row d-grid py-3 g-1'>
                                <div className='d-flex offerListDetail'>
                                    <div className='onlineExc text-capitalize px-1'>online exclusive</div>
                                    <div className='readyToShip text-capitalize px-1'><i className="fs-10 bi bi-lightning-fill"></i>Ready to ship</div>
                                    <div className='bestSeller text-capitalize px-1'>BestSeller</div>
                                </div>
                                <div className='fs-20'><span className='fs-18 text-secondary pe-1'>M.R.P.</span>₹3,995</div>
                                <span className='fs-12 text-secondary'>Inclusive of all taxes</span>
                                <div className='pt-2 text-secondary d-flex align-items-end w-100 textShort'>
                                    <FaTruckFast />
                                    <span className='ps-1 fs-12'>Est Delivery by:</span>
                                    <h5 className='m-0 ps-1 text-dark textShort'>Tuesday, 11 Jun 2024.</h5>
                                </div>
                            </div>
                        </section>
                        <hr />
                        <section className='pt-2'>
                            <div className='d-flex justify-content-between align-items-center textShort'>
                                <h5 className='m-0'>Blouse Stitching Options</h5>
                                <div className='fs-14 newTab d-flex'>
                                    <Link onClick={handleShow}>Size guide</Link>

                                    <Modal show={show} onHide={handleClose} className='modelWidth'>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Size guide</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Container>
                                                <Row>
                                                    <Col className='col-12 col-md-6'>
                                                        <h5>Women’s Size Guide</h5>
                                                        <img src={require('../../Assets/Img/womens-size-in-inches.jpg')} className='pt-3 w-100' alt="" />
                                                    </Col>
                                                    <Col className='col-12 col-md-6 pt-4 pt-md-0'>
                                                        <h5>Measure yourself</h5>
                                                        <img src={require('../../Assets/Img/measure-yourself-women.png')} className='pt-3 w-100' alt="" />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Body>
                                    </Modal>

                                    <Link className='ps-1 ps-md-3' onClick={newHandleShow}>Blouse styles</Link>

                                    <Modal show={newShow} onHide={newHandleClose} className='modelWidth'>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Blouse Styles</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Container>
                                                <Row>
                                                    <Col className='col-12'>
                                                        <img src={require('../../Assets/Img/blouse-styles.jpg')} className='pt-3 w-100' alt="" />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Body>
                                    </Modal>

                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetail
