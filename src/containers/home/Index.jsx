import React from 'react'
import InitialState from '../../InitialState'
import Products from '../../components/products/Index'

const Home = () => {
  return (
    <Products products={InitialState.products} />
  )
}

export default Home