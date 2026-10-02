import React from 'react'
import Heading from '../Heading/Heading';
import FruitsCat from '../../assets/Grocery Website Assets/fruits-and-veggies.png';
import MeatCat from '../../assets/Grocery Website Assets/meat-and-seafood.png';
import DairyCat from '../../assets/Grocery Website Assets/dairy-and-eggs.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Category = () => {

    // Card Array of Object
    const category = [
        {
            id: 1,
            title: 'Fruits & Veggies',
            descrption:
                'Fresh juicy fruits and nutritious vegetables packed with natural goodness. Perfect for a healthy, tasty, and balanced everyday diet.',
            image: FruitsCat,
            path:'/fruits'
        },
        {
            id: 2,
            title: 'Dairy & Eggs',
            descrption:
                'Fresh and creamy dairy products, full of essential nutrients and goodness. Perfect for adding taste, freshness, and nutrition to your daily meals.',
            image: DairyCat,
            path:'/dairy'
        },
        {
            id: 3,
            title: 'Meat & SeaFood',
            descrption:
                'Fresh and high-quality meat, carefully selected for great taste and nutrition. Perfect for delicious, protein-rich meals every day.',
            image: MeatCat,
            path:'/seefood'
        }
    ];

    // Card Mapping
    const renderCard = category.map((cards) => {
        return (
            <div
                key={cards.id}
                className="flex-1 basis-75 min-w-[70]"
            >

                {/* Card Image */}

                <div className="w-full min-h-[30vh] relative -mb-10">

                    <img
                        src={cards.image}
                        alt={cards.title}
                        className="absolute bottom-0 w-full object-contain"
                    />

                </div>


                {/* Card Content */}

                <div className="bg-zinc-100 pt-12 p-8 rounded-lg mt-2">

                    <h1 className="font-bold text-zinc-800 text-2xl sm:text-3xl">
                        {cards.title}
                    </h1>

                    <p className="text-zinc-600 mt-3 mb-9">
                        {cards.descrption}
                    </p>

                    <Link to={cards.path} className='bg-linear-to-b from-red-400 to-orange-500 text-white font-semibold py-2 px-5 rounded-2xl hover:scale-105 hover:to-orange-600 transaction-all duration-300' >
                        See All
                    </Link>

                </div>

            </div>
        );
    });

    return (
        <div className="py-8">

            {/* Heading */}

            <div className="px-4 sm:px-8">
                <Heading
                    highlight="Shop"
                    content="by Category"
                />
            </div>


            {/* Cards */}

            <div className="
                flex
                flex-wrap
                gap-8
                px-4
                sm:px-8
                mt-10
                md:mt-14
            ">
                {renderCard}
            </div>

        </div>
    );
}

export default Category;


