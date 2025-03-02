


// useEffect(() => {
//   const fetchMovies = async () => {
//     try {
//       const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=ba60278bc386ba349e154554c626c375&page=${pageNo}`);
//       console.log(res.data.results);
//       setMovies(res.data.results);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   fetchMovies();
// }, [pageNo]);
import {movieLoading, movieError, movieData} from '../movieSlice'


export const fetchmovie = (pageNo)=>{

  return async (dispatch)=>{
    try{
      dispatch(movieLoading(true))
      const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=ba60278bc386ba349e154554c626c375&page=${pageNo}`);
      const obj = await res.json()
      console.log(obj.results)
      dispatch(movieData(obj.results))

    }catch(err){
      dispatch(movieError())
    }finally{
      dispatch(movieLoading(false))
    }
  } 
}