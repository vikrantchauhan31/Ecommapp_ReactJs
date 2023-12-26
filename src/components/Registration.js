import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './css/Register.css'

const Registration = () => {
  
  const [post, setPost] = useState({
    name: '',
    email: ''
  })
  const handleInput = (event) =>{
    setPost({...post,[event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post("http://localhost:3333/users",{post} )
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  // useEffect(() => {
    
  //   axios.post("http://localhost:3333/users")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // },[])
  return (
    <div className='register-main'>
    <div className='register-container'>
    <form onSubmit={handleSubmit}>
      
      Name: <input type="text" onChange={handleInput} name="name"></input><br/>
      Email: <input type="text" onChange={handleInput} name="email"></input><br/>
      <button className='btn btn-primary'>Submit</button>
    </form>
    </div>

      
    </div>
  )
}

export default Registration
