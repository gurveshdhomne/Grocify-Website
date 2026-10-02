import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { TbCircleNumber4 } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';

const Process = () => {

    const renderSteps = steps.map(item =>{
       return (
        <div key={item.id} className={` mt-10 ${item.id % 2 !== 0 ? 'md:mt-40' : ''}`}>
           <div className='flex justify-center'>
            <div className=' border-3 border-dashed rounded-full w-fit'>
             <span className='h-18 w-18 text-7xl '>{item.number}</span>

           </div>
           </div>

            <div className='flex mt-5 gap-3'>
               
                   
                        <span className=' bg-linear-to-b from-orange-400 to-orange-500 p-2 flex justify-center items-center rounded-full text-4xl text-white w-15 h-15'>{item.logo}</span>
                    
                
                < div className='flex-1'>
                    <h4 className='font-semibold text-2xl'>{item.title}</h4>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        </div>
       )
    })

    return (
        <section id='Process'>
            <div className='max-w-350 mx-auto px-10 py-20'>
                <div className='flex flex-start'>
                    <Heading highlight="Our" content="Process" className='' />
                </div>
                <div className=' flex flex-col md:flex-row mt-20'>
                    {renderSteps}
                </div>

            </div>
        </section>
    )
}

export default Process

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1 />,
    logo: <PiPlant />,
    title: "Sourcing",
    para: "We carefully select premium, raw materials from trusted global partners who prioritize environmental responsibility.",
  },
  {
    id: 2,
    number: <TbCircleNumber2 />,
    logo: <PiFactory />,
    title: "Manufacturing",
    para: "Our state-of-the-art facilities transform raw elements into high-performance products using cutting-edge tech.",
  },
  {
    id: 3,
    number: <TbCircleNumber3 />,
    logo: <SlBadge />,
    title: "Quality Control",
    para: "Every batch undergoes rigorous testing and multi-level inspections to meet strict international standards.",
  },
  {
    id: 4,
    number: <TbCircleNumber4 />,
    logo: <BsTruck />,
    title: "Logistics",
    para: "We streamline packaging and distribution to ensure safe, on-time delivery directly to your doorstep.",
  }
];

