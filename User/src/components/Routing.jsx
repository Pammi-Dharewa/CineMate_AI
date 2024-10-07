import {Routes, Route} from 'react-router-dom'

function Home(){
  return <h1>Home </h1>
}

function About(){
  return <h1>About</h1>
}

function Contact(){
  return <h1>Contact us</h1>  
}

function Routing(){
  return(
    <>
    <h1>Routing examples</h1>
    <Routes>
      <Route path='/' element={Home}></Route>
      <Route path='/about' element= {About}> </Route>
      <Route path='/contact' element = {Contact}></Route>
    </Routes>
    </>
  )
}

export default Routing