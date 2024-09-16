import React, { useState } from 'react'
import Counter2 from './Counter2'


function Counter() {
  // useState returns array index - (0(variable), 1(function))
  // initial state 
  // const arr = useState(10)
  // const count = arr[0]
  // const setCount = arr[1]
  // console.log(arr)
  const [count, setCount] = useState(0) //this statment is executed only once
  const handleincrement = () =>{
    setCount(count+1)
  }
  const handledecrement = ()=>{
    if(count <= 0 ) return
    setCount(count-1)
  }
  const handleReset = ()=>{
    setCount(0)
  }

  return (
    <>
    <div style={{display: "flex", gap:"2rem" }}>
      <button onClick={handleincrement}>+</button>
      <p>{count}</p>
      <button onClick={handledecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    <Counter2 count= {count}></Counter2>
    </>
  )
}

export default Counter
