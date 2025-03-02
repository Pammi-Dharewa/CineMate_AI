import React, {useState, useEffect} from 'react'
import axios from 'axios';



function Banner() {
  const [bannerImg, setBannerImg] = useState('');
  const [title, setTitle] = useState('');

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=ba60278bc386ba349e154554c626c375')
    .then((res)=>{
      console.log(res.data.results)
      const firstMovie  = res.data.results[3];
      const fmt = firstMovie.title;
      const fmb  = firstMovie.backdrop_path;

      setBannerImg(`https://image.tmdb.org/t/p/original/${fmb}`)
      setTitle(fmt)

    }).catch((e)=>{
      console.log(e);
    })
  },[])


  return (
    <div 
    className='h-[20vh] md:h-[75vh] mb-5 bg-cover bg-center flex items-end'
    style={{
      backgroundImage: `url(${bannerImg})`
    }}
    >
    <div className='text-white text-xl font-bold text-center w-full'>{title}</div> 
    
    </div>
  )
}

export default Banner
