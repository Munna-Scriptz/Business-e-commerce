import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleProducts from '../components/common/SingleProducts'

const Shop = () => {
  const [product , setProducts] = useState([])


  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err))
  } , [])
  
    // ----------------------------------- Add to cart 

  return (
    <>
      <div className="container">


        <div className="mt-[64px]">
          <div className='flex items-center gap-[53px] flex-wrap'>
            {
              product.map((item , i)=>(
                <SingleProducts proImage={item.thumbnail} proName={item.title} proDesc={item.description} proPrice={item.price} key={i}/>
              ))
            }
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Shop