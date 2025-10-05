import React, { useState } from 'react';
import { getDatabase, push, ref, set } from "firebase/database";

const UploadProduct = () => {
  const db = getDatabase();

  const [form, setForm] = useState({ name: "", details: "", price: "", image: '' });
  const [formErr, setFormErr] = useState({ nameErr: "Product Name", nameCol: '#364153', detailsErr: "Product Details", detailsCol: '#364153', priceErr: "Price", priceCol: '#364153', imageErr: 'Product Image' , imageCol: '#364153 ' });

  const handleChange = (e) => {setForm({...form, [e.target.name]: e.target.value ,}) , setFormErr((prev)=>({...prev , nameErr: 'Product Name' , nameCol: '#364153', detailsErr: "Product Details", detailsCol: '#364153', priceErr: "Price", priceCol: '#364153', imageErr: 'Product Image' , imageCol: '#364153 '}))}


  console.log(form.image)
  // ------------- Firebase 

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!form.name) return setFormErr((prev)=>({...prev , nameErr: 'Please enter product name' , nameCol: '#fb2c36'}))
    if(!form.details) return setFormErr((prev)=>({...prev , detailsErr: 'Please enter product Details' , detailsCol: '#fb2c36'}))
    if(!form.price) return setFormErr((prev)=>({...prev , priceErr: 'Please enter Price' , priceCol: '#fb2c36'}))
    if(!form.image) return setFormErr((prev)=>({...prev , imageErr: 'Please Upload Product Image' , imageCol: '#fb2c36'}))



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
          <label className={`mb-1 font-medium`} style={{color : formErr.nameCol}}>{formErr.nameErr}</label>
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
          <label className={`mb-1 font-medium`} style={{color : formErr.nameCol}}>{formErr.detailsErr}</label>
          <textarea 
            name="details" 
            placeholder="Enter product details" 
            className="border border-gray-300 p-3 rounded h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={form.details} 
            onChange={handleChange} 
          />
        </div>

        <div className="flex flex-col">
          <label className={`mb-1 font-medium`} style={{color : formErr.priceCol}}>{formErr.priceErr}</label>
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
          <label className={`mb-1 font-medium`} style={{color : formErr.imageCol}}>{formErr.imageErr}</label>
          <input 
            type="file" 
            name="image" 
            className="border border-gray-300 p-2 rounded cursor-pointer focus:ring-2 focus:ring-blue-500"
            value={form.image} 
            onChange={handleChange} 
            onClick={()=>setFormErr((prev)=>({...prev ,imageErr: 'Product Image' , imageCol: '#364153 '}))}
          />
        </div>

        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium cursor-pointer"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;

