import React, { useRef, useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { ImArrowLeft2 } from "react-icons/im";


const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate()
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment')
}

return (
    <div className='flex'>
      <div className="w-screen flex flex-col lg:flex-row bg-gray-200 p-10 lg:p-20">
        <section className="lg:w-3/4">
          <h2 className='text-center font-semibold text-xl'>Informacion de contacto:</h2>
          <form className="flex flex-col py-6" ref={form}>
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Nombre completo" name="name" />
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Correo Electronico" name="email" />
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Direccion" name="address" />
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Apto" name="apto" />
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Ciudad" name="city" />
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Pais" name="country" />
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Estado" name="state" />
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Codigo postal" name="cp" />
              <input className='mb-2 h-10 rounded-lg px-2' type="text" placeholder="Telefono" name="phone" />
            </form>
          <div className="flex justify-between">
            <Link to="/checkout"><ImArrowLeft2 className='w-6 h-6'/></Link>
            <button type="button" onClick={handleSubmit} className='py-2 px-4 bg-purple-700 text-white font-semibold
                          rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300
                          focus:ring-opacity-75'>Pagar
            </button>
          </div>
        </section>
        <section className="grow mt-10 lg.mt-0">
          <div className='w-full lg:pl-6'>
            <h3 className='pb-8 font-semibold text-xl text-center'>Pedido:</h3>
            {cart.map((item) => (
              <div className="mb-2" key={item.title}>
                <div className="flex justify-between gap-4">
                  <h4>{item.title}</h4>
                  <span>
                    $
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Information;