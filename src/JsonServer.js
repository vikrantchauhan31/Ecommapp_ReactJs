import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const JsonServer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err))

    },[])
  return (
    <div>
      
    </div>
  )
}

export default JsonServer
