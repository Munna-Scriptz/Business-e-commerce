import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

// -------Images 
import Cloths1 from '../assets/images/Clothes1.jpg'
import Cloths2 from '../assets/images/clothes2.jpg'
import Cloths3 from '../assets/images/clothes3.jpg'
import Cloths4 from '../assets/images/clothes4.jpg'
import Cloths5 from '../assets/images/clothes5.jpg'
import Cloths6 from '../assets/images/clothes6.jpg'

const Featured = () => {
    const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <FaAngleRight fill='#000'/>,
    prevArrow: <FaAngleLeft fill='#000'/>,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };
  
  return (
    <>
        <section className='mt-25'>
            <div className='container'>
                <div id="header">
                    <h2 className='text-3xl text-primary font-medium text-center font-poppins'>Featured Products</h2>
                </div>
                 <div className="slider-container mt-15">
                    <Slider {...settings}>
                      <div  >
                        <img  className='w-[316px] h-[316px]' src={Cloths1} alt="Clothes" />
                      </div>
                      <div >
                        <img className='w-[316px] h-[316px]'  src={Cloths2} alt="Clothes" />
                      </div>
                      <div >
                        <img className='w-[316px] h-[316px]'  src={Cloths3} alt="Clothes" />
                      </div>
                      <div >
                        <img className='w-[316px] h-[316px]'  src={Cloths4} alt="Clothes" />
                      </div>
                      <div >
                        <img className='w-[316px] h-[316px]'  src={Cloths5} alt="Clothes" />
                      </div>
                      <div >
                        <img className='w-[316px] h-[316px]'  src={Cloths6} alt="Clothes" />
                      </div>
                    </Slider>
                  </div>
            </div>
        </section>
    </>
  )
}

export default Featured