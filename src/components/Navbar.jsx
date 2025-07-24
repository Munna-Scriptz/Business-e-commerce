import React from 'react'
import Logo from '../assets/images/RyansLogo.svg'
import { Link } from 'react-router'
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
        <nav className='py-8 bg-primary'>
            <div className='container'>
                <div id='NavRow' className='flex items-center justify-between'>

                    {/* -----------Logo-------- */}
                    <div className='w-[150px]'>
                        <img src={Logo} alt="Logo" />
                    </div>
                    {/* -----------NavLinks-------- */}
                    <ul className='text-white flex items-center gap-5 font-poppins'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>Shop</Link></li>
                        <li><Link to={'/'}>All products</Link></li>
                        <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/'}>Contact us</Link></li>
                    </ul>
                    {/* -----------Buttons-------- */}
                    <div className='flex items-center gap-5 text-2xl text-white'>
                        <BiSolidPhoneCall  className='cursor-pointer'/>
                        <FaShoppingCart className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar