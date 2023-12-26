import React from 'react'
import { useCartContext } from './context/cartContext'
import './css/NewCart.css'
import CartItem from './CartItem'
import { NavLink } from 'react-router-dom'


const NewCart = (child) => {

  const {cart , clearCart} = useCartContext();
  console.log(cart);

  if(cart.length === 0)
    {
      return <div className='emptyCart'>
        <h3>No item in the cart</h3>
      </div>
    }
  return (
    <div className='prod-all'>
    <div className='cart-headings'>
      <p>products</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>SubTotal</p>
      <p>Remove</p>
    </div>
   
    <div className='newcart-items'>
      {
        cart.map((curElem)=>{
          return <CartItem key={curElem.id} {...curElem}/>;
        })
      }
    </div>
    <hr/>
    <div className="cart-two-button">
      <NavLink to="/collection">
        <button className='cart-btn'>Continue Shopping</button>      
      </NavLink>
      <button className='btn btn-clear' onClick={clearCart}>clear cart</button>
    </div>
    
    </div>
      

  )
}

export default NewCart
