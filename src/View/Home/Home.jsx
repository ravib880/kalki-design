import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className='main_home'>
      <Carousel fade>
        <Carousel.Item>
          <Link to='/bridal'>
            <img src={require('../../Assets/Img/sld11.png')} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to='/bridal'>
            <img src={require('../../Assets/Img/sld12.png')} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to='/bridal'>
            <img src={require('../../Assets/Img/sld13.png')} alt="" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to='/bridal'>
            <img src={require('../../Assets/Img/sld14.png')} alt="" />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home
