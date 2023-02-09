import React, {Fragment, useContext }  from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import AppContext from '../../context/AppContext'

const Header = () => {

  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <Fragment>
        <div className="flex justify-between items-end mt-10 mb-6 lg:mb-10 px-10 lg:px-6">
          <Link to="/"><RiHome2Fill className='w-6 h-6'/></Link>
          <h1 className='text-purple-500 font-bold text-3xl md:text-5xl'>Platzi shopping</h1>
          <Link to='/checkout' className='flex'>
          {cart.length > 0 && <div className="">{cart.length}</div>}
          <MdAddShoppingCart className='w-6 h-6' />
          </Link>
        </div>
    </Fragment>

  );
}

export default Header;