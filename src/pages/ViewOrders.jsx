import React from 'react';

const orders = [
  {
    time: "2025-10-04 10:30 AM",
    product: { name: "T-Shirt", price: 25 },
    customer: { name: "John Doe", phone: "1234567890", email: "john@test.com", address: "123 Street, City", type: "Home" },
  },
  {
    time: "2025-10-04 11:00 AM",
    product: { name: "Shoes", price: 50 },
    customer: { name: "Jane Smith", phone: "0987654321", email: "jane@test.com", address: "456 Avenue, City", type: "Office" },
  },
];

const ViewOrders = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">View Orders</h1>

      <div className="grid gap-6">
        {orders.map((order, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
            
            {/* Time */}
            <div className="text-sm text-gray-500">{order.time}</div>

            {/* Product Details */}
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">Product:</span>
              <span>{order.product.name} - <span className="font-bold">${order.product.price}</span></span>
            </div>

            {/* Customer Info */}
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">Customer:</span>
                <span>{order.customer.name}</span>
              </div>
              
              <div className="flex flex-col item-ce">
                <span className="font-semibold text-gray-800">Contact:</span>
                <div className='flex items-center gap-2'>
                    <h2 className='font-semibold text-gray-800'>Phone:</h2>
                    <span>{order.customer.phone}</span> 
                </div>
                <div className='flex items-center gap-2'>
                    <h2 className='font-semibold text-gray-800'>Email:</h2>
                    <span>{order.customer.email}</span> 
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">Address:</span>
              <span>{order.customer.address}</span>
              <span className="text-sm text-gray-500">Type: {order.customer.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOrders;
