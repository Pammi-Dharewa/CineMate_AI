import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import WatchList from './Components/WatchList'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <WatchList></WatchList>
    </>
  )
}

export default App
