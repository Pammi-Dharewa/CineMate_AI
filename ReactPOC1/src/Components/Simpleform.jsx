import React, { useState } from 'react'

function Simpleform() {
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")

  const handleName = (value)=> {
    setName(value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(name)
    console.log(email)

    setName("")
    setEmail("")
    
  }

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name:</label>
      <input 
      type="text" 
      placeholder='Enter name'
      id='name'
      value={name}
      onChange={(e)=> handleName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input type= "email" 
      placeholder='Enter email'
      id='email'
      value={email}
      onChange = {(e)=> setEmail(e.target.value)}
      />
    </div>
    <button type='submit'>Submit</button>
    </form>
  )
}

export default Simpleform
