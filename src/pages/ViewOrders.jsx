import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import noOrder from '../assets/images/noOrders.svg'
import Loader from '../components/common/Loader';

const ViewOrders = () => {
  const db = getDatabase();
  const [loader , setLoader] = useState(false)

  // ------------------ Get data from firebase 
  const [orders, setOrder ] = useState([])
  const orderList = ref(db, 'orders/');
  useEffect(()=>{
    onValue(orderList, (snapshot) => {
      const myArr = []
  
      snapshot.forEach((item)=>{
        myArr.push(item.val())
      })
  
      setOrder(myArr)
      setLoader(true)
    });
  } , [])
  
  
  
  return (
    <div className="space-y-6 p-6 relative">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">View Orders</h1>
      {
        loader? '' : <Loader mode={'absolute'} />
      }
      {
        orders.length == 0?
          <div className='flex items-center justify-center h-[70vh] flex-col'>
            <img className='w-[200px]' src={noOrder} alt="No orders yet..." />
            <h2 className='text-second text-2xl'>No order available yet...</h2>
          </div>
        :
          <div className="grid gap-6">
            {
            
            orders.map((item, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
                
                {/* Time */}
                <div className="text-sm text-gray-500">2025-10-04 10:30 AM</div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">Product:</span>
                  <span>{item.proName} - <span className="font-semibold">${item.proPrice}</span></span>
                </div>

                {/* Customer Info */}
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">Customer:</span>
                    <span>{item.name}</span>
                  </div>
                  
                  <div className="flex flex-col item-ce">
                    <span className="font-semibold text-gray-800">Contact:</span>
                    <div className='flex items-center gap-2'>
                        <h2 className='font-semibold text-gray-800'>Phone:</h2>
                        <span>{item.phone}</span> 
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='font-semibold text-gray-800'>Email:</h2>
                        <span>{item.email}</span> 
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">Address:</span>
                  <span>{item.address}</span>
                  <span className="text-sm text-gray-500">Type: {item.addressType}</span>
                </div>
              </div>
            ))
            
            }
          </div>
      }
    </div>
  );
};

export default ViewOrders;
