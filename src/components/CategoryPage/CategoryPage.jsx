import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductList'
import ProductCard from '../ProductCard/ProductCard'

const CategoryPage = ({title , bgImage , categories=[]}) => {

let filterCategory = categories.includes('All')
? ProductList : ProductList.filter(items => categories.includes(items.category))

  const renderProduct = filterCategory.map(product => {
    return (
      <ProductCard
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    )
  })

  return (
    <div>

      <Banner title = {title} bgImage={bgImage}/>

     <div className='grid md:grid-cols-4 grid-cols-1 gap-9 py-20 md:px-20 px-10 '>
      {renderProduct}

    </div>

    </div>
  )
}

export default CategoryPage;





