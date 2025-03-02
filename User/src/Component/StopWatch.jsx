import React, { useCallback, useRef, useState } from 'react'

function StopWatch() {

  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const usereff = useRef(null);

  const formatTime = time=>{
    const sec = `0${time % 60}`.slice(-2);
    const min = Math.floor(time / 60)
    const getMin = `0${min % 60}`.slice(-2);
    const hrs = Math.floor(time / 3600);
    const gethrs = `0${hrs}`.slice(-2);

    return `${gethrs}:${getMin}:${sec}`;
  }

  const handleStart = ()=>{
    if(!isTimerRunning){
     setIsTimerRunning(true)
     console.log('start')
      usereff.current = setInterval(() => {
        setTime((p) => p + 1)
      }, 1000);
    }
  }

    const handleStop = useCallback(()=>{
      if(isTimerRunning){
        console.log('stop')
        setIsTimerRunning(false);
        clearInterval(usereff.current);
      }
    },[])
  

  const handleReset = ()=>{
    console.log('reset')
    clearInterval(usereff.current);
    setIsTimerRunning(false);
    setTime(0);
  }


  
  return (
    <div>
      <h4>Time: {time}</h4>
      <h4>{formatTime(time)}</h4>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>      
    </div>
  )
}


export default StopWatch
