import React, { useState } from 'react'
import { Link } from 'react-router'
import Logo from '../assets/images/RyansLogo.svg'
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";

const ResNavbar = () => {

  const [Value , SetValue] = useState(true)


  return (
    <>
        <nav className='py-8 bg-primary lg:hidden px-2'>
                    <div className='container'>
                        <div id='NavRow' className='flex items-center justify-between'>
        
                            {/* -----------Menu Icon-------- */}
                            <div className='text-white text-[20px] cursor-pointer' onClick={()=>SetValue(!Value)}>
                              <FaBars />
                            </div>
        
                            {/* -----------Logo-------- */}
                            <div className='w-[75px]'>
                                <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                            </div>
                            {/* -----------Buttons-------- */}
                            <div id='NavIcon' className='flex items-center gap-2 text-xl text-white'>
                                <BiSolidPhoneCall  className='cursor-pointer hover:text-brand duration-[300ms]'/>
                            </div>
                        </div>
                    </div>
                            {/* -----------Menu Bar-------- */}
                            <section className={`absolute w-full top-0 left-0 h-full duration-[.8s] z-10 ${Value? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[0px]'}`}>
                            <div onClick={()=>SetValue(!Value)} className='absolute w-full h-full bg-[#00000059] blur-[10px]'></div>
                            <div className={`h-screen w-[60%] absolute top-0 bg-primary p-5 flex duration-[.8s] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50`}>
                              <div className='flex items-center justify-between absolute top-0 right-0 w-full p-5'>
                                  <Link to={'/'} className='w-[64px]'><img src={Logo} alt="Logo" /></Link>
                                  <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                                      <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                                      <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                                      <span className={`w-[20px] h-[2px] bg-[#F8F8F8] absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                                  </button>
                              </div>
        
                              <ul id='ResNav' className='flex flex-col gap-5 mt-25 text-white font-poppins'>
                                <li><Link onClick={()=>SetValue(!Value)} to={'/'}>Home</Link></li>
                                <li><Link onClick={()=>SetValue(!Value)} to={'/shop'}>Shop</Link></li>
                                <li><Link onClick={()=>SetValue(!Value)} to={'/about'}>About</Link></li>
                                <li><Link onClick={()=>SetValue(!Value)} to={'/contact'}>Contact us</Link></li>
                              </ul>
                            </div>
                            </section>
              </nav>
    </>
  )
}

export default ResNavbar