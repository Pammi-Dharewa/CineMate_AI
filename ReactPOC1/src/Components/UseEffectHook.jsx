import React, { useEffect, useState } from 'react'

function UseEffectHook() {
  const[count, setCount] = useState(0)
  const[name, setName] = useState("")
  // whenever there's state change everytime
  useEffect(()=> {
    console.log("I am useeffect 1")
  })
// component has been mountyed very first time
// empty dependency array 
  useEffect(()=> {
    console.log("I am useeffect 2")
  }, [])

// called only when count state is chnged
  useEffect(() => {
    console.log("I am useeffect 3")
  }, [count])

  useEffect(()=>{
    console.log("I am useeffct 4")
    return ()=>{
      console.log("Cleanup before useeffect 4 is called" )
    }
  }, [count])
  
  console.log("ui is rendered")
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You are {name}</p>
      <button onClick={()=> setName("Scaler")}>Click me</button>
    </div>
  )
}

export default UseEffectHook
