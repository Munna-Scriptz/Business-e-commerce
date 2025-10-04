import React from 'react'
import { useLocation } from 'react-router'

const Details = () => {
    const sendedData = useLocation()
    const locationData = sendedData.state
    console.log(sendedData.state)
    return (
        <>
            <section id='Details' className='mt-10'>
                <div className="container">
                    <div id="Details-Row" className='flex items-start gap-[50px] justify-center'>
                        <div>
                            <img className='w-[550px]' src={locationData.image} alt="Selected Product" />
                            <div className='mt-4'>
                                <h2 className='text-primary font-poppins text-xl'>Name: {locationData.name}</h2>
                                <p className='text-[#838383] font-poppins text-sm mt-2'>Description: {locationData.description}</p>
                                <p className='text-[#313131] font-poppins text-lg mt-2'>Price : ${locationData.price}</p>
                            </div>
                        </div>

                        {/* ---------------- Order  */}
                        <div className='w-[600px] mt-10 bg-[#e4e4e4] py-6 px-[24px] rounded-[12px]'>
                            <h2 className='text-[#2d640c] font-poppins text-xl mb-10'>To order this product please fill out your information</h2>

                            <form className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full border-1 border-gray-400 px-3 py-2 rounded"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                {/* Address + Type */}
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <label htmlFor="address" className="block mb-1">Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            className="w-full border-1 border-gray-400 px-3 py-2 rounded"
                                            placeholder="Enter address"
                                        />
                                    </div>
                                    <div className="w-40">
                                        <label htmlFor="addressType" className="block mb-1">Type</label>
                                        <select
                                            id="addressType"
                                            className="w-full border-1 border-gray-400 px-3 py-2 rounded"
                                        >
                                            <option value="home">Home</option>
                                            <option value="town">Town</option>
                                            <option value="office">Office</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full border-1 border-gray-400 px-3 py-2 rounded"
                                        placeholder="Enter phone number"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full border-1 border-gray-400 px-3 py-2 rounded"
                                        placeholder="Enter email"
                                    />
                                </div>

                                {/* --------------Order Button  */}
                                <button className='w-full bg-brand py-2.5 rounded-[8px] mt-6 cursor-pointer text-white font-medium hover:bg-second duration-300'>
                                    Order Now
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details