import React from 'react'
import './css/Style.css'
import hat from '../photos/hat.jpg'
import './css/Products.css'
import cream2 from '../photos/cream2.jpg'
import Navbar from './Navbar'
import  Collection  from './Collection'

const Hero = () => {
  return (
    <>

    <div className='hero-sec'>
    <div className='left-sec'>
    <div className='texts'> <a>Skin Protection cream </a></div>
    <div style={{"marginTop":"70px"}}> 01 .. 02... </div>
    <div className='text-2'><span>Treandy Collections</span></div>
    </div>
    <div className='mid-sec'>
      <img src={hat} style={{"height":"300px","width":"300px","marginLeft":"200px","borderRadius":"40px"}}></img>
    </div>
    <div className='right-sec'>
        <div className='visits' >
          1.2 mil
        </div>
        <div style={{"marginRight":"22px"}}>
          monthly traffic
        </div>
        <div className='visits' style={{"marginTop":"100px"}}>
          100 k 
        </div>
        <div style={{"marginRight":"22px"}}>
          Happy coustmers
        </div>
    </div>
      
    </div>
    <div className='prods'>
      <div className='prod-1'>
      <div>
        <p style={{"fontSize":"Bold"}}>SKIN</p>
        <abc style={{"marginLeft":"10px"}}>Super Skin Care</abc>
      </div>
      <div style={{"marginTop":"40px","marginLeft":"20px"}}>
      {/* <img src={{cream2}} style={{"height":"160px","width":"150px"}}></img> */}
      </div>
        
      </div>
      <div className='prod-2'>
        <p className='dis-title' style={{"fontSize":"Bold"}}>SKIN</p>
        <spam style={{"marginLeft":"10px"}}>Super Skin Care</spam>


      </div>
      <div className='prod-3'>
        <p className='dis-title' style={{"fontSize":"Bold"}}>SKIN</p>
        <spam style={{"marginLeft":"10px"}}>Super Skin Care</spam>

      </div>

      
    </div>
    {/* <section id='collection' >

   <Collection/>

    </section> */}

    </>
  
  )
}

export default Hero
