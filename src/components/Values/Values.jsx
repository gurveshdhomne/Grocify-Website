import React from 'react';
import Heading from '../Heading/Heading';
import { FaHeart } from "react-icons/fa";
import { FaLeaf, FaSeedling } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import BasketFull from "../../assets/Grocery Website Assets/basket-full-vegetables.png";

const Values = () => {

    const LeftValues = value.slice(0,2).map(item => {
        return (
            <div key={item.id} className='flex items-center  md:flex-row-reverse gap-7'>
                <div>
                    <span className='flex justify-center items-center text-white text-3xl bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                  <h3 className='font-bold text-2xl text-zinc-800'>{item.title}</h3>
                  <p className='text-zinc-600'>{item.para}</p>
                </div>
            </div>
        )

    });

     const RightValues = value.slice(2,4).map(item => {
        return (
            <div key={item.id} className='flex items-center  gap-7'>
                <div>
                    <span className='flex justify-center items-center text-white text-3xl bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div>
                  <h3 className='font-bold text-2xl text-zinc-800'>{item.title}</h3>
                  <p className='text-zinc-600'>{item.para}</p>
                </div>
            </div>
        )

    })

    return (
        <section>
            <div className='max-w-350 mx-auto px-10 py-5 '>

                <Heading highlight="Our" content="Values" />

                <div className='flex md:gap-5 mt-15 gap-15 md:flex-row flex-col'>
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {LeftValues}
                    </div>

                    <div className='md:flex w-1/2 hidden'>
                        <img src={BasketFull} />
                    </div>

                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {RightValues}
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Values;

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a established fact that a reader will be distracted by the readable. ',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Alway Fresh',
        para: 'It is a established fact that a reader will be distracted by the readable. ',
        icon: <FaLeaf />
    },

    {
        id: 3,
        title: 'Food Safety',
        para: 'It is a established fact that a reader will be distracted by the readable. ',
        icon: <FaShieldAlt />
    },

    {
        id: 4,
        title: '100% Organic',
        para: 'It is a established fact that a reader will be distracted by the readable. ',
        icon: <FaSeedling />
    }

]
