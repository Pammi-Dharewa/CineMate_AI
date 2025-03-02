import React,{useEffect, useState} from 'react'

const items = [
  {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 1',
      description: 'Description of item 1',
  },
  {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 2',
      description: 'Description of item 2',
  },
  {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Item 3',
      description: 'Description of item 3',
  },
];

function Carousel() {
  const [currentItems, setCurrentItems] = useState(0);


  useEffect(()=>{

    const timer = setInterval(()=>{
      nextItem();
    }, 2000)
    return ()=> clearInterval(timer);
  },[])

  function nextItem() {
    setCurrentItems((cur) => (cur + 1) % items.length);
  }

  function prevItem(){
    setCurrentItems(((currentItems - 1) + items.length) % items.length);
  }

  return (
    <div className='carousel'>
      <button onClick={prevItem}>Prev</button>
      <div className='item'>
        <img
        width={300}
        height={300} 
        src={items[currentItems].imageUrl} 
        alt="" />
        <h3>{items[currentItems].title}</h3>
        <p>{items[currentItems].description}</p>
      </div>
      <button onClick={nextItem}>Next</button>
    </div>
  )
}

export default Carousel
