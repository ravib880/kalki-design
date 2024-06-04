import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { GiReturnArrow } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { GiSewingMachine } from "react-icons/gi";
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

      <Container className='py-4'>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="px-1 px-sm-2">
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/ctg1.png')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Must-Have Bestsellers</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className="px-1 px-sm-2">
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/ctg2.png')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Must-Have Bestsellers</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className="px-1 px-sm-2">
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/ctg3.png')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Must-Have Bestsellers</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className="px-1 px-sm-2">
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/ctg4.png')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Must-Have Bestsellers</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className="px-1 px-sm-2">
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/ctg1.png')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Must-Have Bestsellers</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
            <div className="px-1 px-sm-2">
              <div className='text-center ctgBanner'>
                <img src={require('../../Assets/Img/ctg2.png')} alt="" />
                <div className='boxShade'></div>
                <div className='inCtgBanner'>
                  <h2 className='mb-2 mb-sm-4'>Must-Have Bestsellers</h2>
                  <Link to='/' className='stretched-link'>shop now</Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>

    </div>
  )
}

export default Home
