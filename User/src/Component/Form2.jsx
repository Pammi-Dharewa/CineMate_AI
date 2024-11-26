import React, { useState } from 'react'

function Form2() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

const [formData, setFormData] = useState({
  name: '',
  email: ''
})

function handleChange(e){
  const {id, value} = e.target;
  console.log(id, value)
  setFormData((prevdata) => ({...prevdata, [id]: value}))

}



function handleClick(e){
  e.preventDefault()
  alert(`Name: ${formData.name}, Email: ${formData.email}`)
}


  return (
    <div>

    <form action="" onSubmit={handleClick}>
      <div>
      <label htmlFor="name">Name:</label>
      <input type="text" 
      id="name"
      value={formData.name}
      name='name'
      onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input type="text" 
      id="email"
      value={formData.email}
      name='email'
      onChange={handleChange}/>
    </div>
    <button>submit</button>
    </form>
      
    </div>
  )
}

export default Form2






