import React, {useEffect} from 'react'
import { useState } from 'react'
import './css/Products.css'

const Products = (props) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(()=> {
    var newCartItems = [];
    var items_string = localStorage.getItem('products');
    let items;
    if(items_string) items = JSON.parse(localStorage.getItem('products'));
    else items = {}
    Object.keys(items).map(key => {
      newCartItems.push(items[key]);
    })
    setCartItems(newCartItems);
  }, [])
  return (
    <div className='items' style={{"height":"700px","width":"700px"}}>
      <h2>Cart Items:</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="it" style={{"justifyContent":"center","textDecoration":"none"}}>
            <img src={item.imageUrl} style={{"height":"100px"}}></img> {item.title}  {item.price}$ 
          </li>
        ))}
      </ul>
       
    </div>
  )
}

export default Products
