import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className='main_home'>
      <Carousel fade>
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
    </div>
  )
}

export default Home
