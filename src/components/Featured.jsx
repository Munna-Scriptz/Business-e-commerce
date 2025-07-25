import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// -------Images 
import Cloths1 from '../assets/images/Clothes1.jpg'
import Cloths2 from '../assets/images/Clothes2.jpg'
import Cloths3 from '../assets/images/Clothes3.jpg'
import Cloths4 from '../assets/images/Clothes4.jpg'
import Cloths5 from '../assets/images/Clothes5.jpg'
import Cloths6 from '../assets/images/Clothes6.jpg'

const Featured = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
          slidesToScroll: 1
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