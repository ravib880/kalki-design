import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { GiReturnArrow } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { GiSewingMachine } from "react-icons/gi";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { GiAmpleDress } from "react-icons/gi";
import Slider from "react-slick";

var settings = {
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
  dots: false,
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



var customerSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  initialSlide: 0,
  responsive: [

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};


function Home() {

  return (
    <div className='main_home'>

      {/* Slider */}

      <Carousel fade className='pb-4'>
        <Carousel.Item>
          <Link className='d-none d-md-block' to='/bridal'>
            <img src={require('../../Assets/Img/sld11.png')} alt="" />
          </Link>
          <Link className='d-block d-md-none' to='/bridal'>
            <img src={require('../../Assets/Img/sld1.png')} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className='d-none d-md-block' to='/bridal'>
            <img src={require('../../Assets/Img/sld12.png')} alt="" />
          </Link>
          <Link className='d-block d-md-none' to='/bridal'>
            <img src={require('../../Assets/Img/sld2.png')} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className='d-none d-md-block' to='/bridal'>
            <img src={require('../../Assets/Img/sld13.png')} alt="" />
          </Link>
          <Link className='d-block d-md-none' to='/bridal'>
            <img src={require('../../Assets/Img/sld3.png')} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className='d-none d-md-block' to='/bridal'>
            <img src={require('../../Assets/Img/sld14.png')} alt="" />
          </Link>
          <Link className='d-block d-md-none' to='/bridal'>
            <img src={require('../../Assets/Img/sld4.png')} alt="" />
          </Link>
        </Carousel.Item>
      </Carousel>

      {/* Key Value */}

      <Container className='py-4'>
        <Row>
          <Col className='col-6 col-md-3'>
            <Link to='/' className='keyValue d-grid gap-2 justify-content-center text-center'>
              <FaTruckFast />
              <div>24-hour Dispatch</div>
            </Link>
          </Col>
          <Col className='col-6 col-md-3'>
            <Link to='/' className='keyValue d-grid gap-2 justify-content-center text-center'>
              <GiReturnArrow />
              <div>Easy Returns</div>
            </Link>
          </Col>
          <Col className='col-6 col-md-3 pt-3 pt-md-0'>
            <Link to='/' className='keyValue d-grid gap-2 justify-content-center text-center'>
              <MdOutlineMobileFriendly />
              <div> Instant In-Store Experience</div>
            </Link>
          </Col>
          <Col className='col-6 col-md-3 pt-3 pt-md-0'>
            <Link to='/' className='keyValue d-grid gap-2 justify-content-center text-center'>
              <GiSewingMachine />
              <div> Custom Fitting</div>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Banner */}

      <Container className='py-4'>
        <Row className='gy-4 '>
          <Col className='col-6 col-lg-3'>
            <div className='text-center ctgBanner'>
              <img src={require('../../Assets/Img/ctg1.png')} alt="" />
              <div className='boxShade'></div>
              <div className='inCtgBanner'>
                <h2 className='mb-2 mb-sm-4'>Must-Have Bestsellers</h2>
                <Link to='/' className='stretched-link'>shop now</Link>
              </div>
            </div>
          </Col>
          <Col className='col-6 col-lg-3'>
            <div className='text-center ctgBanner'>
              <img src={require('../../Assets/Img/ctg2.png')} alt="" />
              <div className='boxShade'></div>
              <div className='inCtgBanner'>
                <h2 className='mb-2 mb-sm-4'>New Arrivals</h2>
                <Link to='/' className='stretched-link'>shop now</Link>
              </div>
            </div>
          </Col>
          <Col className='col-6 col-lg-3'>
            <div className='text-center ctgBanner'>
              <img src={require('../../Assets/Img/ctg3.png')} alt="" />
              <div className='boxShade'></div>
              <div className='inCtgBanner'>
                <h2 className='mb-2 mb-sm-4'>Father's Day Edit</h2>
                <Link to='/' className='stretched-link'>shop now</Link>
              </div>
            </div>
          </Col>
          <Col className='col-6 col-lg-3'>
            <div className='text-center ctgBanner'>
              <img src={require('../../Assets/Img/ctg4.png')} alt="" />
              <div className='boxShade'></div>
              <div className='inCtgBanner'>
                <h2 className='mb-2 mb-sm-4'>Online Exclusives</h2>
                <Link to='/' className='stretched-link'>shop now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Sticky Info for Call */}

      <Container className='py-4'>
        <div className='bgImage px-4'>
          <img src={require('../../Assets/Img/back1.png')} alt="" />
          <div className='d-grid gap-2 justify-content-center text-center'>
            <h2>The Ultimate In-Store Experience Via 24x7 Video Shopping</h2>
            <span>Our Stylists On Call Can Speak: English, Hindi, Gujarati & Marathi</span>
            <section className='d-grid d-md-flex justify-content-center gap-2 mt-2 bgImageContent'>
              <section>
                <select name="" id="">
                  <option value="">+91</option>
                  <option value="">+1</option>
                  <option value="">+92</option>
                  <option value="">+95</option>
                  <option value="">+94</option>
                </select>
                <input type="text" />
              </section>
              <Link to='/' className='text-uppercase fw-bolder'>start Call now</Link>
            </section>
          </div>
        </div>
      </Container>

      {/* Product Slider */}

      <Container className='py-4 px-md-0'>
        <h4 className='text-center ff-lexend pb-3'>Shop By Category</h4>
        <div className="slider-container">
          <Slider {...settings}>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/01-Shop-By-category-400x533-india-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>One Minute Saree</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/02-Shop-By-category-400x533-india-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Crop-Top Suits</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/03-Shop-By-category-400x533-india-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Organza Sarees</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/04-Shop-By-category-400x533-india-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Indo Westerns</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/05-Shop-By-category-400x533-india-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Plain Sarees</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/06-Shop-By-category-400x533-india-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Kurta Set With Dupatta</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>

      {/* Editor's Picks */}

      <Container className='py-4'>
        <h4 className='text-center ff-lexend pb-3'>Editor's Picks</h4>
        <Row>
          <Col className='col-6 pe-2 p-md-0 pe-md-2'>
            <Link to={'/'} className='d-none d-md-block'>
              <img src={require('../../Assets/Img/01-editors-picks-800x586-15-5-24.jpg')} className='w-100' alt="" />
            </Link>
            <Link to={'/'} className='d-block d-md-none'>
              <img src={require('../../Assets/Img/01-editors-picks-mobile-15-5-24.jpg')} className='w-100' alt="" />
            </Link>
          </Col>
          <Col className='col-6 ps-2 p-md-0 ps-md-2'>
            <Link to={'/'} className='d-none d-md-block'>
              <img src={require('../../Assets/Img/02-editors-picks-800x586-14-5-24.jpg')} className='w-100' alt="" />
            </Link>
            <Link to={'/'} className='d-block d-md-none'>
              <img src={require('../../Assets/Img/02-editors-picks-mobile-14-5-24.jpg')} className='w-100' alt="" />
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Bridal Edit */}

      <Container className='py-4 px-4 px-md-2'>
        <h4 className='text-center ff-lexend pb-3'>Bridal Edit</h4>
        <Row className='p-3 p-md-4 bridalBack h-100'>
          <Col className='col-12 col-md-7'>
            <Row>
              <Col className='col-7 p-0 pe-2 pe-lg-3'>
                <div className='p-0'>
                  <img src={require('../../Assets/Img/1-new-arrival-banner-400x545-desk-1-15-05-24.jpg')} className='w-100' alt="" />
                </div>
              </Col>
              <Col className='col-5 pe-md-4'>
                <Row className='h-100'>
                  <Col className='col-12 p-0 pb-2 pb-lg-3' style={{ height: "50%" }}>
                    <div className='bg-warning p-0 bridalPart'>
                      <img src={require('../../Assets/Img/2-new-arrival-banner-400x264-desk-1-15-05-24.jpg')} alt="" />
                    </div>
                  </Col>
                  <Col className='col-6 p-0 pe-1 pe-lg-2' style={{ height: "50%" }}>
                    <div className='bg-success p-0 bridalPart'>
                      <img src={require('../../Assets/Img/3-new-arrival-banner-200x281-desk-1-15-05-24.jpg')} alt="" />
                    </div>
                  </Col>
                  <Col className='col-6 p-0 ps-1 ps-lg-2' style={{ height: "50%" }}>
                    <div className='bg-info p-0 bridalPart'>
                      <img src={require('../../Assets/Img/4-new-arrival-banner-200x282-desk-1-15-05-24.jpg')} alt="" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className='col-12 p-0 mt-4 mt-md-0 col-md-5 bridalBackContent'>
            <div>
              <section>
                <h3>Usher in your fairytale elegance!</h3>
                <h2 className='py-2'>Bridal Beaut</h2>
                <Link to='/' className='px-4 text-uppercase'>Shop Now</Link>
              </section>
            </div>
          </Col>
        </Row>
      </Container>

      {/* New In Styles */}

      <Container className='py-4 px-md-0'>
        <h4 className='text-center ff-lexend pb-3'>New In Styles</h4>
        <div className="slider-container">
          <Slider {...settings}>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/1-banner-New-in-styles-400x533-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Salwar Suits</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/2-banner-New-in-styles-400x533-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Drapes Dazzle</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/3-banner-New-in-styles-400x533-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Majestic Menswear</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/4-banner-New-in-styles-400x533-14-5-24.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Dress Materials</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>

      {/* Wedding Collection */}

      <Container className='py-4 px-md-0'>
        <h4 className='text-center ff-lexend pb-3'>Wedding Collection</h4>
        <Row>
          <Col className='col-12'>
            <Link to='/' className='d-none d-md-block'>
              <img src={require('../../Assets/Img/01-wedding-collection-1440x540-30-3-24-global-website.jpg')} className='w-100' alt="" />
            </Link>
            <Link to='/' className='d-block d-md-none'>
              <img src={require('../../Assets/Img/01-wedding-collection-banner-mobile-382x450-30-3-24-global-website.jpg')} className='w-100' alt="" />
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Wedding Collection Joint */}

      <Container className='pt-0 pb-4 px-md-0'>
        <div className="slider-container">
          <Slider {...settings}>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/cocktail-collection-banner-400x533-30-3-24-global-website.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Cocktail Classics</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/sangeet-collection-banner-400x533-30-3-24-global-website.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Sangeet Soirée</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/wedding-collection-banner-400x533-30-3-24-global-website.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Wedding Wonders</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className='px-1 px-md-2'>
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/reception-collection-banner-400x533-30-3-24-global-website.jpg')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Reception Regalia</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>

      {/* Video Call & Bridal Style */}

      <Container className='py-4 px-4 px-md-3'>
        <Row className='forBackColor'>
          <Col className='col-12 col-md-6 videoCall py-5'>
            <div className='videoContent'>
              <TbDeviceMobileMessage />
              <h3>Shop Via Video Call</h3>
              <p>Get a free virtual styling session</p>
              <Link className='text-uppercase px-4'>book an appointment</Link>
            </div>
          </Col>
          <Col className='col-12 col-md-6 videoCall py-5 videoBorder'>
            <div className='videoContent'>
              <GiAmpleDress />
              <h3>Shop Via Video Call</h3>
              <p>Get a free virtual styling session</p>
              <Link className='text-uppercase px-4'>book an appointment</Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Instagram */}

      <Container className='py-4 px-md-0'>
        <Row>
          <Col className='col-12'>
            <Link to='/' className='d-none d-md-block'>
              <img src={require('../../Assets/Img/instagram-desk-7-12-23.jpg')} className='w-100' alt="" />
            </Link>
            <Link to='/' className='d-block d-md-none'>
              <img src={require('../../Assets/Img/instagram-mobile-7-12-23.jpg')} className='w-100' alt="" />
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Visit our Stores */}

      <Container className='py-4 px-md-0'>
        <h4 className='text-center ff-lexend pb-3'>Visit our Stores</h4>
        <div className="slider-container">
          <Slider {...storeSettings}>
            <div className='storeSlider pb-4 pe-2'>
              <img src={require('../../Assets/Img/700x400-mumbai-store-image-4-7-2023.jpg')} alt="" />
              <div className='py-3'>101, Prime Plaza, S. V. Road, Santacruz. (W), Mumbai - 400054, India.</div>
              <Link to='/' className='p-2 px-4 fs-14 fw-bold'>View Details <i className="ps-2 bi bi-arrow-up-right"></i></Link>
            </div>
            <div className='storeSlider pb-4 px-1'>
              <img src={require('../../Assets/Img/700x400-delhi-store-image_1.jpg')} alt="" />
              <div className='py-3'>E-3, South Extension 2 Market, New Delhi, Delhi - 110049, India.</div>
              <Link to='/' className='p-2 px-4 fs-14 fw-bold'>View Details <i className="ps-2 bi bi-arrow-up-right"></i></Link>
            </div>
            <div className='storeSlider pb-4 px-1'>
              <img src={require('../../Assets/Img/700x400-ahmedabad-store-image-26-7-23.jpg')} alt="" />
              <div className='py-3'>Ground Floor, Colonnade, Ambli Road, S.G. Highway, Ahmedabad, Gujarat - 380058, India.</div>
              <Link to='/' className='p-2 px-4 fs-14 fw-bold'>View Details <i className="ps-2 bi bi-arrow-up-right"></i></Link>
            </div>
            <div className='storeSlider pb-4 px-1'>
              <img src={require('../../Assets/Img/700x400-bangaluru-store-image-22-11-23.jpg')} alt="" />
              <div className='py-3'>30, 11th Main Rd, 4th Block, Jayanagar, near Jayanagar Bus Stop, Bangalore, Karnataka - 560011, India.</div>
              <Link to='/' className='p-2 px-4 fs-14 fw-bold'>View Details <i className="ps-2 bi bi-arrow-up-right"></i></Link>
            </div>
            <div className='storeSlider pb-4 px-1'>
              <img src={require('../../Assets/Img/700x400-surat-store-image-11-12-23.jpg')} alt="" />
              <div className='py-3'>Rajhans Aron, Shop No 2, Lal Bungalow, Athwa Lines, opposite Surat Civil Court, Surat, Gujarat - 395007, India.</div>
              <Link to='/' className='p-2 px-4 fs-14 fw-bold'>View Details <i className="ps-2 bi bi-arrow-up-right"></i></Link>
            </div>
            <div className='storeSlider pb-4 px-1'>
              <img src={require('../../Assets/Img/700x400-hyderabad-image-07-03-24.jpg')} alt="" />
              <div className='py-3'>8-2-585/1/A,B & C Aan Global, Road No. 10, Banjara Hills, Hyderabad, Telangana - 500034, India.</div>
              <Link to='/' className='p-2 px-4 fs-14 fw-bold'>View Details <i className="ps-2 bi bi-arrow-up-right"></i></Link>
            </div>
            <div className='storeSlider pb-4 ps-2'>
              <img src={require('../../Assets/Img/700x400-pritampura-delhi-store-image-18-4-23.jpg')} alt="" />
              <div className='py-3'>Plot No.500 Kohat Enclave Basement Floor, Gr floor, First Floor and second floor, Pitampura Delhi - 110034, India.</div>
              <Link to='/' className='p-2 px-4 fs-14 fw-bold'>View Details <i className="ps-2 bi bi-arrow-up-right"></i></Link>
            </div>
          </Slider>
        </div>
      </Container>

      {/* Customer Stories */}

      <Container className='py-4 px-md-0'>
        <h4 className='text-center ff-lexend pb-3'>Customer Stories</h4>
        <div className="slider-container">
          <Slider {...customerSettings}>
            <div className='px-1'>
              <div className='customerSlider d-flex'>
                <div className='imgSection'>
                  <img src={require('../../Assets/Img/400px--533px-23-12-23-santdas.jpg')} alt="" />
                  <Link to='/' className='text-uppercase fs-10'>view product</Link>
                </div>
                <div className='customerContent'>
                  <div className='d-grid'>
                    <p>"Every detail wowed! At the wedding, it stole the show; friends are eyeing Kalki's collection online after this buzz"</p>
                    <h5>Sant Das</h5>
                    <span className='fs-10'>Sydney, Australia</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-1'>
              <div className='customerSlider d-flex'>
                <div className='imgSection'>
                  <img src={require('../../Assets/Img/400px--533px-9-5-23-romika.jpg')} alt="" />
                  <Link to='/' className='text-uppercase fs-10'>view product</Link>
                </div>
                <div className='customerContent'>
                  <div className='d-grid'>
                    <p>"KALKI made my bridal journey a dream! Stunning bridal wear, impeccable service; felt extraordinary, like a princess. Thank you!"</p>
                    <h5>Romika Ansh Nigam</h5>
                    <span className='fs-10'>Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-1'>
              <div className='customerSlider d-flex'>
                <div className='imgSection'>
                  <img src={require('../../Assets/Img/400px--533px-23-12-23-us-cust-1.jpg')} alt="" />
                  <Link to='/' className='text-uppercase fs-10'>view product</Link>
                </div>
                <div className='customerContent'>
                  <div className='d-grid'>
                    <p>" I'm pleased with my recent purchase of a black floral saree, and the fitted blouse is quite lovely. While it enhances my figure, considering a small adjustment for an even better fit would make it ideal for everyday comfort."</p>
                    <h5>Mary Jimmy</h5>
                    <span className='fs-10'>USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-1'>
              <div className='customerSlider d-flex'>
                <div className='imgSection'>
                  <img src={require('../../Assets/Img/400px--533px-23-12-23-us-cust.jpg')} alt="" />
                  <Link to='/' className='text-uppercase fs-10'>view product</Link>
                </div>
                <div className='customerContent'>
                  <div className='d-grid'>
                    <p>"At my first Indian wedding, nerves about attire vanished! This ensemble shined—vibrant, comfy, endless compliments. I wanna shop again soon!"</p>
                    <h5>Carolina Rabinovich</h5>
                    <span className='fs-10'>USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-1'>
              <div className='customerSlider d-flex'>
                <div className='imgSection'>
                  <img src={require('../../Assets/Img/400px--533px-23-12-23-3.jpg')} alt="" />
                  <Link to='/' className='text-uppercase fs-10'>view product</Link>
                </div>
                <div className='customerContent'>
                  <div className='d-grid'>
                    <p>""Kalki made our wedding attire hunt a breeze! Stunning designs, impeccable service. Can't wait for more photos in our Kalki outfits. If you want perfection, choose Kalki"</p>
                    <h5>Nakita and Chris</h5>
                    <span className='fs-10'>Australia</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-1'>
              <div className='customerSlider d-flex'>
                <div className='imgSection'>
                  <img src={require('../../Assets/Img/400px--533px-23-12-23-2.jpg')} alt="" />
                  <Link to='/' className='text-uppercase fs-10'>view product</Link>
                </div>
                <div className='customerContent'>
                  <div className='d-grid'>
                    <p>"Kalki's service is stellar! Pooja Gupta's quick fix got my lehenga on time. Thrilled with the quality, Kalki is now my one-stop for Indian outfits."</p>
                    <h5>Athya Idnani</h5>
                    <span className='fs-10'>Florida, United States</span>
                  </div>
                </div>
              </div>
            </div>
            
          </Slider>
        </div>
      </Container>

      <div className='lineDivider py-4'>
        <div></div>
      </div>

    {/* Description */}

    <Container className='py-4'>
      <Row>
        <Col className='col-12 dscHeader'>
          <h4>KALKI Fashion - Buy Traditional Indian Clothing and Ethnic Wear Online in India</h4>
        </Col>
        <Col className='col-12 pt-3 dscContent'>
          <h6 className='fw-normal text-secondary'>Launched in 2007 in Mumbai, KALKI is born out of a fiercely creative spirit and a unique design sensibility. The brand KALKI is synonymous with luxury, traditional Indian craft and a distinct and refreshing design. Representing rooted culture and crafts of India and eclectic fusion through its ethnic wear collection is what explains KALKI’s design philosophy. The clothing fashion brand also has international attention and global appeal to its outfit designs.</h6>
          <Link to='/' className='fw-bolder'>Read More...</Link>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default Home
