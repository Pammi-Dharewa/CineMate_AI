import React, { useState } from 'react'

function Accordion() {

  const [flag, setFlag] = useState([]);

  const handleClick = (i)=>{
    setFlag((prev) =>
      prev.includes(i) ? prev.filter((indx) => indx !== i)
       : [...prev, i]
    )
  }

  const data = [
    {
      title: "What is Github and how does it work?",
      content:
        "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
    },
    {
      title: "How do I see GitHub's availability?",
      content: "Check our real-time status report",
    },
    {
      title: "Why is GitHub so popular?",
      content:
        "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
    },
]


  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='accordian '>
        {data.map((item, i)=>{
          return <div key={i} className='item m-2 bg-cyan-50 p-5 shadow-md w-80'>
            <div 
            className='title text-yellow-600 flex justify-between items-center cursor-pointer'
            onClick= {() => handleClick(i)}
            >
              <h2 className='font-bold'>{item.title}</h2>
              <span>{flag.includes(i) ? "-" : "+" } </span>
            </div>
            {flag.includes(i) && (<div className='content text-orange-900 w-fit'>{item.content}</div>
        )}
          </div>
        })}
      </div>
    </div>
  )
}

export default Accordion
