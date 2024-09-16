import React, { useState } from 'react'

function Advanceform1() {
  const [FormData, setFormData] = useState({name: "", email: ""})
  
  const validateForm = ()=>{
    if(!FormData.name || !FormData.email){
      return false
    }
  }

  const handleChange = (e)=> {
    console.log("handle change is called", e.target.value)
    const {id, value} = e.target;
    let updatedobj = {...FormData, [id]: value }
    setFormData(updatedobj)
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    // console.log()
    if(!validateForm()){
      alert("invalid form")
      return;
    }
  }

  return (
    
    <form onSubmit = {handleSubmit}>
    <div>
      <label htmlFor="name">Name:</label>
      <input 
      type="text" 
      id='name'
      placeholder='Enter your Name'
      value={FormData.name}
      onChange={handleChange}
      />
      </div>
      <div>
        <label htmlFor="Email">Email:</label>
        <input type="email" 
        id='email'
        placeholder='Enter your email'
        value={FormData.email}
        onChange={handleChange}
        />
      </div>
      <button type='submit'>Submit</button>
      </form>
  )
}

export default Advanceform1
