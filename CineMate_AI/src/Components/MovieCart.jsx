import React, { useState } from "react";

function MovieCart(props) {
  const { movieob, addToWatchList, watchlist, removeFromWatchList } = props;
  const [hovered, setHovered] = useState(false); // State to track hover

  const isMoviePresentInMatch = (movieob) => {
    return watchlist.some((movie) => movie.id === movieob.id);
  };

  const handleTrailer = async (id) => {
    console.log(id);
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ba60278bc386ba349e154554c626c375&language=en-US`);
      const data = await res.json();
      // console.log(data.results[0]?.key);
      const key = data.results[0]?.key;

      if (key) {
        window.open(`https://www.youtube.com/watch?v=${key}`, "_blank");
      } else {
        console.log("Trailer not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="relative h-[40vh] w-[200px] bg-cover bg-center flex flex-col shadow-2xl rounded-2xl transition-transform duration-300 ease-in-out hover:bg-[length:115%] hover:bg-center hover:overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieob.poster_path})`,
      }}
      onClick={() => handleTrailer(movieob.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Show "Watch Trailer" when hovering */}
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold text-lg">
          Watch Trailer 🎬
        </div>
      )}

      {/* Watchlist Button */}
      {isMoviePresentInMatch(movieob) ? (
        <div
          className="absolute top-3 left-3 rounded-full bg-gray-700/50 h-8 w-8 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation(); // Prevents click event from opening trailer
            removeFromWatchList(movieob);
          }}
          role="button"
        >
          ❌
        </div>
      ) : (
        <div
          className="absolute top-3 left-3 rounded-full bg-gray-700/50 h-8 w-8 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            addToWatchList(movieob);
          }}
          role="button"
        >
          ❤️
        </div>
      )}

      {/* Movie Title */}
      {
        !hovered && <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xl bg-gray-700/50 rounded-2xl px-3 py-1 text-center">
        {movieob.title}
      </div>
      } 
    </div>
  );
}

export default MovieCart;
