import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar.js';
import Products from './components/Products';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Collection from './components/Collection';
import Footer from './components/Footer';
import Registration from './components/Registration';
import MayBeShowNavBar from './components/MayBeShowNavBar/MayBeShowNavBar'
import NewCart from './components/NewCart';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
  
      <Navbar/>
    
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='collection' element={<Collection/>}></Route>
        <Route path='cart' element={<Products/>}></Route>
        <Route path='register' element={<Registration/>}></Route>
        <Route path='newcart' element={<NewCart/>}></Route>

      </Routes>
      <Footer/>
   
      </BrowserRouter>
  
    </div>
  );
}

export default App;
