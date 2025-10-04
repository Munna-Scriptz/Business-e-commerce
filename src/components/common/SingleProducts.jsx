import React from 'react'

const SingleProducts = ({proImage ,proName,proDesc ,proPrice}) => {
  return (
    <>
        <div className='w-[380px]' >
            <img className='h-[380px]' src={proImage} alt="Clothes" />
            <div className='mt-2 pl-5'>
              <h2 className='text-primary font-poppins text-xl'>{proName}</h2>
              <p className='text-[#838383] font-poppins text-sm mt-2'>{proDesc}</p>
              <p className='text-[#313131] font-poppins text-lg mt-2'>${proPrice}</p>
            </div>
        </div>
    </>
  )
}

export default SingleProducts