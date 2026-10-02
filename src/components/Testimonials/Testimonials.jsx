import React from 'react'
import Heading from '../Heading/Heading'
import Customer1 from '../../assets/Grocery Website Assets/customer1.jpg';
import Customer2 from '../../assets/Grocery Website Assets/customer2.jpg';
import Customer3 from '../../assets/Grocery Website Assets/customer3.jpg';
import Customer4 from '../../assets/Grocery Website Assets/customer4.jpg';
import Customer5 from '../../assets/Grocery Website Assets/customer5.jpg';
import { FaStar } from 'react-icons/fa';


const Testimonials = () => {

  const customerFeedback = customer.map(item => {

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= item.star) {
        stars.push(
          <FaStar key={i} className="text-orange-400" />
        )
      }
    }


    return (
      <div key={item.id} className=' flex shrink-0 m-4  w-60 md:w-90 lg:w-1/4 p-4 gap-2 bg-zinc-100'>
        <div >
          <img className='rounded-full border-2 border-orange-500 w-60 p-1 ' src={item.photo} />
        </div>
        <div>
          <h1 className='text-3xl font-bold'>{item.name}</h1>
          <span className='text-zinc-600'>{item.category}</span>
          <br />
          <div className='flex mt-3'>
            {stars}
          </div>
          <br />
          <p className='text-zinc-600'>{item.para}</p>
        </div>
      </div>
    );

  });


  return (
    <section>

      <div className='max-w-350 px-10 mx-auto'>

        <Heading highlight='Customers' content='Saying' />

        <div className='flex overflow-x-auto '>
          {customerFeedback}
        </div>

      </div>

    </section>
  )
}

export default Testimonials

const customer = [
  {
    id: 1,
    photo: Customer1,
    name: "Sarah Jenkins",
    category: "Fresh Produce",
    star: "5",
    para: "The organic honeycrisp apples were incredibly crisp, sweet, and perfectly ripe. Not a single bruise in the entire batch."
  },
  {
    id: 2,
    photo: Customer2,
    name: "David Chen",
    category: "Bakery & Bread",
    star: "4",
    para: "The artisanal whole wheat sourdough has a beautiful crust and dense texture. Perfect for morning toast, though it hardens quickly."
  },
  {
    id: 3,
    photo: Customer3,
    name: "Elena Rostova",
    category: "Dairy & Eggs",
    star: "5",
    para: "These pasture-raised free-range eggs have rich, deep orange yolks. You can truly taste the quality difference in breakfast baking."
  },
  {
    id: 4,
    photo: Customer4,
    name: "Marcus Vance",
    category: "Meat & Seafood",
    star: "5",
    para: "The thick-cut ribeye steaks were beautifully marbled. They seared up perfectly on the cast iron skillet and stayed incredibly juicy."
  },
  {
    id: 5,
    photo: Customer5,
    name: "Amina Yusuf",
    category: "Pantry Staples",
    star: "3",
    para: "The cold-pressed extra virgin olive oil has a lovely peppery finish, but the bottle cap cracked during shipping and leaked a little."
  }
];


