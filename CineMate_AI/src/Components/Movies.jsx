import React, { useState, useEffect, useContext } from 'react';
import MovieCart from './MovieCart';
import Pagination from './Pagination';
import { WatchListContext } from './MovieContext';
import { useSelector, useDispatch } from 'react-redux';
import { handleNext, handlePrev } from '../Redux/PaginationSlice';
import {fetchmovie} from '../Redux/middleware/fetchmovie'

function Movies() {
  const dispatch = useDispatch();

  // const [movies, setMovies] = useState([]);
  const pageNo = useSelector((state) => state.pagination.pageNo);
  const { addToWatchList, removeFromWatchList, watchlist } = useContext(WatchListContext);
  
  const movies = useSelector((state) => state.movies.movies); 
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  
  // if(loading){
  //   return <h3>...loading</h3>
  // }

  // if(error){
  //   return <h3>error...</h3>
  // }

  useEffect(() => {
    // const fetchMovies = async () => {
    //   try {
    //     const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=ba60278bc386ba349e154554c626c375&page=${pageNo}`);
    //     console.log(res.data.results);
    //     setMovies(res.data.results);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    dispatch(fetchmovie(pageNo));
  }, [dispatch, pageNo]);

  return (
    <div>
      <div className='text-2xl font-bold text-center mb-5'>
        <h2>Trending movies</h2>
      </div>

      <div className='flex justify-evenly flex-wrap gap-8'>
        {movies.map((movieob) => (
          <MovieCart
            key={movieob.id}
            movieob={movieob}
            addToWatchList={addToWatchList}
            watchlist={watchlist}
            removeFromWatchList={removeFromWatchList}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePrev={() => dispatch(handlePrev())}
        handleNext={() => dispatch(handleNext())}
      />
    </div>
  );
}

export default Movies;
