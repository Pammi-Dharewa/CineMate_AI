import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to= "/">Home</Link>
        </li>
        <li>
          <Link to= "/about">about</Link>
        </li>        
        <li>
          <Link to= "/contact">contact</Link>
        </li>       
         {/* <li>
          <Link to= "/">Home</Link>
        </li> */}

      </ul>
    </>
  )
}

export default Navbar
