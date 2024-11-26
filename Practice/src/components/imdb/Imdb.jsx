import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import '../MovieCard/MovieCard.css'


function Imdb(){
  const[movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=ba60278bc386ba349e154554c626c375').then((res)=>{
      res.json()
      .then((res)=>{
        console.log(res)
        setMovies(res.results);
      })
    })
  }, [])


  return(
    <>
    <h1>Movies List</h1>
    <ol>
      <div className="parent-movie-card">
      {movies.map((movie)=>{
        return <MovieCard key={movie.id} movie = {movie}></MovieCard>
      })
    }
      </div>
    </ol>
    </>
  )
}

export default Imdb;