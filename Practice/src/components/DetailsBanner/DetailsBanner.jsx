import './DetailsBanner.css'

function DetailsBanner({details}){
  return(
    <>
    <div className="details-banner">
      <div className="details-banner-img">
        <img src= {`https://image.tmdb.org/t/p/original/${details.poster_path}`} />
      </div>
      {
      details.videos && <button><a href= {`https://www.youtube.com/watch?v=${details.videos.results[1].key}`} target='_blank' >Watch Trailer</a></button> }
    </div>
    </>
  )
}

export default DetailsBanner