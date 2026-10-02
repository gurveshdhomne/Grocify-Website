import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeeFood from '../../assets/Grocery Website Assets/seafood-banner.jpg'

const SeeFood = () => {
  return (
    <div >
      <CategoryPage title="Meat & SeeFood" bgImage={BgSeeFood} categories={['SeaFood']}/>
    </div>
    
  )
}

export default SeeFood
