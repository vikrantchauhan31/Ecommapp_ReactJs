import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from './Cart';
import './css/Style.css'
import Navbar from './Navbar';

const Collection = () => {
   const [record, setRecord]= useState([])
 
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>{setRecord(data)})
    .catch(err=>console.log(err)) 

    console.log(record);
    
   },[])

  return (
    <>
  
      <div className='cart-items' >
        {
            record.map(item=> 
            (
              
                <Cart key={item.id} id={item.id} title={item.title?item.title.slice(0,45):""} categoryData={item.category?item.category.slice(0,88):""} imageUrl={item.image} price={item.price} allData={item.products}/>

            ))
        
        }
      </div>    
    </>
  )
}

export default Collection;
