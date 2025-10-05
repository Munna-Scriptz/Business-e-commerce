import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, remove } from "firebase/database";
import noOrder from '../assets/images/noOrders.svg'
import Loader from '../components/common/Loader';
import { MdDeleteOutline } from "react-icons/md";
import { Bounce, toast } from 'react-toastify';

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
        myArr.push({key: item.key , list: item.val()})
      })
  
      setOrder(myArr)
      setLoader(true)
    });
  } , [])
  
  // ---------------------- Delete Products 
  const handleDelete = (e)=>{
    remove(ref(db , 'orders/' + e.key))
    toast.success('Order deleted!', {
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
                
                {/* --------------Time , delete */}
                <div className='flex items-center justify-between'>
                  <div className="text-sm text-gray-500">2025-10-04 10:30 AM</div>
                  <div onClick={()=>handleDelete(item)} className='flex items-center gap-1.5 cursor-pointer'>
                    <p className='text-red-500 font-medium text-sm'>Delete</p>
                    <MdDeleteOutline className='text-red-500 text-xl' />
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">Product:</span>
                  <span>{item.list.proName} - <span className="font-semibold">${item.list.proPrice}</span></span>
                </div>

                {/* Customer Info */}
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">Customer:</span>
                    <span>{item.list.name}</span>
                  </div>
                  
                  <div className="flex flex-col item-ce">
                    <span className="font-semibold text-gray-800">Contact:</span>
                    <div className='flex items-center gap-2'>
                        <h2 className='font-semibold text-gray-800'>Phone:</h2>
                        <span>{item.list.phone}</span> 
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='font-semibold text-gray-800'>Email:</h2>
                        <span>{item.list.email}</span> 
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">Address:</span>
                  <span>{item.list.address}</span>
                  <span className="text-sm text-gray-500">Type: {item.list.addressType}</span>
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
