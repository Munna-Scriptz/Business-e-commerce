import React, { useState } from 'react';
import { getDatabase, push, ref, set } from "firebase/database";

const UploadProduct = () => {
  const db = getDatabase();

  const [form, setForm] = useState({ name: "", details: "", price: "", image: null });
  const [formErr, setFormErr] = useState({ nameErr: "", detailsErr: "", priceErr: "", imageErr: null });

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value });



  // ------------- Firebase 

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!form.name) return setForm((prev)=>({...prev , nameErr: 'Please enter product name'}))



    set(push(ref(db, 'products/')), {
      proName: form.name  ,
      proDetails: form.details,
      proPrice: form.price,
      Image: form.image,
    });

    console.log('hello world')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Upload Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Product Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter product name" 
            className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={form.name} 
            onChange={handleChange} 
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Product Details</label>
          <textarea 
            name="details" 
            placeholder="Enter product details" 
            className="border border-gray-300 p-3 rounded h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={form.details} 
            onChange={handleChange} 
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Price</label>
          <input 
            type="number" 
            name="price" 
            placeholder="Enter price" 
            className="border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={form.price} 
            onChange={handleChange} 
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Product Image</label>
          <input 
            type="file" 
            name="image" 
            className="border border-gray-300 p-2 rounded cursor-pointer focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;

