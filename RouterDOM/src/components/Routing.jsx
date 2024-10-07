import {Routes, Route, Link} from 'react-router-dom'
import './routing.css'

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
    <nav>
      <li> <Link to={'/'}>Home</Link> </li>
      <li> <Link to={'/about'}> About </Link></li>
      <li> <Link to= {'/contact'}> Contact</Link> </li>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element= {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
    </Routes>
    </>
  )
}

export default Routing