// import Form1 from "./Component/Form1"
// import Form2 from "./Component/Form2"
// import {BrowserRouter, Route, Routes} from "react-router-dom"
// import { useState, useEffect } from "react"
// import { Link } from 'react-router-dom'
// import Home from "./Component/Home"
// import About from "./Component/About"
// import Contact from "./Component/Contact"
// import Navbar from "./Component/Navbar"
// import {lazy, Suspense} from "react"

// const Home = lazy(() => import(('./Component/Home')))
// const About = lazy(() => import(('./Component/About')))
// const Contact = lazy(() => import(('./Component/Contact')))

import Carousel from "./Component/Carousel"
import StopWatch from "./Component/StopWatch"
// import UseRef from "./Component/UseRef"
// import UseRefTimer from "./Component/UseRefTimer"

function App() {


  // const [Home, setHome] = useState(null)
  // const [About, setAbout] = useState(null)
  // const [Contact, setContact] = useState(null)
  
  // useEffect(()=>{
  //   import('./Component/Home').then((module)=> setHome(()=> module.default))

  // },[])

  // const loadName = ()=>{
  //   import('./Component/Home').then((module)=> setHome(()=> module.default))
  // }

  // const loadAbout = ()=>{
  //   import('./Component/About').then((module)=> setAbout(()=> module.default))
  // }

  // const loadContact = ()=>{
  //   import('./Component/Contact').then((module)=> setContact(()=> module.default))
  // }


  return (
    <>
    <h1>Hello</h1>
    {/* <StopWatch></StopWatch> */}
    {/* <Carousel></Carousel> */}

    {/* <Form1></Form1> */}
    {/* <Form2></Form2> */}
    {/* <BrowserRouter> */}

    {/* <nav>
      <ul>
        <li>
          <Link to= "/" onClick={loadName}  >Home</Link>
        </li>
        <li>
          <Link to= "/about" onClick={loadAbout}>about</Link>
        </li>        
        <li>
          <Link to= "/contact" onClick={loadContact}>contact</Link>
        </li>  

         {/* <li>
          <Link to= "/">Home</Link>
        </li> */}

      {/* </ul> */}
    {/* // </nav> */} 

    {/* <Suspense fallback={<div>Loading...</div>}> */}

      {/* <Routes> */}
        {/* <Route path="/" element={<Navbar></Navbar>}></Route> */}
        {/* <Route path="/" element= {Home ? <Home></Home> : <div>Loading....</div>}></Route>
        <Route path="/about" element= {About ? <About></About> : <div>Loading...</div>}></Route>
        <Route path="/contact" element= {Contact ? <Contact></Contact> : <div>Loading...</div>}></Route> */}
        
        {/* <Route path="/" element= {<Home></Home>}></Route>
        <Route path="/about" element= {<About></About>}></Route>
        <Route path="/contact" element= { <Contact></Contact>}></Route> */}

      {/* </Routes> */}
      {/* </Suspense> */}
    {/* </BrowserRouter> */}
    {/* <UseRef></UseRef> */}
    {/* <UseRefTimer></UseRefTimer>
     */}

    
     </>
  )
}

export default App
