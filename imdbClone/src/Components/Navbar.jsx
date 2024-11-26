import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/imdb-internet-movie-database5351.jpg'

function Navbar() {
  return (
    <>
    <div className='flex space-x-8 items-center pl-3 py-4'>
    <Link to={'/'}> <img className='w-16' src= {Logo} ></img> </Link>
      <div className='text-blue-500 text-3xl font-bold space-x-8'>
        <Link  to={'/'}>  Movies </Link>
        <Link to={'/watchlist'}> Watchlist</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
