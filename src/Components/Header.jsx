import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { IoWalletOutline } from "react-icons/io5";
import headerContent from '../Config/HeaderContent';

function Header() {

    const [margin, setMargin] = useState(true);
    const [newMargin, setNewMargin] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const check = headerContent.find(item => item.value === location.pathname && location.pathname !== '/bridal')
        const newCheck = headerContent.find(item => location.pathname === item.value)
        if (check) {
            setMargin(true);
        }
        else {
            setMargin(false);
        }
        if (!newCheck?.data) {
            setNewMargin(true);
            setMargin(false);
        }
        else {
            setNewMargin(false);
        }


    }, [location.pathname, margin]);

    // For All three Offcanvas's

    // category Offcanvas
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

    // sub category Offcanvas
    const [show, setShow] = useState(false);
    const handleNewOffcanvas = () => setShow(!show);

    // cart Offcanvas
    const [cartShow, setCartShow] = useState(false);
    const handleCartCanvas = () => setCartShow(!cartShow);

    // signin modal
    const [showSignIn, setShowSignIn] = useState(false);
    const handleSignIn = () => setShowSignIn(!showSignIn);

    // signin modal
    const [showLogin, setShowLogin] = useState(false);
    const handleLogin = () => setShowLogin(!showLogin);

    useEffect(() => {
        if (!['/', '/home', '/women', '/men', '/bridal', '/lux']?.includes(location.pathname)) {
            setShowOffcanvas(false);
            setShow(false);
        }
    }, [location.pathname])

    const combinedClose = () => {
        setShow(false);
        setShowOffcanvas(false);
    };

    const [bgColor, setBgColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 750) {
                setBgColor(true);
            } else {
                setBgColor(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    // Use OffCanavs after Media screen less then 992px
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        if (screenWidth < 992) {
            handleNewOffcanvas();
        }
    };

    const changeModal = () => {
        handleSignIn();
        handleLogin();
    }

    // Form validation

    const [err, setErr] = useState({});

    const [formData, setformData] = useState({
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        password: ''
    });
    
    const checkValidation = (obj) => {
        err[obj?.key] = '';
        if (!obj?.value?.match(obj?.pattern)) {
            if(obj.key === 'email'){
                err[obj.key] = "Invalid Email Id";
            }
            else if(obj.key === 'password'){
                err[obj.key] = "Minimum of different classes of characters in password is 8. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.";
            }
            else{
                err[obj.key] = "Invalid Pattern";
            }
        }
        setErr({ ...err });
        setformData((preData) => ({
            ...preData,
            [obj.key]: obj.value
        }))
    }

    const handleFocus = (obj) => {
        if (obj.value === '') {
            setErr((prevData) => ({
                ...prevData,
                [obj.key]: "This is Required"
            }))
        }
    }

    const storeData = () => {

        if (Object.values(err).every((item) => item === '') && Object.values(formData).every((item) => item !== '')) {
            handleSignIn();
        }

    }

    return (
        <div>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className={location.pathname === '/bridal' ? `transparentHeader ${(bgColor) ? 'newBackCss' : ''} main_header` : 'main_header'}>
                    <Container fluid className='sub_header px-xl-5 d-flex justify-content-between'>

                        {/* Left Side */}

                        <div className='content1'>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleOffcanvas} />
                            <Navbar.Offcanvas
                                show={showOffcanvas}
                                onHide={handleOffcanvas}
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>
                                        <div className="content2 d-flex justify-content-center">
                                            <Navbar.Brand>
                                                <Link to="/" className='logoimg' onClick={handleOffcanvas}>
                                                    <img src={require('../Assets/Img/logo.png')} alt="Logo" />
                                                </Link>
                                            </Navbar.Brand>
                                        </div>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='py-1'>
                                    <Nav className="justify-content-between justify-content-lg-start flex-wrap-1 text-uppercase pe-0 pe-lg-3 NavLinkCss">
                                        {
                                            headerContent.map((item, index) => {
                                                return (
                                                    <Nav.Item className='d-grid' key={index} onClick={(item?.data) ? handleClick : combinedClose}>
                                                        <Nav.Link className={location.pathname === `${item.value}` ? 'catImageHover catImageContain d-block d-lg-none p-0' : 'catImageContain d-block d-lg-none p-0'} as={Link} to={item.value}>
                                                            <img src={item.image} alt="" />
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            as={Link}
                                                            to={item.value}
                                                            className={location.pathname === `${item.value}` ? 'darkBtn text-uppercase px-3' : 'hdrLightBtn text-uppercase px-3'}
                                                        >
                                                            {item.label}
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                )
                                            })
                                        }
                                    </Nav>
                                </Offcanvas.Body>
                                {/* New Canvas */}
                                <Offcanvas show={show} className="d-block d-lg-none" onHide={handleNewOffcanvas} placement="end">
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            <div className="content2 d-flex justify-content-center">
                                                <Navbar.Brand>
                                                    <Link to='/' className='logoimg' onClick={handleNewOffcanvas}>
                                                        <img src={require('../Assets/Img/logo.png')} alt="Logo" />
                                                    </Link>
                                                </Navbar.Brand>
                                            </div>
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className='py-0'>
                                        <div className='d-grid d-lg-none'>
                                            {
                                                headerContent.map((item, index) => {
                                                    return (
                                                        (item?.data) &&
                                                        item?.data.map((newItem, newIndex) => {
                                                            return (
                                                                (location.pathname === item?.value) &&
                                                                <Container fluid key={newIndex} className='sub_heading fw-normal d-grid d-lg-flex justify-content-start justify-content-xxl-between text-uppercase gap-3 py-lg-0 p-xl-0'>
                                                                    <Link to={newItem.value} onClick={combinedClose}>
                                                                        {newItem.label}
                                                                        {(newItem?.data) &&
                                                                            <ul className='sub_menu fw-bold'>
                                                                                {
                                                                                    newItem?.data.map((subItem, subIndex) => {
                                                                                        return (
                                                                                            <li key={subIndex}>{subItem.label}</li>
                                                                                        )
                                                                                    })
                                                                                }
                                                                                <li className='catImage'>
                                                                                    <img src={newItem.image} alt="" />
                                                                                </li>
                                                                            </ul>}
                                                                    </Link>
                                                                </Container>
                                                            )
                                                        })
                                                    )
                                                })
                                            }
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </Navbar.Offcanvas>
                        </div>

                        {/* Logo */}

                        <div className="content2 d-flex justify-content-center">
                            <Navbar.Brand>
                                <Link to="/" className='logoimg'>
                                    <img src={require('../Assets/Img/logo.png')} alt="Logo" />
                                </Link>
                            </Navbar.Brand>
                        </div>

                        {/* Right Side */}

                        <div className="content2 d-flex justify-content-end hdrcontent align-items-center">
                            <div className="d-none d-lg-flex searchmenu">
                                <input type="text" id='search' name='search' className='ps-2' placeholder='Search Product' />
                                <label htmlFor="search">
                                    <i className="bi bi-search"></i>
                                </label>
                            </div>
                            <div className='custom-user-box'>
                                <Link to='/user' className='bi bi-person-circle text-success'></Link>
                                <div className='custom-user-list fs-md-12'>
                                    <Link to='/user'>Welcome <span>user!</span></Link>
                                    <Link to='/user/account'><i className='bi bi-person-circle'></i> <span>Account Details</span></Link>
                                    <Link to='/user/orders'><IoWalletOutline /> <span>Order History</span></Link>
                                    <Link to='/wishlist'><i className="bi bi-heart"></i> <span>Wishlist</span></Link>
                                    <Link to='/' className='text-danger'>Sign Out</Link>
                                </div>
                            </div>
                            <Link to='/' className='d-none d-sm-block'><i className="bi bi-whatsapp"></i></Link>

                            {/* Login / Sign In modal */}
                            <Link onClick={handleSignIn}><i className="bi bi-person-circle"></i></Link>
                            {/* Login modal */}
                            <Modal show={showSignIn} onHide={handleSignIn} className='custom-login-modal ff-lexend'>
                                <Modal.Body>
                                    <i className="bi bi-x-lg custom-close-btn" onClick={handleSignIn}></i>
                                    <Container fluid>
                                        <Row className='custom-backimage-modal'>
                                            <Col xs='12' md='5' className='p-0 modal-page-one'>
                                                <div className='p-4 py-md-5 content d-grid'>
                                                    <h2>Register & Be A Part Of The KALKI Circle!</h2>

                                                    <h6 className='pt-2 pt-md-4'>Enjoy exclusive benefits like:</h6>
                                                    <ul>
                                                        <li>Get 15% off on your first order* | <b>Use code: INDIA15</b></li>
                                                        <li>Exclusive early collection showcase</li>
                                                        <li>Access amazing offers, discounts and more</li>
                                                    </ul>
                                                    <h6>Join Now !</h6>
                                                    <span className='text-end fs-12'>T & C Apply</span>
                                                </div>
                                            </Col>
                                            <Col xs='12' md='7' className='p-0 modal-page-two'>
                                                <div className='p-3 px-md-4 py-md-5 d-grid'>
                                                    <h5 className='text-center'>Sign Up</h5>
                                                    <span className='text-center fs-12'>Welcome to Kalki! It's quick and easy to set up an account</span>
                                                    <div className='d-grid pt-2 pt-md-4 custom-login-form'>
                                                        <input type="text"
                                                            name="fname"
                                                            pattern='^[A-Za-z ]{4,10}$'
                                                            value={formData.fname}
                                                            onFocus={(e) => handleFocus({
                                                                required: true,
                                                                key: e?.target?.name,
                                                                value: e?.target?.value
                                                            })}
                                                            onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                                                            placeholder='Enter First Name *' />
                                                        {
                                                            err?.fname
                                                                ? <span className="text-danger fs-12">{err.fname}</span>
                                                                : ''
                                                        }
                                                        <input type="text"
                                                            name="lname"
                                                            pattern='^[A-Za-z ]{4,10}$'
                                                            value={formData.lname}
                                                            onFocus={(e) => handleFocus({
                                                                required: true,
                                                                key: e?.target?.name,
                                                                value: e?.target?.value
                                                            })}
                                                            onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                                                            placeholder='Enter Last Name *' />
                                                        {
                                                            err?.lname
                                                                ? <span className="text-danger fs-12">{err.lname}</span>
                                                                : ''
                                                        }
                                                        <input type="email"
                                                            name="email"
                                                            pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                                                            value={formData.email}
                                                            onFocus={(e) => handleFocus({
                                                                required: true,
                                                                key: e?.target?.name,
                                                                value: e?.target?.value
                                                            })}
                                                            onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                                                            placeholder='Enter Email Address *' />
                                                        {
                                                            err?.email
                                                                ? <span className="text-danger fs-12">{err.email}</span>
                                                                : ''
                                                        }
                                                        <div className='d-flex'>
                                                            <select name="" id="">
                                                                <option value="">+91</option>
                                                                <option value="">+46</option>
                                                                <option value="">+84</option>
                                                                <option value="">+45</option>
                                                            </select>
                                                            <input type="number"
                                                                name="mobile"
                                                                pattern='^[0-9]{10}$'
                                                                value={formData.mobile}
                                                                onFocus={(e) => handleFocus({
                                                                    required: true,
                                                                    key: e?.target?.name,
                                                                    value: e?.target?.value
                                                                })}
                                                                onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                                                                placeholder='Phone Number *' className='w-100' />
                                                            {
                                                                err?.mobile
                                                                    ? <span className="text-danger fs-12">{err.mobile}</span>
                                                                    : ''
                                                            }
                                                        </div>
                                                        <input type="password"
                                                            name="password"
                                                            pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
                                                            value={formData.password}
                                                            onFocus={(e) => handleFocus({
                                                                required: true,
                                                                key: e?.target?.name,
                                                                value: e?.target?.value
                                                            })}
                                                            onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                                                            placeholder='Enter Password *' />
                                                        {
                                                            err?.password
                                                                ? <span className="text-danger fs-12">{err.password}</span>
                                                                : ''
                                                        }
                                                        <Link className='text-uppercase custom-next-btn text-center halfBorderRad' onClick={storeData}>Next</Link>
                                                        <span className='text-center fs-md-12'>By continuing, I agree to the Terms of Use and Privacy Policy</span>
                                                        <div className='custom-social-login'>
                                                            <Link><i className="bi bi-facebook"></i></Link>
                                                            <Link><i className="bi bi-google"></i></Link>
                                                        </div>
                                                        <hr />
                                                        <div className='flex-center'>
                                                            <span>Already Have an account?</span>
                                                            <Link onClick={changeModal}>Log in</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                            </Modal>
                            {/* Sign In modal */}
                            <Modal show={showLogin} onHide={handleLogin} className='custom-login-modal ff-lexend'>
                                <Modal.Body>
                                    <i className="bi bi-x-lg custom-close-btn" onClick={handleLogin}></i>
                                    <Container fluid>
                                        <Row className='custom-backimage-modal'>
                                            <Col xs='12' md='5' className='p-0 modal-page-one'>
                                                <div className='p-4 py-md-5 content d-grid'>
                                                    <h2>Register & Be A Part Of The KALKI Circle!</h2>

                                                    <h6 className='pt-2 pt-md-4'>Enjoy exclusive benefits like:</h6>
                                                    <ul>
                                                        <li>Get 15% off on your first order* | <b>Use code: INDIA15</b></li>
                                                        <li>Exclusive early collection showcase</li>
                                                        <li>Access amazing offers, discounts and more</li>
                                                    </ul>
                                                    <h6>Join Now !</h6>
                                                    <span className='text-end fs-12'>T & C Apply</span>
                                                </div>
                                            </Col>
                                            <Col xs='12' md='7' className='p-0 modal-page-two'>
                                                <div className='p-3 px-md-4 py-md-5 d-grid'>
                                                    <h5 className='text-center'>Log In</h5>
                                                    <span className='text-center fs-12'>Sign in so you can save items to your wishlists, track your orders , and checkout faster!</span>
                                                    <div className='d-grid pt-2 pt-md-4 custom-login-form'>
                                                        <input type="email" placeholder='Enter Email Address *' />
                                                        <input type="password" placeholder='Enter Password *' />
                                                        <Link className='text-uppercase custom-next-btn text-center halfBorderRad'>Log In</Link>
                                                        <Link className='text-dark text-center fs-md-12'>Forgot Password?</Link>
                                                        <div className='custom-social-login'>
                                                            <Link><i className="bi bi-facebook"></i></Link>
                                                            <Link><i className="bi bi-google"></i></Link>
                                                        </div>
                                                        <hr />
                                                        <div className='flex-center'>
                                                            <span>Don't have an account?</span>
                                                            <Link onClick={changeModal}>Sign in</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                            </Modal>

                            <Link className='cartItemDisplay' onClick={handleCartCanvas} >
                                <i className="bi bi-cart"></i>
                                <span>3</span>
                            </Link>

                            {/* Cart OffCanvas start */}
                            <Offcanvas show={cartShow} onHide={handleCartCanvas} className='ff-lexend' placement={'end'} name={'end'} >
                                <Offcanvas.Header className='pb-0' closeButton>
                                    <Offcanvas.Title className='text-capitalize'><h4>your cart<span className='fs-14 ps-2'>(2 items)</span></h4></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='p-0'>
                                    <Container fluid>
                                        <Row className='d-grid'>
                                            <Col className='col-12 cartItemBox'>
                                                <Row className='py-4 cartItemOnly'>
                                                    <Col className='col-3'>
                                                        <Link>
                                                            <img src={require('../Assets/Img/3-banner-New-in-styles-400x533-14-5-24 (1).jpg')} className='w-100' alt="" />
                                                        </Link>
                                                    </Col>
                                                    <Col className='col-8 ps-0 d-grid gap-2'>
                                                        <div className='fs-14'>
                                                            <p className='p-0 m-0 text-capitalize'>
                                                                <span className='pe-2'>1</span>
                                                                <span className='pe-2'>X</span>
                                                                Purple Embroidered Fusion Jacket And Kurta Set
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h6 className='m-0'>MRP <span>₹11,499.00</span></h6>
                                                        </div>
                                                        <div className='d-flex gap-3 text-capitalize'>
                                                            <section className='px-1 bg-body-secondary fs-14'>
                                                                select size <span>50</span>
                                                            </section>
                                                            <Link className='px-1 bg-body-secondary text-dark fs-14' style={{ textDecoration: "none" }}>
                                                                Qty: <span>1</span>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-1 px-2 text-center'>
                                                        <Link className='text-dark'><i className="bi bi-heart"></i></Link>
                                                        <hr />
                                                        <Link className='text-dark'><i className="bi bi-trash3"></i></Link>
                                                    </Col>
                                                </Row>
                                                <Row className='py-4 cartItemOnly'>
                                                    <Col className='col-3'>
                                                        <Link>
                                                            <img src={require('../Assets/Img/3-banner-New-in-styles-400x533-14-5-24 (1).jpg')} className='w-100' alt="" />
                                                        </Link>
                                                    </Col>
                                                    <Col className='col-8 ps-0 d-grid gap-2'>
                                                        <div className='fs-14'>
                                                            <p className='p-0 m-0 text-capitalize'>
                                                                <span className='pe-2'>1</span>
                                                                <span className='pe-2'>X</span>
                                                                Purple Embroidered Fusion Jacket And Kurta Set
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h6 className='m-0'>MRP <span>₹11,499.00</span></h6>
                                                        </div>
                                                        <div className='d-flex gap-3 text-capitalize'>
                                                            <section className='px-1 bg-body-secondary fs-14'>
                                                                select size <span>50</span>
                                                            </section>
                                                            <Link className='px-1 bg-body-secondary text-dark fs-14' style={{ textDecoration: "none" }}>
                                                                Qty: <span>1</span>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-1 px-2 text-center'>
                                                        <Link className='text-dark'><i className="bi bi-heart"></i></Link>
                                                        <hr />
                                                        <Link className='text-dark'><i className="bi bi-trash3"></i></Link>
                                                    </Col>
                                                </Row>
                                                <Row className='py-4 cartItemOnly'>
                                                    <Col className='col-3'>
                                                        <Link>
                                                            <img src={require('../Assets/Img/3-banner-New-in-styles-400x533-14-5-24 (1).jpg')} className='w-100' alt="" />
                                                        </Link>
                                                    </Col>
                                                    <Col className='col-8 ps-0 d-grid gap-2'>
                                                        <div className='fs-14'>
                                                            <p className='p-0 m-0 text-capitalize'>
                                                                <span className='pe-2'>1</span>
                                                                <span className='pe-2'>X</span>
                                                                Purple Embroidered Fusion Jacket And Kurta Set
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <h6 className='m-0'>MRP <span>₹11,499.00</span></h6>
                                                        </div>
                                                        <div className='d-flex gap-3 text-capitalize'>
                                                            <section className='px-1 bg-body-secondary fs-14'>
                                                                select size <span>50</span>
                                                            </section>
                                                            <Link className='px-1 bg-body-secondary text-dark fs-14' style={{ textDecoration: "none" }}>
                                                                Qty: <span>1</span>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col className='col-1 px-2 text-center'>
                                                        <Link className='text-dark'><i className="bi bi-heart"></i></Link>
                                                        <hr />
                                                        <Link className='text-dark'><i className="bi bi-trash3"></i></Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col className='col-12 py-5'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5 className='text-capitalize'>Subttotal</h5>
                                                    <h5 className='text-capitalize'>₹20,494.00</h5>
                                                </div>
                                                <div className='d-grid pt-3 cartBtn'>
                                                    <Link to='/checkout' className='checkoutBtn' onClick={handleCartCanvas}>Continue to checkout</Link>
                                                    <Link to={'/cart'} className='inCartBtn' onClick={handleCartCanvas}>view cart</Link>
                                                </div>
                                            </Col>
                                            <Col className='col-12'>
                                                <div className='d-grid'>
                                                    <h5 className='text-capitalize'>We Accept</h5>
                                                    <img src={require('../Assets/Img/Indian Payment auth.png')} className='w-100' alt="" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Offcanvas.Body>
                            </Offcanvas>
                            {/* Cart OffCanvas end */}

                            <Link className='cartItemDisplay' to='/wishlist'>
                                <i className="bi bi-heart"></i>
                                <span>10</span>
                            </Link>
                        </div>
                    </Container>
                    <div className='d-flex largesearch d-lg-none w-100 m-2 p-2'>
                        <label htmlFor="lgsearch"><i className="bi bi-search"></i></label>
                        <input type="text" className='w-100 px-2' id="lgsearch" placeholder='search product here...' />
                    </div>
                </Navbar>
            ))}
            {
                headerContent.map((item, index) => {
                    return (
                        (location.pathname === item.value && item?.data) &&
                        <Navbar key={index} className='main_sub_header d-none d-lg-block px-xl-5 py-1'>
                            <Container fluid className='sub_heading fw-normal d-grid d-lg-flex justify-content-start justify-content-xxl-between text-uppercase gap-3 py-3 py-lg-0 p-xl-0'>
                                {
                                    item?.data.map((newItem, newIndex) => {
                                        return (
                                            <Link key={newIndex} to={newItem.value} onClick={combinedClose}>
                                                {newItem.label}
                                                {
                                                    (newItem?.data) &&
                                                    <ul className='sub_menu fw-bold '>
                                                        {
                                                            (newItem?.data) &&
                                                            newItem?.data.map((subItem, subIndex) => {
                                                                return (
                                                                    <li key={subIndex}>
                                                                        {subItem.label}
                                                                        <ul className='peta_menu p-0  pt-3 text-capitalize fw-light'>
                                                                            {
                                                                                (subItem?.data) &&
                                                                                subItem?.data.map((petaItem, petaIndex) => {
                                                                                    return (
                                                                                        <li key={petaIndex}>{petaItem.label}</li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                        <li className='catImage'>
                                                            <img src={newItem.image} alt="" />
                                                        </li>
                                                    </ul>
                                                }
                                            </Link>
                                        )
                                    })
                                }
                            </Container>
                        </Navbar>
                    )
                })
            }

            <div className={location.pathname === '/bridal' ? '' : (margin) ? 'forMargin' : (newMargin) ? 'new-for-margin' : 'new-for-margin'}></div>
        </div>
    );
}

export default Header;