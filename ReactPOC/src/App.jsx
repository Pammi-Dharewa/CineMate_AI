import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponents from './Components/MyComponents'
import DisplayData from './Components/DisplayData'
function App() {
  const [count, setCount] = useState(0)
  const fruits = ["Litchi", "Grapes", "Cheery"]
  const person = {
    name : "Pammi",
    age : 23
  }

  return (
    <>
    {/* <h1>Hello World</h1>
    <MyComponents counts = {count} msg1 = {"message1"} msg2 = {"message2"}/>
    <MyComponents counts={100}></MyComponents> */}
    <DisplayData ShoppingList = {fruits} user = {person}></DisplayData>
    </>
  )
}

export default App
