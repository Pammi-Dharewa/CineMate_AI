import React from 'react'

function MovieCart(props) {
  const {movieob, addToWatchList, watchlist, removeFromWatchList} = props

  const isMoviePresentInMatch = (movieob) =>{
    const res = watchlist.some((movie)=>{
      return movie.id === movieob.id;
    })
    return res;
  }

  return (
         <div 
            className='h-[40vh] w-[200px] bg-cover bg-center flex flex-col rounded-2xl'
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieob.poster_path})`
              }}
          >

              {
                isMoviePresentInMatch(movieob) ? 
                <div
                className= 'rounded-full bg-gray-700/50 h-8 w-8 flex items-center justify-center m-5'
                onClick={()=>{
                 removeFromWatchList(movieob)}}
                role='button'
               >
                 ❌
               </div> : <div
               className= 'rounded-full bg-gray-700/50 h-8 w-8 flex items-center justify-center m-5'
               onClick={()=>{
                addToWatchList(movieob)}}
               role='button'
              >
                ❤️
              </div>
            }

              <div className='text-white text-2xl bg-gray-700/50 rounded-2xl p-2 text-center w-full'> 
                {movieob.title} 
              </div>   
          </div>
  )
}

export default MovieCart
