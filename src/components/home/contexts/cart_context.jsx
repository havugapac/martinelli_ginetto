import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({
    data:[],
    setCart:()=>{
    }
});

const CartContextProvider = ({ children }) => {

    const [cart,setCart]=useState([])
   
    var cartState={
        cart,setCart
    }

    return (
      <CartContext.Provider value={cartState}>
        {children}
      </CartContext.Provider>
    );
  };
  
export {CartContext,CartContextProvider}