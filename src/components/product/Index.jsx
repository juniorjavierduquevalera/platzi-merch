import React from 'react'
import './styles.css'

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className='w-72 h-auto rounded-lg shadow-xl product-contain'>
        <figure className='w-72 h-64 bg-white flex justify-center items-center'>
            <img className='h-56 object-contain' src={product.image} alt={product.title} />
        </figure>
        <div className='w-full h-48 p-4  bg-gray-50 rounded-b-xl'>
            <div className='flex justify-between items-center mb-2'>
                <h2 className='text-center text-xl font-medium'>{product.title}</h2>
                <span>$ {product.price}</span>
            </div>
            <p className='mb-2'>{product.description}</p>
            <div className='flex justify-center'>
                <button type='button' className="my-2 py-2 px-4 bg-purple-700 text-white font-semibold
                rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300
                focus:ring-opacity-75" onClick={handleAddToCart(product)}>Comprar</button>
              </div>
        </div>
    </div>
  )
}

export default Product
