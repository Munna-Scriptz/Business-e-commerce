import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from "firebase/database";

const DeleteUpdateProduct = () => {

  const db = getDatabase();
  
  // ------------------ Get data from firebase 
  const [products, setProducts ] = useState([])

  const AllProducts = ref(db, 'products/');
  useEffect(()=>{
    onValue(AllProducts, (snapshot) => {
      const myArr = []
  
      snapshot.forEach((item)=>{
        myArr.push({key: item.key , product: item.val()})
      })
  
      setProducts(myArr)
    });
  } , [])

  // ---------------------- Delete Products 
  const handleDelete = (e)=>{
     remove(ref(db , 'products/' + e.key))
     console.log(e)
  }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Delete / Update Product</h1>

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
    </div>
  );
};

export default DeleteUpdateProduct;
