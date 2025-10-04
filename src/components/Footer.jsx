import React from 'react'
import logo from '../assets/images/RyansLogo.svg'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router'
const Footer = () => {
  return (
    <>
    <footer className='mt-[112px] py-[34px] bg-second'>
        <div className="container">
            <div id="Footer-Row" className='flex lg:flex-row flex-col lg:items-start items-center lg:gap-0 gap-[40px] justify-between'>
                <div className='flex flex-col lg:items-start items-center'>
                    <img className='w-[142px]' src={logo} alt="Logo" />
                    <div className='mt-9 flex flex-col lg:items-start items-center'>
                        <p className=' text-white lg:text-start text-center '>🔥 Wear Ryans 🔥<br />🔥 Wear The class 🔥</p>
                        <p className='text-white font-poppins flex items-center gap-2 mt-5'><IoLocationSharp /> Dhaka , Bangladesh</p>
                        <p className='text-white font-poppins flex items-center gap-2 mt-2'><IoCall /> Phone : 01908905391</p>
                        <p className='text-white font-poppins flex items-center gap-2 mt-2'><MdEmail /> Email : munnascriptz@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-white font-poppins text-2xl'>Pages</h2>
                    <div className='mt-4 flex flex-col lg:items-start items-center gap-3'>
                        <Link to={'/'} className='text-[#c9c9c9] font-poppins '>Home</Link>
                        <Link to={'/shop'} className='text-[#c9c9c9] font-poppins '>Shop</Link>
                        <Link to={'/'} className='text-[#c9c9c9] font-poppins '>About</Link>
                        <Link to={'/'} className='text-[#c9c9c9] font-poppins '>Contact us</Link>
                    </div>
                </div>
                <div>
                    <h2 className='text-white font-poppins lg:text-start text-center text-2xl'>Support</h2>
                    <div className='mt-4 flex lg:items-start items-center flex-col gap-3'>
                        <Link to={'/about'} className='text-[#c9c9c9] font-poppins '>About us</Link>
                        <Link to={'/contact'} className='text-[#c9c9c9] font-poppins '>Contact</Link>
                        <Link to={'/'} className='text-[#c9c9c9] font-poppins '>Privacy & Policy</Link>
                        <Link to={'/'} className='text-[#c9c9c9] font-poppins '>Terms and Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t border-t-[#4A4A4A] mt-10 pt-6'>
            <p className='text-[#b4b4b4] font-poppins text-center'>© 2025 Made By <Link className='underline' to={'https://munna-scriptz.vercel.app/'}>Munna-Scriptz,</Link> Inc.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer