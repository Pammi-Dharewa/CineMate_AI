import React from 'react'

function MyComponents({counts, msg1, msg2}) {
  // console.log(props)
  return (
    <>
    <div>  Hello, I am a Component {counts}</div>
    <p>{msg1}</p>
    <p>{msg2}</p>
    </>
  )
}

export default MyComponents
