import { useEffect, useState } from "react"

function Form1(){
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  function handle(e){
    setName(e.target.value)
  }

  function handleClick(e){
    e.preventDefault()
    alert(`Name: ${name}, Email: ${email}`)
    setName("")
    setEmail("")
  }

  return(
    <>
    <form>

      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" 
        id="name"
        value={name}
        onChange={handle}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" 
        id="email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <button onClick={handleClick}>submit</button>

    </form>
    </>
  )
}

export default Form1