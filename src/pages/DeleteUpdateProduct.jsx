import React, { useState } from 'react'

const initialProducts = [
  { id: 1, name: "T-Shirt", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Shoes", image: "https://via.placeholder.com/100" },
];

const DeleteUpdateProduct = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Delete/Update Product</h1>
      <div className="flex flex-col gap-4">
        {products.map(p => (
          <div key={p.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div className="flex items-center gap-4">
              <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded"/>
              <p>{p.name}</p>
            </div>
            <button onClick={() => handleDelete(p.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteUpdateProduct;
