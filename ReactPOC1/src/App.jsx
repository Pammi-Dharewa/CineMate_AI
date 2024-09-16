import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Simpleform from './Components/Simpleform'
import Advanceform1 from './Components/Advanceform1'
import TemperaatureInput from './Components/TemperaatureInput'
import TemperatureDisplay from './Components/TemperatureDisplay'
// import UseEffectHook from './Components/UseEffectHook'

function App() {
  // const [count, setCount] = useState(0)
  const [temp, setTemp] = useState(0);

  const updateTemp = (value) =>{
    setTemp(value);
  }

  return (
    <>
    {/* <Counter></Counter> */}
    {/* <Counter></Counter> */}
    {/* <Simpleform></Simpleform> */}
    {/* <Advanceform1></Advanceform1> */}
    <TemperaatureInput temp = {temp} updateTemp= {updateTemp}></TemperaatureInput>
    <TemperatureDisplay temp= {temp}></TemperatureDisplay>
    {/* <UseEffectHook></UseEffectHook> */}

    </>
  )
}

export default App
