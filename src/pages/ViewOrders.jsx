import React from 'react'

const orders = [
  {
    product: { name: "T-Shirt", price: 25 },
    customer: { name: "John Doe", phone: "1234567890", email: "john@test.com", address: "123 Street, City" },
  },
  {
    product: { name: "Shoes", price: 50 },
    customer: { name: "Jane Smith", phone: "0987654321", email: "jane@test.com", address: "456 Avenue, City" },
  },
];

const ViewOrders = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">View Orders</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Product Details</th>
            <th className="border p-2">Customer Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email & Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i} className="text-center">
              <td className="border p-2">
                {order.product.name} - ${order.product.price}
              </td>
              <td className="border p-2">{order.customer.name}</td>
              <td className="border p-2">{order.customer.phone}</td>
              <td className="border p-2">{order.customer.email}, {order.customer.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrders;
