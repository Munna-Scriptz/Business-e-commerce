import React from 'react'

const Loader = ({mode}) => {
  return (
    <div className='LoaderDiv z-10 top-0 left-0 flex items-center justify-center w-full h-screen bg-[#0000007a]' style={{position: mode}}>
        <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </section>
    </div>

  )
}

export default Loader