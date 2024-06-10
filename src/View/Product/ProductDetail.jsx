import React, { useEffect, useRef, useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaTruckFast } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';
import { ImEye } from "react-icons/im";
import { TbCirclePercentage } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { RiShieldStarLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import SimilarProduct from '../../Components/SimilarProduct';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function ProductDetail() {
    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [changeImg, setChangeImg] = useState(false);
    const [changeStitch, setChangeStitch] = useState(false);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const sizeBtnInch = useRef(null);
    const sizeBtnCm = useRef(null);
    const unstitchBtn = useRef(null);
    const stitchBtn = useRef(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const newHandleClose = () => setNewShow(false);
    const newHandleShow = () => setNewShow(true);
    const videoHandleClose = () => setShowVideo(false);
    const videoHandleShow = () => setShowVideo(true);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    useEffect(() => {
        if (sizeBtnInch.current && sizeBtnCm.current) {
            if (!changeImg) {
                sizeBtnInch.current.style.backgroundColor = 'black';
                sizeBtnInch.current.style.color = 'white';
                sizeBtnInch.current.style.borderColor = 'black';
                sizeBtnCm.current.style.backgroundColor = 'white';
                sizeBtnCm.current.style.color = 'black';
                sizeBtnCm.current.style.borderColor = 'white';
            } else {
                sizeBtnInch.current.style.backgroundColor = 'white';
                sizeBtnInch.current.style.color = 'black';
                sizeBtnInch.current.style.borderColor = 'white';
                sizeBtnCm.current.style.backgroundColor = 'black';
                sizeBtnCm.current.style.color = 'white';
                sizeBtnCm.current.style.borderColor = 'black';
            }
        }
    }, [changeImg]);

    useEffect(() => {
        if (unstitchBtn.current && stitchBtn.current) {
            if (!changeStitch) {
                unstitchBtn.current.style.backgroundColor = 'black';
                unstitchBtn.current.style.color = 'white';
                unstitchBtn.current.style.borderColor = 'black';
                stitchBtn.current.style.backgroundColor = 'white';
                stitchBtn.current.style.color = 'black';
                stitchBtn.current.style.borderColor = 'lightgray';
            } else {
                unstitchBtn.current.style.backgroundColor = 'white';
                unstitchBtn.current.style.color = 'black';
                unstitchBtn.current.style.borderColor = 'lightgray';
                stitchBtn.current.style.backgroundColor = 'black';
                stitchBtn.current.style.color = 'white';
                stitchBtn.current.style.borderColor = 'black';
            }
        }
    }, [changeStitch]);

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
        { img: require('../../Assets/Img/prd1.jpg') },
        { img: require('../../Assets/Img/prd2.jpg') },
        { img: require('../../Assets/Img/prd3.jpg') },
        { img: require('../../Assets/Img/prd4.jpg') },
        { img: require('../../Assets/Img/prd5.jpg') },
        { img: require('../../Assets/Img/prd6.jpg') },
        { img: require('../../Assets/Img/prd7.jpg') },
        { img: require('../../Assets/Img/prd8.jpg') },
        { img: require('../../Assets/Img/prd9.jpg') },
        { img: require('../../Assets/Img/prd10.jpg') },
    ];

    return (
        <div className='prdDetail'>
            <Container>
                <Row className='pt-2 pb-4'>
                    <Col className='col-12 col-md-7'>
                        <div className="row slider-container">
                            <Slider asNavFor={nav1} ref={slider => (sliderRef2 = slider)} className='customSlider d-none d-lg-block col-12 col-lg-2 text-center' {...settings}>
                                {imgList.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} alt='' className='w-100' />
                                    </div>
                                ))}
                            </Slider>
                            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} fade={true} className='col-12 col-lg-10 text-center'>
                                {imgList.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} alt='' className='w-100' />
                                    </div>
                                ))}
                            </Slider>
                            <Slider asNavFor={nav1} ref={slider => (sliderRef2 = slider)} className='customSlider d-block d-lg-none col-12 col-lg-2 text-center' {...settings}>
                                {imgList.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.img} alt='' className='w-100' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className='d-none d-md-grid sameCategoryBtn py-4' style={{ gap: "10px" }}>
                            <button className='w-100 text-capitalize'>more from category</button>
                            <button className='w-100 text-capitalize'>more from same color</button>
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
                                                        <div className='d-flex d-md-grid d-lg-flex justify-content-between justify-content-md-start justify-content-lg-between sizeImage align-items-center'>
                                                            <h5>Women’s Size Guide</h5>
                                                            <div className='p-0'>
                                                                <button className='sizeBtnOne' ref={sizeBtnInch} onClick={() => setChangeImg(false)}>Inches</button>
                                                                <button className='sizeBtnTwo' ref={sizeBtnCm} onClick={() => setChangeImg(true)}>cm</button>
                                                            </div>
                                                        </div>
                                                        {!changeImg
                                                            ? <img src={require('../../Assets/Img/womens-size-in-inches.jpg')} className='pt-3 w-100' alt="Women's Size in Inches" />
                                                            : <img src={require('../../Assets/Img/womens-size-in-cm.jpg')} className='pt-3 w-100' alt="Women's Size in cm" />}
                                                    </Col>
                                                    <Col className='col-12 col-md-6 pt-4 pt-md-0'>
                                                        <h5>Measure yourself</h5>
                                                        <img src={require('../../Assets/Img/measure-yourself-women.png')} className='pt-3 w-100' alt="Measure Yourself" />
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
                                                        <img src={require('../../Assets/Img/blouse-styles.jpg')} className='pt-3 w-100' alt="Blouse Styles" />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                            <div className='d-flex justify-content-start py-3 stitchOption'>
                                <button className='unstitchBtn' ref={unstitchBtn} onClick={() => setChangeStitch(false)}>Unstitched</button>
                                <button className='stitchBtn' ref={stitchBtn} onClick={() => setChangeStitch(true)}>Stitched</button>
                            </div>
                            {
                                changeStitch &&
                                <div className=' d-block py-2 stitchOption'>
                                    <h6 className='text-danger fs-12 pb-2'>No returns/exchange on stitched blouse*</h6>
                                    <h5 className='pb-2'>Select Blouse Size :</h5>
                                    <button className='me-2 mb-2'>US 0</button>
                                    <button className='me-2 mb-2'>US 2</button>
                                    <button className='me-2 mb-2'>US 4</button>
                                    <button className='me-2 mb-2'>US 6</button>
                                    <button className='me-2 mb-2'>US 8</button>
                                    <button className='me-2 mb-2'>US 10</button>
                                    <button className='me-2 mb-2'>US 12</button>
                                    <button className='me-2 mb-2'>US 14</button>
                                    <button className='me-2 mb-2'>US 16</button>
                                </div>

                            }
                        </section>
                        <hr />
                        <section className='pt-2 textShort'>
                            <h5>Convert into One Minute Saree</h5>
                            <div className='d-flex preDrape align-items-center py-2'>
                                <input type="checkbox" id='oneMinuteSaree' />
                                <label htmlFor="oneMinuteSaree">Pre Drape This Saree</label>
                                <span className='fs-12' onClick={videoHandleShow}>Learn More</span>
                                <Modal show={showVideo} onHide={videoHandleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Blouse Styles</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <video width={"100%"} autoPlay loop preload="none">
                                                <source src={require('../../Assets/Video/f2cf986f-a22ec4f4.mp4')} type='video/mp4' />
                                            </video>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </section>
                        <hr />
                        <section className='pt-2 d-grid' style={{ gap: "10px" }}>
                            {
                                changeStitch &&
                                <section className='d-grid' style={{ gap: "10px" }}>
                                    <div className='d-flex justify-content-between selectText'>
                                        <span>Padding Required ?</span>
                                        <select name="" id="">
                                            <option value="">-Please Select-</option>
                                            <option value="">Yes</option>
                                            <option value="">No</option>
                                        </select>
                                    </div>
                                    <div className='d-flex justify-content-between selectText'>
                                        <span>Sleeves Length (Inch)</span>
                                        <select name="" id="">
                                            <option value="">-Please Select-</option>
                                            <option value="">Yes</option>
                                            <option value="">No</option>
                                        </select>
                                    </div>
                                </section>
                            }
                            <div className='d-flex justify-content-between selectText'>
                                <span>Peticoat</span>
                                <select name="" id="">
                                    <option value="">-Please Select-</option>
                                    <option value="">Satin Paticoat + ₹1245.00</option>
                                </select>
                            </div>
                            <div className='d-grid mainBuyBtn'>
                                <div className='py-3'>
                                    <button className='addToCartBtn text-uppercase'>Add to Cart</button>
                                    <button className='buyNowBtn text-uppercase'>Buy now</button>
                                </div>
                                <span className='text-center fs-12'><ImEye /> 128 people are viewing this item. Don’t wait!</span>
                            </div>
                            <div className='d-grid assuredDisplay text-center text-sm-start'>
                                <div className='d-grid d-sm-flex align-items-center'>
                                    <Link className='w-100'><TbCirclePercentage /><span className='ps-1 fs-14'>100% purchase protection</span></Link>
                                    <Link className='w-100'><GiReturnArrow /><span className='ps-1 fs-14'>This product is not returnable</span></Link>
                                </div>
                                <div className='d-grid d-sm-flex align-items-center'>
                                    <Link className='w-100'><RiShieldStarLine /><span className='ps-1 fs-14'>Assured Quality</span></Link>
                                    <Link className='w-100'><CiDeliveryTruck /><span className='ps-1 fs-14'>Free shipping*</span></Link>
                                </div>
                            </div>
                        </section>
                        <Accordion alwaysOpen className='customAccordian pt-2'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Product Details</Accordion.Header>
                                <Accordion.Body>
                                    <ul className='p-0' style={{ listStyle: "none" }}>
                                        <li>Style No : SG185461</li>
                                        <li>Color: White</li>
                                        <li>Fabric: Satin</li>
                                        <li>Work: Print</li>
                                        <li>Pack Contains: 1 saree and 1 unstiched blouse fabric</li>
                                        <li>Dimension: Length: 5.5 metres plus 0.8 metre blouse piece (approx.) Width: 1.10 metres</li>
                                        <li>Manufactured / Packed by : <Link> Suarabhakti Goods Pvt ltd</Link></li>
                                        <li>There may be slight color variation depending on the screen one is looking through and once you receive the product.</li>
                                        <li>Inclusive of all taxes</li>
                                        <li>A captivating choice for the upcoming Diwali card party, this printed saree will win a ton of hearts.</li>
                                        <li></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Style & Fit Tips</Accordion.Header>
                                <Accordion.Body>
                                    <div className='d-grid'>
                                        <h5>Style Tips:</h5>
                                        <p>Statement chandbalis and Meenakari temple bangles will help you steal the spotlight.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Fall & Edging</Accordion.Header>
                                <Accordion.Body>
                                    <div className='d-grid'>
                                        <p>At KALKI, we understand that every saree deserves the perfect finish of Fall & Edging - Free of Charge.</p>
                                        <p>That's why we include complimentary fall and edging (Pico Border) on all KALKI sarees. Ensuring dazzling grace and longevity of our drapes through smoother edges.</p>
                                        <p>The fall, a soft inner cotton lining, spans the first 3 meters of the saree adding a finishing touch to your style.</p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Shipping & Returns</Accordion.Header>
                                <Accordion.Body>
                                    <div className='d-grid'>
                                        <p>Exchange and returns are available for products within 48 hours of delivery. Items must be in original condition with all tags intact. Pick-up is free within India.</p>
                                        <Link className='fs-10'>Read more about return policy</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>FAQs</Accordion.Header>
                                <Accordion.Body>
                                    <div className='d-grid' style={{ gap: "5px" }}>
                                        <div className='d-grid' style={{ gap: "5px" }}>
                                            <strong>What if I want to exchange or return my order?</strong>
                                            <p>Exchange and returns are available for products within 48 hours of delivery. Items must be in original condition with all tags intact.</p>
                                        </div>
                                        <div className='d-grid' style={{ gap: "5px" }}>
                                            <strong>Will I Receive a Quality Product by KALKI Fashion?</strong>
                                            <p>As an international brand, we adhere to strict quality and design benchmarks. Every KALKI product goes through a 5 step Quality Control process to ensure that you receive the best.</p>
                                        </div>
                                        <Link className='fs-10'>Read more FAQ's</Link>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col className='col-12 py-3'>
                        <div className='d-grid d-md-none sameCategoryBtn' style={{ gap: "10px" }}>
                            <button className='w-100 text-capitalize'>more from category</button>
                            <button className='w-100 text-capitalize'>more from same color</button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Similar Product List */}
            <SimilarProduct />

            {/* Customer Review */}
            <div className='my-5 py-5 cutomerReview'>
                <Container>
                    <Row>
                        <h6 className='text-center text-md-start'>Customer Reviews</h6>
                        <Col className='col-12 col-md-9 py-4'>
                            <div className='w-100 text-center text-secondary fs-20'>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                        </Col>
                        <Col className='col-12 col-md-3 py-2 py-md-4'>
                            <div className='sameCategoryBtn d-flex justify-content-center d-md-grid' style={{ gap: "10px" }}>
                                <button>Ask a Question</button>
                                <button>Write a Review</button>
                            </div>
                        </Col>
                        <Col className='col-12 reviewMenu'>
                            <div className='d-flex'>
                                <Link className='reviewSection'>Reviews <span>0</span></Link>
                                <Link className='questionSection'>Questions <span>0</span></Link>
                            </div>
                        </Col>
                        <Col className='py-4'>
                            <div className='w-100 d-grid text-center text-secondary fs-20'>
                                <div>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span className='fs-14 pt-2'>Be the first to review this item</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
}

export default ProductDetail;