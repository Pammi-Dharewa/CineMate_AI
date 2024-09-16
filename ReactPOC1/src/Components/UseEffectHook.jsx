import React, { useEffect, useState } from 'react'

function UseEffectHook() {
  const [ count, setCount] = useState(0)
  
  useEffect(() =>{
    console.log("ui is rendered")
  })
  
  console.log("ui is rendered")
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default UseEffectHook
