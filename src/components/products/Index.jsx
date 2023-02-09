import React, { useContext } from 'react'
import Product from '../product/Index.jsx'
import AppContext from '../../context/AppContext'

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div>
       <div className='flex flex-wrap justify-center items-center gap-x-10 gap-y-24 bg-gray-200 rounded-lg px-10 pt-20 pb-40'>
       {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
       </div>
    </div>
  )
}

export default Products
