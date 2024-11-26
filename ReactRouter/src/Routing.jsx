import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function About(){
  return <h3>This is About Page</h3>
}

function Contact(){
  return <h3>This is Contact Page</h3>
}

function Home(){
  return <h3>This is Home Page</h3>
}

function PageNotFound(){
  return <h2>Page not found....</h2>
}

function Users(props){
  console.log(props.isAdmin);
  const params = useParams();
  const userId = params.id;

  // return <h2>I am userID : {userId}</h2>

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchdata(){
      const resp = await fetch(`https://fakestoreapi.com/users/${userId}`)
      const data = await resp.json();
  
      setUser(data);
    }

    fetchdata();
  }, [])

  // if(user === null){
  //   return <h3>Loading... please wait</h3>
  // }

  return(
    <>
    <h4>user name: {user?.username}</h4>
    <h4>user password: {user?.password}</h4>
    <h4>user phone: {user?.phone}</h4>


    </>
  )

}



function Routing() {
  return (
    <div>
      <h1>Routing example...</h1>
      <nav>
        <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
         </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>

        {/* <li>
          <Link to={'/users/id'}>Cart</Link>
        </li> */}


        </ul>
      </nav>
      
<Routes>
  <Route path='/' element = {<Home/>}></Route>
  <Route path='/about' element = {<About/>}></Route>
  <Route path='/contact' element = {<Contact/>}></Route>
  <Route path='/users/:id' element={<Users isAdmin={true}/>}></Route>

  <Route path='*' element={<PageNotFound/>}></Route>
</Routes>

    </div>
  )
}

export default Routing
