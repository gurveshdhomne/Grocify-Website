import React from 'react'

const Heading = (props) => {
  return (
    <div>


      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-10 w-fit mx-auto'>


        <span className='text-orange-500 '>{props.highlight} </span>

        <div className='inline-block'>
          {props.content}

          <div className='h-1 bg-orange-300 w-full mt-4'></div>
        </div>

      </h1>


    </div>
  )
}

export default Heading;
