import { useEffect, useState } from 'react';
import initialState  from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = payload => {
      const cart = [...state.cart, payload];
      setState({
        ...state,
        cart
      });
      localStorage.setItem('cartItems', JSON.stringify(cart));
    }

    useEffect(() =>{
      const cartItemsData = JSON.parse(localStorage.getItem('cartItems'));
      if (cartItemsData) {
        setState({... state, cart: cartItemsData})
      }
    }, []);

    const removeFromCart = payload => {
      setState({
        ...state,
        cart: state.cart.filter(items => items.id !== payload.id),
      });
    };
    const addToBuyer = payload => {
      setState({
        ...state,
        buyer: [...state.buyer, payload]
      })
    }
    return {
      addToCart,
      removeFromCart,
      addToBuyer,
      state,
    };
};

export default useInitialState;