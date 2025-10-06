import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getDatabase, push, ref, set } from "firebase/database";
import Loader from '../components/common/Loader';
import { Bounce, toast } from 'react-toastify';
const Details = () => {
    const db = getDatabase();
    const navigate = useNavigate()
    const sendedData = useLocation()
    const locationData = sendedData.state
    const [loader , setLoader] = useState(true)
    // ------------------ Order Record 
    const [formData , setFormData] = useState({
        name: '',
        address: '',
        type: '',
        phone: '',
        email: '',
        formError: 'To order this product please fill out your information',
        errorCol: '#2d640c'
    })

    const handleForm = (e)=>{
        e.preventDefault()
        if(!formData.name || !formData.address || !formData.phone || !formData.email) return setFormData((prev)=>({...prev , formError: 'Please fill out all your information' , errorCol: '#f00a0a'}))
        setLoader(false)
        // --------------------- Writing data to db 
        set(push(ref(db, 'orders/')), {
            proName: locationData.proName,
            proPrice: locationData.proPrice,
            name: formData.name  ,
            address: formData.address,
            addressType: formData.type,
            phone: formData.phone,
            email: formData.email,
        })
            
        .then(() => {
            toast.success('Your order has been recorded!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        })
        .catch((error) => {
            console.log(error)
            toast.error('Something went wrong!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        })
        setTimeout(() => {
            setLoader(false)
            navigate('/complete')
        }, 3000);
    }
    return (
        <>
            <section id='Details' className='mt-10'>
                {
                    loader? '' : <Loader mode={'fixed'} />
                }
                <div className="container">
                    <div id="Details-Row" className='flex lg:flex-row flex-col items-start gap-[50px] justify-center'>
                        <div>
                            <img className='w-[550px]' src={locationData.image} alt="Selected Product" />
                            <div className='mt-4'>
                                <h2 className='text-primary font-poppins text-xl'>Name: {locationData.proName}</h2>
                                <p className='text-[#838383] font-poppins text-sm mt-2'>Description: {locationData.proDetails}</p>
                                <p className='text-[#313131] font-poppins text-lg mt-2'>Price : ${locationData.proPrice}</p>
                            </div>
                        </div>

                        {/* ---------------- Order  */}
                        <div className='lg:w-[600px] w-full mt-10 bg-[#e4e4e4] py-6 px-[24px] rounded-[12px]'>
                            <h2 className='font-poppins font-medium lg:text-xl text-lg lg:text-start text-center mb-10' style={{color: formData.errorCol}}>{formData.formError}</h2>

                            <form onSubmit={handleForm} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full border-1 border-gray-400 px-3 py-2 rounded"
                                        placeholder="Enter your name"
                                        onChange={(e)=>setFormData((prev)=>({...prev , name: e.target.value ,formError: 'To order this product please fill out your information', errorCol: '#2d640c'}))}
                                    />
                                </div>

                                {/* Address + Type */}
                                <div className="flex lg:flex-row flex-col gap-2">
                                    <div className="flex-1">
                                        <label htmlFor="address" className="block mb-1">Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            className="w-full border-1 border-gray-400 px-3 py-2 rounded"
                                            placeholder="Enter address"
                                            onChange={(e)=>setFormData((prev)=>({...prev , address: e.target.value,formError: 'To order this product please fill out your information', errorCol: '#2d640c'}))}
                                        />
                                    </div>
                                    <div className="lg:w-40 w-full">
                                        <label htmlFor="addressType" className="block mb-1">Type</label>
                                        <select
                                            id="addressType"
                                            className="w-full border-1 border-gray-400 px-3 py-2 rounded"
                                            onChange={(e)=>setFormData((prev)=>({...prev , type: e.target.value,formError: 'To order this product please fill out your information', errorCol: '#2d640c'}))}
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
                                        onChange={(e)=>setFormData((prev)=>({...prev , phone: e.target.value,formError: 'To order this product please fill out your information', errorCol: '#2d640c'}))}
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
                                        onChange={(e)=>setFormData((prev)=>({...prev , email: e.target.value,formError: 'To order this product please fill out your information', errorCol: '#2d640c'}))}
                                    />
                                </div>

                                {/* --------------Order Button  */}
                                <button type='submit' className='w-full bg-brand py-2.5 rounded-[8px] mt-6 cursor-pointer text-white font-medium hover:bg-second duration-300'>
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