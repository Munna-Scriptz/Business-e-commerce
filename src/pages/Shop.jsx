import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getDatabase, ref, onValue } from "firebase/database";
import noProduct from '../assets/images/noProduct.svg'
import Loader from '../components/common/Loader';

const Shop = () => {
  // -------------------- data from firebase 
  const [product , setProduct] = useState([])
  const [loader , setLoader] = useState(false)

  const db = getDatabase();
  const AllProducts = ref(db, 'products/');

  useEffect(()=>{
    onValue(AllProducts, (snapshot) => {
      const myArr = []

      snapshot.forEach((item)=>{
        myArr.push(item.val())
      })

      setProduct(myArr)
      setLoader(true)
    });
    
  } , [])
  console.log(product)

  

  // -------------- Navigating 
  const navigate = useNavigate()

  const handleNav = (e)=>{
    console.log(e)
    navigate('/details' , { state: e })
  }
  return (
    <div className='relative'>
      <div className="container">
      {
        loader? '' : <Loader mode={'absolute'} />
      }
        <div className="pt-[64px]">
          {
            product.length == 0?
            <div className='flex items-center justify-center h-[70vh] flex-col'>
              <img className='md:w-[200px] w-[150px]' src={noProduct} alt="No orders yet..." />
              <h2 className='text-second md:text-2xl text-lg'>No Products available right now...</h2>
            </div>
            :
            <div className='flex items-center gap-[53px] flex-wrap'>
              {
                product.map((item , i)=>(
                  console.log(item),
                  <div key={i} onClick={()=>handleNav(item)} className='md:w-[380px] w-full mx-auto cursor-pointer' >
                    <img className='md:h-[380px] h-[330px] w-full' src={item.image} alt="Clothes" />
                    <div className='mt-2'>
                      <h2 className='text-primary font-poppins text-xl'>{item.proName}</h2>
                      <p className='text-[#838383] font-poppins text-sm mt-1'>{item.proDetails}</p>
                      <p className='text-[#313131] font-poppins text-lg mt-1'>${item.proPrice}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          }
        </div>
        
      </div>
    </div>
  )
}

export default Shop