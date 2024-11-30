import React,{useState, useEffect} from "react";

function Counter(){

  const [count, setCount] = useState(0);

  const increment = ()=>{
    setCount(c => c + 1)
  }

  const decrement = ()=>{
    setCount(c => c - 1)
  }

  return(
    <>
      <h2>Counter application</h2>
      <button onClick={increment}>Increment</button>
      <h4>count is {count} </h4>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter;