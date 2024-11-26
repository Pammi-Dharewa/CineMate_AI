import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Watchlist from './Components/Watchlist'
import {Routes, Route} from 'react-router-dom'
import WatchListContextWrapper from './Components/MovieContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <WatchListContextWrapper>
    <Routes>
      <Route path="/" element = {<Home></Home> }></Route>
      <Route path="/watchlist" element = { <Watchlist></Watchlist> }></Route>
    </Routes>
    </WatchListContextWrapper>
    </>
  )
}

export default App
