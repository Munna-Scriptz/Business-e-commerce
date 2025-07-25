import React from 'react'
import BgImg from '../assets/images/BannerBg2.png'
import { Link } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import InstaIcon from '../assets/images/instaicon.svg'

const Banner = () => {
  return (
    <>
        <section id='Banner' className='h-screen'>
            <div className="container">
                <div className='pt-15 lg:pt-25'>
                    <h1 className='text-[#eeeded] font-poppins font-medium text-[29px] lg:w-[660px] lg:text-[52px] Text-Yup'>Get your favorite <span className='text-[#83db50]'>Product</span> from our online store!</h1>
                    <div className='flex items-center justify-center mt-10 lg:justify-start'>
                        <Link to={'/'} className='text-md font-poppins text-white bg-brand py-2 px-8 rounded-full font-medium'>Shop Now</Link>
                    </div>
                    <div className='flex items-center justify-between mt-10 gap-5'>
                        <span className='bg-[#eeeded] w-22 h-[2px] lg:w-[42%] inline-block'></span>
                        <p className='text-[#eeeded] font-poppins font-normal text-sm lg:text-xl'>Or Buy from</p>
                        <span className='bg-[#eeeded] w-22 h-[2px] lg:w-[42%] inline-block'></span>
                    </div>
                    <div className='flex  flex-col gap-[17px] mt-10'>
                        <Link className='flex items-center gap-2 duration-[.3s] hover:scale-[1.05]'>
                            <FaFacebook className='text-[20px] bg-white rounded-full' fill='#4676ED'/>
                            <p className='text-base text-Primary font-normal text-white'>Facebook</p>
                        </Link>
                        <Link className='flex items-center gap-2 duration-[.3s] hover:scale-[1.05]'>
                            <FaYoutube className='text-[20px] bg-[#DA0000] p-[3px] rounded-full' fill='#ffffff'/>
                            <p className='text-base text-Primary font-normal text-white'>Youtube</p>
                        </Link>
                        <Link className='flex items-center gap-2 duration-[.3s] hover:scale-[1.05]'>
                            <img className='w-[20px]' src={InstaIcon} alt="icon" />
                            <p className='text-base text-Primary font-normal text-white'>Instagram</p>
                        </Link>
                        <Link className='flex items-center gap-2 duration-[.3s] hover:scale-[1.05]'>
                            <FaTwitter className='text-[20px] bg-[#5A99EC] p-[4px] rounded-full' fill='#ffffff'/>
                            <p className='text-base text-Primary font-normal text-white'>Twitter</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner