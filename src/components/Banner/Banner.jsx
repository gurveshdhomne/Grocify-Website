import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className=' h-[50vh] flex justify-center bg-center bg-cover items-center mt-30 relative'
    style={{backgroundImage:`url(${bgImage})`}}>
     <div className='z-10 bg-white sm:w-auto sm:px-8 w-80 p-4 rounded-xl flex justify-center items-center'>
       <h2 className='text-5xl text-zinc-800 z-10 font-bold'>{title}</h2>
     </div>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner;
