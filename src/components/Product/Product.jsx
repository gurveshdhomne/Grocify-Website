import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Card from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'

const Product = () => {

     const categories =['All','Fruits','Vegetable','Dairy','SeaFood'];
     const[activeTab , setActiveTab] = useState('All');

     let filterItems = activeTab === "All" 
     ? ProductList : ProductList.filter(item =>item.category === activeTab);

       

     const renderCards = filterItems.slice(0,8).map(Product=>{
        return(
            <Card key={Product.id} image={Product.image} name={Product.name} price={Product.price}/>
        )
     })
     

    return (
        <section id="products">
            <div className='max-w-350 mx-auto px-10 py-20'>
                <Heading highlight='Our' content='Products' />
                 
                 {/* Tabs */}

                 <div className='flex gap-3 flex-wrap justify-center'>  
                        {categories.map(category=>{
                            return(
                               <button key={category}
                               className={`bg-zinc-100 px-5 py-2 text-lg mt-10 rounded-lg cursor-pointer
                               ${activeTab === category ? 'bg-linear-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100' }`}
                               onClick={()=>setActiveTab(category)}>
                                {category}
                               </button>
                            )
                            
                        })}
                    
                 </div>

                 {/* product listing */}

                 <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mt-20'>
                    {renderCards}
                 </div>

                 <div className='flex justify-center mt-10'>
                    <Link to='/viewproducts' className='bg-linear-to-b from-red-400 to-orange-500 text-white font-semibold py-2 px-5 rounded-2xl hover:scale-105 hover:to-orange-600 transaction-all duration-300'> 
                    View All
                    </Link>
                 </div>

            </div>
        </section>
    )
}

export default Product