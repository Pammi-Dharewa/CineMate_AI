
import React, { useEffect, useState } from 'react'

function InfinitScroll() {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [offset, setOffset] = useState(0);


  useEffect(()=>{
    const handleScroll = ()=> {
      if(document.body.scrollHeight - 300 < window.scrollY + window.innerHeight){
        if(!loading){
          setLoading(true);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [loading]);




     

  useEffect(()=>{
    if(!loading) return;

    async function fetchData(){
      setLoading(true);
      try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=12`)
        const data = await res.json();

        const formattedData = data.results.map((pokemon) =>{
          return {
            name: pokemon.name,
          }
        })
        
        setResult((prev) => {
          return [...prev, ...formattedData]
        }) 
        
        setOffset((prev) => prev + 12);

        setTimeout(() => setLoading(false), 1000); // Add a delay for the loading indicator

    
        console.log(result)

      }catch(err){
        console.log(err)
        setLoading(false);
      }
    }
    fetchData();  
  },[offset, loading])
  
  return (
    <div>
      <h1>Fetch data</h1>
      <div className='grid grid-cols-2'>
      {result.map((re, index) => (
         <div key={index} className='p-4 border rounded-md shadow-md bg-gray-100 text-center'>
          <img className='w-16 h-16 mx-auto mb-2' src={`https://img.pokemondb.net/artwork/${re.name}.jpg`} alt="" />
          <span className='font-bold'>{re.name}</span>
        </div>
        )
      )}
    </div>
    {
      !loading && <h1>Loading...</h1>    
    }
    </div>
    )
  }

export default InfinitScroll
