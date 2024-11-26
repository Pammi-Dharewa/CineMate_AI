import React, { useState, useEffect, useContext } from 'react'
import MovieCart from './MovieCart';
import Pagination from './Pagination';
import axios from 'axios';
import { WatchListContext } from './MovieContext';

function Movies() {
  const[movies, setMovies] = useState([])
  const[pageNo, setPageNo] = useState(1);
  // const[watchlist, setWatchList] = useState([]);

  const  {addToWatchList, removeFromWatchList, watchlist, setWatchList } = useContext(WatchListContext);


  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=ba60278bc386ba349e154554c626c375&page=${pageNo}`)
    .then((res)=>{
      console.log(res.data.results)
      setMovies(res.data.results)

    }).catch((e)=>{
      console.log(e);
    })
  },[pageNo])


  // useEffect(()=>{
  //   const moviesFromLocalStorage = localStorage.getItem("movies");
  //   if(moviesFromLocalStorage){
  //     setWatchList((JSON.parse(moviesFromLocalStorage)))
  //   }
  // },[])

  const handleNext = () =>{
    setPageNo(pageNo + 1);
  }

  const handlePrev = ()=>{
    if(pageNo > 1){
      setPageNo(pageNo - 1);

    }
  }

  // const addToWatchList = (movieob)=>{
  //   const updatedWatchList = [...watchlist, movieob];
  //   setWatchList(updatedWatchList)
  //   localStorage.setItem("movies", JSON.stringify(updatedWatchList))

  // }

  // const removeFromWatchList = (movieob)=>{
  //   const filteredMovies = watchlist.filter((movie) =>{
  //     return movie.id !== movieob.id
  //   })
  //   setWatchList(filteredMovies)
  //   localStorage.setItem("movies", JSON.stringify(filteredMovies));
  // }

  return (
    <div>
      <div className='text-2xl font-bold text-center'>
        <h2>Trending movies</h2>
      </div>

      <div className='flex justify-evenly flex-wrap gap-8'>
            {movies.map((movieob)=>{
              return <MovieCart
               movieob = {movieob} 
               addToWatchList = {addToWatchList}
               watchlist = {watchlist}
               removeFromWatchList = {removeFromWatchList}
               ></MovieCart>
            })}      
      </div>
      <Pagination 
        pageNo = {pageNo}
        handlePrev = {handlePrev}
        handleNext = {handleNext}
      ></Pagination>

    </div>
  )
}

export default Movies
