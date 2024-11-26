import './MovieCard.css';

function MovieCard({movie}){
  return(
    <>
    <div className="movie-card">
      <div className="movie-card-img">
        <img src={ `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
      </div>
      <div className='movie-card-title'>{movie.title} ({movie.release_date})</div>
    </div>
    </>
  )

}

export default MovieCard