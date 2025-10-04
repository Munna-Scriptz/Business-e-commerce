import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleProducts from '../components/common/SingleProducts'
import { useNavigate } from 'react-router'
// -------Images 
import Cloths1 from '../assets/images/Clothes1.jpg'
import Cloths2 from '../assets/images/clothes2.jpg'
import Cloths3 from '../assets/images/clothes3.jpg'
import Cloths4 from '../assets/images/clothes4.jpg'
import Cloths5 from '../assets/images/clothes5.jpg'
import Cloths6 from '../assets/images/clothes6.jpg'
const Shop = () => {
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
    },
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
    },
  ]

  // -------------- Navigating 
  const navigate = useNavigate()

  const handleNav = (e)=>{
    console.log(e)
    navigate('/details' , { state: e })
  }
  return (
    <>
      <div className="container">


        <div className="mt-[64px]">
          <div className='flex items-center gap-[53px] flex-wrap'>
            {
              products.map((item , i)=>(
                <div onClick={()=>handleNav(item)} className='w-[380px] mx-auto cursor-pointer' >
                  <img className='h-[380px]' src={item.image} alt="Clothes" />
                  <div className='mt-2 pl-5'>
                    <h2 className='text-primary font-poppins text-xl'>{item.name}</h2>
                    <p className='text-[#838383] font-poppins text-sm mt-1'>{item.description}</p>
                    <p className='text-[#313131] font-poppins text-lg mt-1'>${item.price}</p>
                  </div>
                </div>
              ))
            }
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Shop