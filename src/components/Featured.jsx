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
import { useNavigate } from 'react-router';

const Featured = () => {
  function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    >
      <FaAngleRight fill="#000" size={25} />
    </div>
  );
  }
  function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    >
      <FaAngleLeft fill="#000" size={25} />
    </div>
  );
  }
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
    nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

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
  
  const products = [
    {
      image: Cloths1,
      name: 'Classic Striped Polo',
      description: 'Drop Shoulder Zipperpolo T-shirts',
      price: '5.79'
    },
    {
      image: Cloths2,
      name: 'Classic Striped Polo',
      description: 'Drop Shoulder Zipperpolo T-shirts',
      price: '5.79'
    },
    {
      image: Cloths3,
      name: 'Classic Striped Polo',
      description: 'Drop Shoulder Zipperpolo T-shirts',
      price: '5.79'
    },
    {
      image: Cloths4,
      name: 'Classic Striped Polo',
      description: 'Drop Shoulder Zipperpolo T-shirts',
      price: '5.79'
    },
    {
      image: Cloths5,
      name: 'Classic Striped Polo',
      description: 'Drop Shoulder Zipperpolo T-shirts',
      price: '5.79'
    },
    {
      image: Cloths6,
      name: 'Classic Striped Polo',
      description: 'Drop Shoulder Zipperpolo T-shirts',
      price: '5.79'
    }
  ]

  // -------------- Navigating 
  const navigate = useNavigate()

  const handleNav = (e)=>{
    console.log(e)
    navigate('/details' , { state: e })
  }
  return (
    <>
        <section className='mt-25'>
            <div className='container'>
                <div id="header">
                    <h2 className='text-3xl text-primary font-medium text-center font-poppins'>Featured Products</h2>
                </div>
                 <div className="slider-container mt-15">
                    <Slider {...settings}>
                      {
                        products.map((item , i)=>(
                          <div onClick={()=>handleNav(item)} className='w-[380px] cursor-pointer' >
                            <img className='h-[380px]' src={item.image} alt="Clothes" />
                            <div className='mt-2 pl-5'>
                              <h2 className='text-primary font-poppins text-xl'>{item.name}</h2>
                              <p className='text-[#838383] font-poppins text-sm mt-1'>{item.description}</p>
                              <p className='text-[#313131] font-poppins text-lg mt-1'>${item.price}</p>
                            </div>
                          </div>
                        ))
                      }
                    </Slider>
                  </div>
            </div>
        </section>
    </>
  )
}

export default Featured