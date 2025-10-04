import React, { useState } from 'react'

const UploadProduct = () => {
  const [form, setForm] = useState({ name: "", details: "", price: "", image: "" });

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", form);
    // You can send it to backend here
    alert("Product uploaded!");
    setForm({ name: "", details: "", price: "", image: "" });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upload Product</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" className="border p-2 rounded" value={form.name} onChange={handleChange}/>
        <input type="text" name="details" placeholder="Product Details" className="border p-2 rounded" value={form.details} onChange={handleChange}/>
        <input type="number" name="price" placeholder="Price" className="border p-2 rounded" value={form.price} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" className="border p-2 rounded" value={form.image} onChange={handleChange}/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">Submit Product</button>
      </form>
    </div>
  );
};

export default UploadProduct;
