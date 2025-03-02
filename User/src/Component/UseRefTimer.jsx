import React, { useEffect, useRef, useState } from 'react'

function UseRefTimer() {
  const [seconds, SetSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(()=>{
    intervalRef.current =  setInterval(() =>{
      SetSeconds(s => s + 1)
    }, 1000)

    return ()=> clearInterval(intervalRef.current);

  }, [])

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={()=> clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default UseRefTimer
