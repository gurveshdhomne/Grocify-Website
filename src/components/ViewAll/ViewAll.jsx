import React from 'react'
import BgAll from '../../assets/Grocery Website Assets/all-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const ViewAll = () => {
  return (
    <div>
      <CategoryPage title="All Products" bgImage={BgAll} categories={'All'}/>
    </div>
  )
}

export default ViewAll
