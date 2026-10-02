import React from 'react'
import groceryImg from '../../assets/Grocery Website Assets/grocery.png'
import Button from '../Button/Button'
import { RxDropdownMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='mt-30'>

        <div className='md:flex items-center md:px-20 px-10 justify-between  '>

         <div className="left-div md:w-130 pt-5 ">
           
         <p className='bg-orange-200 text-orange-500  rounded-full px-3 py-2 inline font-semibold'>Export Best Quality</p>
         <h1 className='md:text-7xl text-5xl/14 font-bold mb-5 mt-5'>Tasty Organic <span className='text-orange-500'>Fruites</span> & <span className='text-orange-500'>Veggies</span> In Your City</h1>
         <p className='text-gray-500 pb-4'>Bred for a high content of beneficial. Our products are all fresh and healthy</p>
         <a href='#products' className='bg-linear-to-b from-red-400 to-orange-500
        text-white font-semibold py-2 px-5 rounded-2xl hover:scale-105 hover:to-orange-600 transaction-all duration-300'> Shop Now</a>

        </div>


        <div className="right-div md:w-1/2">
          <img src={groceryImg} alt ="GroceryPng" className='w-aoto h-auto'></img>
        </div>

        </div>
          
          

    </section>
  )
}

export default Hero;
