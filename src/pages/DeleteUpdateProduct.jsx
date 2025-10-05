import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from "firebase/database";
import noProduct from '../assets/images/noProduct.svg'
import Loader from '../components/common/Loader';
import { Bounce, toast } from 'react-toastify';
const DeleteUpdateProduct = () => {

  const db = getDatabase();
  
  // ------------------ Get data from firebase 
  const [products, setProducts ] = useState([])
  const [loader , setLoader] = useState(false)

  const AllProducts = ref(db, 'products/');
  useEffect(()=>{
    onValue(AllProducts, (snapshot) => {
      const myArr = []
  
      snapshot.forEach((item)=>{
        myArr.push({key: item.key , product: item.val()})
      })
      setProducts(myArr)
      setLoader(true)
    })
  } , [])

  // ---------------------- Delete Products 
  const handleDelete = (e)=>{
    remove(ref(db , 'products/' + e.key))
    toast.success('Product deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
  return (
    <div className="space-y-6 p-6 relative">
      {
        loader? '' : <Loader />
      }
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Delete / Update Product</h1>
      {
        products.length == 0?
        <div className='flex items-center justify-center h-[70vh] flex-col'>
          <img className='w-[200px]' src={noProduct} alt="No orders yet..." />
          <h2 className='text-second text-2xl'>No Products available right now...</h2>
        </div>
        :
        <div className="flex flex-col gap-4">
          {
            products.map((item , i)=>(
              console.log(item),
              <div key={i} className="flex flex-col md:flex-row items-center justify-between bg-white p-5 rounded-lg shadow-md gap-4">
              
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded"/>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">{item.product.proName}</p>
                  <p className="text-gray-700 font-medium">${item.product.proPrice}</p>
                </div>
              </div>

              {/* Out of Stock */}
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={item.product.outOfStock} 
                  onChange={() => toggleStock(item.product.id)} 
                  className="w-5 h-5 accent-blue-600"
                />
                <span className="text-gray-800 font-medium">Out of Stock</span>
              </div>

              {/* Delete Button */}
              <button 
                onClick={() => handleDelete(item)} 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-all cursor-pointer"
              >
                Delete
              </button>
            </div>
            ))
          }
        </div>
      }

    </div>
  );
};

export default DeleteUpdateProduct;
