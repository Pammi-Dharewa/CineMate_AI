import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo-removebg-preview (1).png'

function Navbar() {
  return (
    <>
    <div className='flex space-x-8 items-center pl-3 py-4 bg-gradient-to-r from-black to-gray-900'>
    <Link to={'/'}> <img className='w-16' src= {Logo} ></img> </Link>
      <div className='text-blue-500 text-lg sm:text-2xl lg:text-3xl font-bold space-x-8'>
        <Link  to={'/'}>  Movies </Link>
        <Link to={'/watchlist'}> Watchlist</Link>
        <Link to={'recommendation'}>AI Suggestions</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
