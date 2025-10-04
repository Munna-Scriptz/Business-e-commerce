import React, { useState } from 'react';
import productImg from '../assets/images/Clothes1.jpg';

const initialProducts = [
  { id: 1, name: "T-Shirt", price: 25, image: productImg, outOfStock: false },
  { id: 2, name: "Shoes", price: 50, image: productImg, outOfStock: false },
];

const DeleteUpdateProduct = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const toggleStock = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, outOfStock: !p.outOfStock } : p));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Delete / Update Product</h1>

      <div className="flex flex-col gap-4">
        {products.map(p => (
          <div key={p.id} className="flex flex-col md:flex-row items-center justify-between bg-white p-5 rounded-lg shadow-md gap-4">
            
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded"/>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800">{p.name}</p>
                <p className="text-gray-700 font-medium">${p.price}</p>
              </div>
            </div>

            {/* Out of Stock */}
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                checked={p.outOfStock} 
                onChange={() => toggleStock(p.id)} 
                className="w-5 h-5 accent-blue-600"
              />
              <span className="text-gray-800 font-medium">Out of Stock</span>
            </div>

            {/* Delete Button */}
            <button 
              onClick={() => handleDelete(p.id)} 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-all"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteUpdateProduct;
