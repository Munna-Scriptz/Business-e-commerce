import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getDatabase, ref, onValue } from "firebase/database";

const Shop = () => {
  // -------------------- data from firebase 
  const [product , setProduct] = useState([])
  
  const db = getDatabase();
  const AllProducts = ref(db, 'products/');

  useEffect(()=>{
    onValue(AllProducts, (snapshot) => {
      const myArr = []

      snapshot.forEach((item)=>{
        myArr.push(item.val())
      })

      setProduct(myArr)
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
    <>
      <div className="container">


        <div className="mt-[64px]">
          <div className='flex items-center gap-[53px] flex-wrap'>
            {
              product.map((item , i)=>(
                console.log(item),
                <div key={i} onClick={()=>handleNav(item)} className='w-[380px] mx-auto cursor-pointer' >
                  <img className='h-[380px]' src={item.image} alt="Clothes" />
                  <div className='mt-2 pl-5'>
                    <h2 className='text-primary font-poppins text-xl'>{item.proName}</h2>
                    <p className='text-[#838383] font-poppins text-sm mt-1'>{item.proDetails}</p>
                    <p className='text-[#313131] font-poppins text-lg mt-1'>${item.proPrice}</p>
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