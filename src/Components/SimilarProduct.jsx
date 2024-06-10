import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
};

function SimilarProduct() {
    return (
        <div>
            <Container className='py-4 px-md-0'>
                <h4 className='ff-lexend pb-3'>Similar Products</h4>
                <div className="slider-container">
                    <Slider {...settings} className='customProductSlide'>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/white_tussar_saree_with_scallop-sg182597_6_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>White Tussar Saree With Scallop Border And Unstitched Blouse Piece</p>
                                <h6>₹7,995</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/white_saree_with_cutwork_scallop-sg182598_7_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>White Saree With Cutwork Scallop Border In Tussar And Unstitched Blouse Piece</p>
                                <h6>₹7,995</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/white_satin_saree_with_stone_embellishments-sg188313_8_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>White Satin Saree With Embellishments And Unstitched Blouse Piece</p>
                                <h6>₹2,995</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/red_satin_saree_with_stone_embellishments-sg185474_8_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>Red Satin Saree With Stone Embellishments And Unstitched Blouse Piece</p>
                                <h6>₹4,225</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/pink_chiffon_saree_with_floral_prints_and_unstitched_blouse_-sg182291_8_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>Pink Chiffon Saree With Floral Prints And Unstitched Blouse Piece</p>
                                <h6>₹5,995</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/white_tussar_silk_saree-sg182594_7_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>Beige Tussar Silk Saree With Mirror Scallop Border And Unstitched Blouse Piece</p>
                                <h6>₹8,995</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/multicolor_saree_with_abstract_print-sg185756_8_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>Multicolor Saree With Abstract Print And Unstitched Blouse Piece</p>
                                <h6>₹4,225</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/green_saree_in_organza_with_lace_border-sg183763_8_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>Green Saree In Organza With Lace Border And Unstitched Blouse Piece</p>
                                <h6>₹3,650</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/red_printed_kalamkari_saree-sg176776_10_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>Red Printed Kalamkari Saree In Silk With Unstitched Blouse</p>
                                <h6>₹4,695</h6>
                            </Link>
                        </div>
                        <div className='px-1 px-md-2'>
                            <Link>
                                <img src={require('../Assets/Img/white_satin_saree_with_floral_motif_thread-sg199309_5_.jpg')} className='w-100' alt="" />
                                <p className='mb-1'>White Satin Saree With Floral Motif Thread Work And Unstitched Blouse Piece</p>
                                <h6>₹6,995</h6>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default SimilarProduct
