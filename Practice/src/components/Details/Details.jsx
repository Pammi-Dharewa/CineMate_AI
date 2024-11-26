import React from 'react'
import { useState, useEffect } from 'react'
import Cast from '../Cast';
import DetailsBanner from '../DetailsBanner';

function Details() {
  let [details, setDetails] = useState([]);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/933260?language=en-US&api_key=ba60278bc386ba349e154554c626c375&append_to_response=credits,videos').then((res)=>{
      res.json()
      .then((res)=>{
        console.log(res.credits)
        setDetails(res);

      })
    })
  }, [])


  return (
    <div>
      <DetailsBanner details={details}></DetailsBanner>
      {details.credits ? <Cast cast = {details.credits.cast.slice(0,8)}></Cast> : null}
      
    </div>
  )
}

export default Details





















































