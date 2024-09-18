import React, { useEffect, useState } from 'react'
import {Routes, Route, Link, Outlet} from 'react-router-dom'


function ReactRouterDOM() {
  return (
    <>
    <div>Navbar</div>
    <ul>
      {/*if you give anchor tag it reloads the page */}
      <Link to={"/"}> <li>Home</li> </Link>
      <Link to={"/about"}> <li>About</li> 
        <Link to={"/about/company"}>Company</Link>
      </Link> 
    </ul>
    
    <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/about' element= {<About></About>}>
        <Route path='company' element = {<Company></Company>}></Route>
      </Route>
    </Routes>
    </>
  )
}

function Company(){
  return(
    <>
    <div>I am techpipers</div>
    <h1>We create daily news</h1>
    <Outlet></Outlet>
    </>
  )
}

function About() {
  return (
    <>
    <div> I am about page</div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nisi perferendis, dicta vel laudantium dolorem fuga animi ullam suscipit, delectus sit, magni iste ducimus quae! Numquam necessitatibus itaque unde repellendus?
    Illum ad sequi, alias reiciendis optio fugit aliquam labore ratione nesciunt explicabo dolores id a rerum tenetur aspernatur, ipsum nisi cum voluptate velit saepe officiis? Sequi atque eaque aperiam suscipit.</h1>
    <Outlet></Outlet>
    </>
  )
}

function Home() {
  return (
    <>
    <div>Home page</div>
    <p>We are here for you</p>
    </>
  )
}

// function Listing() {
//   return (
//     <div>
      
      
//     </div>
//   )
// }

function user(){
  const[user, setUser] = useState(null)

   useEffect(async ()=>{
    const response = await fetch("")
    const result = await response.json()
  })
  return(
    <>
      <h3>Name</h3>
      <h3>Email</h3>
      <h3>Contact</h3>
    </>
  )
}

export default ReactRouterDOM
