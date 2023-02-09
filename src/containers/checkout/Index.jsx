import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { FaTrashAlt } from "react-icons/fa";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

return (
  <div className="flex">
    <div className="w-screen flex flex-col bg-gray-200 rounded-lg p-10 lg:p-20">
      {cart.length > 0 ? <h3 className='text-center mb-6 font-semibold text-xl'>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item) => (
          <div className='flex p-1'>
              <h4 className='grow'>{item.title}</h4>
              <section className='flex gap-4'>
                <span>
                  $
                  {item.price}
                </span>
                <button type="button" onClick={handleRemove(item)}>
                  <FaTrashAlt />
                </button>
              </section>
            </div>
        ))}
        {cart.length > 0 && (
        <div className="flex flex-col">
          <div className='flex my-6 semibold text-xl'>
            <h3 className='grow font-semibold text-xl'>Precio Total:</h3>
            <span>$ {handleSumTotal()}</span>
          </div>
          <Link to="/checkout/information">
            <button type="button" className='float-right my-2 py-2 px-4 bg-purple-700 text-white font-semibold
                          rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300
                          focus:ring-opacity-75'>Continuar
            </button>
          </Link>
        </div>
      )}
    </div>
  </div>
);
}

export default Checkout;