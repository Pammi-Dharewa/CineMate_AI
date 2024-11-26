import React,{useState, useEffect, useContext} from 'react'
import { GENRE_IDS_MAP } from '../constants';
import { WatchListContext } from './MovieContext';


export default function Watchlist() {
  // const [watchList, setWatchList] = useState([])
  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(['All Genre', 'Action' , 'Sci-Fic', 'Drama'])
  const [currentGenre, setCurrentGenre] = useState('All Genre');

  const  {addToWatchList, removeFromWatchList, watchlist, setWatchList } = useContext(WatchListContext);


  const handleSearch = (e)=>{
    const {value} = e.target;
    setSearch(value);
  }

  useEffect(()=>{
    const moviesFromLS = localStorage.getItem("movies");
    if(!moviesFromLS){
      return
    }
    setWatchList(JSON.parse(moviesFromLS))
  },[])

  useEffect(()=>{
    let gNamesArr = watchlist.map((movie)=>{
      return getGenreFromId(movie.genre_ids[0]);
    })

    let uniqueGenres = new Set(gNamesArr);
    setGenreList(['All Genre', ...uniqueGenres]);
  }, [watchlist])

  const getGenreFromId = id =>{
    return GENRE_IDS_MAP[id];
  }

  const handleAscRating = ()=>{
    console.log('ascending')
    const sortedAsc = watchlist.sort((a,b) => (a.vote_average - b.vote_average))
    setWatchList([...sortedAsc]);
  }

  const handleDescRating = ()=>{
    console.log('descending')
    const sortedDesc = watchlist.sort((a,b) => (b.vote_average - a.vote_average));
    setWatchList([...sortedDesc])
  }

  const handleGeneralFilter = genre =>{
    setCurrentGenre(genre)
  }



  return (
    <>
    {/* genre */}
    <div className='flex justify-center m-4' >
      {genreList.map((genre)=> {
        const isActive = currentGenre === genre
        const baseStyles = 'flex justify-center items-center h-[3rem] w-[18rem] font-bold mx-4 text-white'
        const bgcolor = isActive? 'bg-blue-400' : 'bg-gray-600' 
        return <div onClick={()=> {handleGeneralFilter(genre)} }  className= {`${baseStyles} ${bgcolor}` }> {genre} </div>
      })}
    </div>


    <div className=' flex justify-center '>
      <input type="text" 
      value={search}
      onChange={handleSearch}
      placeholder='search movie'
      className= 'h-[3rem] w-[18rem] border-gray-700 p-4 border bg-gray-50 '
      />
    </div>
    <div className=' border overflow-hidden rounded-lg border-gray-200'>
      <table className='w-full border-collapse bg-white text-left'>
          <thead>
            <tr className=' bg-gray-50 '>
              <th className=' py-6 px-4'>Name</th>
              <th>
                <div className='flex'>
                  <i className='fa-solid fa-arrow-up hover:cursor-pointer mx-1'
                    onClick={handleAscRating}
                  ></i>
                  Rating
                  <i className='fa-solid fa-arrow-down hover:cursor-pointer mx-1'
                  onClick={handleDescRating}></i>
                  </div>
              </th>
              <th>
                <div className='flex'>Popularity</div>
              </th> 
              <th>
                <div className='flex'>Genre</div>
              </th>
              <th>
                <div className='flex'>Delete</div>
              </th>
           
            </tr>
          </thead>
          <tbody className=' divide-y divide-x-gray-100 border-gray-100 '>
         
          {
           watchlist
           .filter((movie) =>{
            if(currentGenre === 'All Genre'){
              return true
            }else{
              return currentGenre === getGenreFromId(movie.genre_ids[0])
            }
           })
           .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
           .map((movie)=>{
            return(
              <tr>
              <td className='flex items-center'>
                <img className=' h-[6rem] w-[8rem] object-fit object-cover ' src = {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                <div className=''>{movie.title}</div>
              </td>
              <td>{movie.vote_average}</td>
              <td>{movie.popularity}</td>
              <td> {movie.genre_ids.map((genreId) =>(
                 <div>{getGenreFromId(genreId)}</div>
              ))} 
           </td>
              <td>
              <i className="fa-solid fa-trash text-red-500 text-[1.2rem] hover:text-black" 
              onClick={()=> removeFromWatchList(movie)} ></i>
              </td>
            </tr>
            )
          })
        }

          </tbody>
        </table>      
    </div>

    </>



  )
}
