import React from 'react'
import { Link } from 'react-router'
import { FaAngleRight } from 'react-icons/fa'
import img from '../assets/images/completeImg.png'

const Complete = () => {
  return (
    <>
        {/* ----------------- breadcrumb  */}
        <section id='Complete' className='relative my-[120px]'>
            <div className="container">
                <div id="Complete-Row" className='lg:w-[625px] w-full mx-auto flex flex-col items-center justify-center'>
                    <img src={img} alt="Checkbox" />
                    <h2 className='text-BlueText font-josefin font-bold lg:text-[36px] text-2xl mb-6 mt-7'>Your Order Is Completed! </h2>
                    <p className='text-subText font-lato leading-[30px] text-center mb-10'>Thank you for your order! Your order is being processed and will be completed within 3-4 days. You will receive an Phone call confirmation when your order is completed.</p>
                    <Link className='bg-brand text-white inline-block py-[12px] px-[32px] rounded-[4px] font-josefin hover:bg-subText duration-300' to={'/shop'}>Back to Shop</Link>
                </div>
            </div>
            {/* ----------------------------Decs  */}
        </section>
    </>
  )
}

export default Complete