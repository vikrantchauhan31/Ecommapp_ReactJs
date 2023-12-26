import React from 'react'
import './css/Style.css'
import { BsCartPlusFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Navbar = () => {


  return (
    <div className='nav-box'>
    <div className='logo'>
      <span>Amazon</span>
      
    </div>
    <div className='navLink'>
       <li><Link to='/'>Home</Link></li>
       <li><Link className='act' to='collection'>Collection</Link></li>
      
       {/* <span style={{text:"bold",marginTop:"2px"}}>ENG</span> */}
       <li><input type="text" placeholder='search...' style={{padding:"5px"}} /></li>
       <li><Link to='#'>Login</Link></li>
       <li><Link to='register'>Register</Link></li>
       <li><a href='newcart'><BsCartPlusFill/></a></li>
              
    </div>
          

    </div> 
  )
}

export default Navbar;
