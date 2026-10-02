import React from 'react'
import Button from '../Button/Button'
import FreshFruit from '../../assets/Grocery Website Assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${FreshFruit})`}}>

        <div className='lg:bg-transparent bg-zinc-100 px-10 py-10 flex md:flex-row flex-col max-w-350 mx-auto'>

            <span className='text-orange-500 text-7xl  md:text-9xl font-bold md:-rotate-90 md:h-fit md:self-center'>20%</span>
            
            <div className='max-w-175' >
                <h3 className=' mt-2 text-4xl md:text-7xl font-bold'>First Order Discount!</h3>
                <p className=' mt-6 mb-6 text-zinc-500'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essential and save big on your first purchase . Fast delivery and quality guaranted.</p>
                <Button content='Get a Discount'/>
                
            </div>

        </div>

    </section>
  )
}

export default Discount
