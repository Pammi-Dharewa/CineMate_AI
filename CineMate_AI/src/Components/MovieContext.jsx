
import React,{createContext, useState, useEffect} from "react";



export const WatchListContext = createContext();


export default function WatchListContextWrapper({children}){
  const[watchlist, setWatchList] = useState([]);


  const addToWatchList = (movieob)=>{
    const updatedWatchList = [...watchlist, movieob];
    setWatchList(updatedWatchList)
    localStorage.setItem("movies", JSON.stringify(updatedWatchList))

  }

  const removeFromWatchList = (movieob)=>{
    const filteredMovies = watchlist.filter((movie) =>{
      return movie.id !== movieob.id
    })
    setWatchList(filteredMovies)
    localStorage.setItem("movies", JSON.stringify(filteredMovies));
  }

  useEffect(()=>{
    const moviesFromLocalStorage = localStorage.getItem("movies");
    if(moviesFromLocalStorage){
      setWatchList((JSON.parse(moviesFromLocalStorage)))
    }
  },[])

  return <WatchListContext.Provider 
  value={{addToWatchList, removeFromWatchList, watchlist, setWatchList}}
  >{children}</WatchListContext.Provider>
}