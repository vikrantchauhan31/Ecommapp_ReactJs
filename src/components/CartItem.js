import React from 'react'
import './css/NewCart.css'
import {FaTrash} from 'react-icons/fa'
import { useState } from 'react'
import { useCartContext } from './context/cartContext'

const CartItem = ({id,image,price,title}) => {

  const {removeItem} = useCartContext();

  const [count, setCount] = useState(1);
  const increment = () => {
       setCount(count+1);
  }
  const decrement = () => {
  
  if(count>1)
    setCount(count-1);
  }

  return (

    <div className='cart-data'>
        <div>
        <img src={image} alt={id}/>
        <p>{title.slice(0,25)}</p>
        </div>
        <p>Rs.{price}</p>
        <div className='counter'>
          <button onClick={increment}>+</button>
          <p>{count}</p>
          <button onClick={decrement}>-</button>
        </div>
        <div className='subTotal'>
          <p>Rs.{price*count}</p>
        </div>

        <FaTrash className='remove_icon' onClick={() => removeItem(id)}></FaTrash>

    </div>

  )
}

export default CartItem
