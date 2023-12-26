import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MayBeShowNavBar = ({child}) => {

    const location = useLocation();
    const [showNavBar, setShowNavBar] = useState(false);

    useEffect(()=>{
        console.log(location)
        if(location.pathname === '/register')
        {
            setShowNavBar(false)
        }
        if(location.pathname !== '/register'){
            setShowNavBar(true)
        }

    },[location])
  return (
    <div>
      {showNavBar && child}
    </div>
  )
}

export default MayBeShowNavBar
