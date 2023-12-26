import React from 'react'
import { useState } from 'react'
import Cart from './Cart'
import Products from './Products'

const Parent = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart=(item)=>{
        setCartItems([...cartItems,item]);
    }
  return (
    <div>
      <Cart cartItems={cartItems} addToCart={addToCart}/>
      <Products cartItems={cartItems} />
    </div>
  )
}

export default Parent;
