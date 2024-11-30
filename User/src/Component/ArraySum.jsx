import React,{useState} from "react"



const generateArray = ()=>{
  const largeArr = [];
  for(let i=0;i<100000;i++){
    largeArr.push(i);
  }
  return largeArr
}

const sumArray = (arr)=>{
  console.log('calcualting sum...')
  return arr.reduce((acc, curr) => acc+curr, 0)
}

const largeSum = ()=>{
  const[count, setCount] = useState(0);
  const largeArr = generateArray();
  const sum  = sumArray(largeArr);
}

function ArraySum(){
  return(
  <>
  </>
  )
}

export default ArraySum;