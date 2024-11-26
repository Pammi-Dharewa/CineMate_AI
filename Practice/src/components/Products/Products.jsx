import { useEffect, useState } from "react"

function Products(){
  const [count1, setCount1] =  (0);
  const [count2, setCount2] = useState(0);

  function cn1(){
    setCount1(count1 + 1);
  }

  function cn2(){
    setCount2(count2 + 1)
  }
  console.log("re-rendering")

  useEffect(()=>{
    console.log("rendering")
  }, [count1])

  return(
    <>
    <button onClick={cn1}> click me</button>
    <span> {count1} </span>
    <button onClick={cn2}> click me</button>
    <span> {count2} </span>
    </>
  )
}

export default Products