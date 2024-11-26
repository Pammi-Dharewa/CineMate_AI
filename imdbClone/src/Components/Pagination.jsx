import React from 'react'

function Pagination(props) {
  const{ handlePrev, handleNext, pageNo} = props
  return (
     <div className='flex justify-center gap-2 p-4 h-[50px] bg-gray-300 w-full' >
        <div onClick={handlePrev}>
          <i  className='fa-solid fa-arrow-left'></i>
        </div>
        {pageNo}
        <div onClick={handleNext}>
          <i className='fa-solid fa-arrow-right'></i>
        </div>
      </div>
  )
}

export default Pagination
