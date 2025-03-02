import React from 'react'

function Pagination(props) {
  const{ handlePrev, handleNext, pageNo} = props
  return (
<div className='flex justify-center items-center gap-4 p-4 h-[50px] bg-black text-white mt-2 w-full'>
  {/* Previous Button */}
  <div 
    onClick={handlePrev} 
    className='cursor-pointer p-2 rounded-md hover:bg-yellow-300 hover:text-black transition duration-300'
  >
    <i className='fa-solid fa-arrow-left'></i>
  </div>

  {/* Page Number */}
  <span className='text-lg font-bold'>{pageNo}</span>

  {/* Next Button */}
  <div 
    onClick={handleNext} 
    className='cursor-pointer p-2 rounded-md hover:bg-yellow-300 hover:text-black transition duration-300'
  >
    <i className='fa-solid fa-arrow-right'></i>
  </div>
</div>

  )
}

export default Pagination
