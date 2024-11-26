import { useEffect, useState } from 'react'

import './Banner.css'

function Banner(){

  let [film , setFilm] = useState([]);
  

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=ba60278bc386ba349e154554c626c375').then((res)=>{
      res.json()
      .then((res)=>{
        console.log(res)
        setFilm(res.results);
        let id = Math.floor(Math.random() * 20);
        setFilm(res.results[id]);
        console.log(res.results[id])
      })
    })
  }, [])

  return(
    <div className='banner'>
        <img className='banner-img' src={ `https://image.tmdb.org/t/p/original/${film.backdrop_path}`} alt="" />
        <div className='banner-title'>
          {film.title}
        </div>
    </div>
  )
}

export default Banner;

// fetch - banner img
// everytime i will add random img 
// for that use loop - once it ends i will 
// strt it again