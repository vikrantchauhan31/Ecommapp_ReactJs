import React from 'react'
import { useState } from 'react';
import Collection from './Collection'
import './css/Cart.css'
import Products from './Products';
import Parent from './Parent';
import {useCartContext} from './context/cartContext';
import { NavLink } from 'react-router-dom';


const Cart = (props) => {
    const {id,title,categoryData, imageUrl,price,allData} = props;
    const { handleOnPlus} = useCartContext();
      //undefined)
    // const [count,setCount]=useState(0);
    //  function handleOnPlus(id,title,imageUrl,price,allData)
    //  {       
    //    setCount(count+1);
    //    console.log(count);
    //    console.log("all data ="+allData);  //undefined 
    //    console.log("price ="+ price);
      

    //   //  var products = JSON.parse(localStorage.getItem('products'));
    //   //  if(products == null || products == undefined){
    //   //   products = {};
    //   //  }
    //   //  if(products[key] == undefined || products[key] == null) products[key] = {key, title, categoryData, imageUrl, price, count:1};
    //   //  else products[key] = {key, title, categoryData, imageUrl, price, count:products[count]=count+1};
    //   //  localStorage.setItem('products', JSON.stringify(products));
    //    alert("Item added to cart");
    //  }
     function handleOnMinus(e)
     {
       
      //  if(count>0){

      //  setCount(count-1);
      //  localStorage.removeItem('products')
      //  alert("Item removed from cart");
      //  }
      //  else{
      //   alert("Nothing to remove");
      //  }
       //console.log(count);
       
     }
    
  return (
    
        <div className="card" style={{"width": "22rem","height":"27rem"}}>
        <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2022/11/stocks_market-stock_stock-1-770x433.jpg":imageUrl} className="card-img-top" alt="..." style={{height:"250px",width:"250px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{categoryData}...</p>
          <div className='card-foot'>
          <p className='price'>{price} $</p>
          <div className='add-sub'>
          <NavLink className='btn-plus' to="/newcart" onClick={()=>{handleOnPlus(id,title,imageUrl,price,allData)}}>+</NavLink>
          {/* <p style={{"marginTop":"22px","marginRight":"9px"}}>{count}</p> */}
          <button className='btn-minus' onClick={(e)=>{handleOnMinus(e)}}>-</button>
          </div>
          </div>
        </div>
      </div>
      
  )
}

export default Cart
