import React,{useRef} from 'react'

function UseRef() {

  const inputRef = useRef(null);

  const handleFocus = ()=>{
    console.log(inputRef);
    inputRef.current.focus()
  }

  return (
    <div>

      <input ref={inputRef} type="text" placeholder='...'/>
      <button onClick={handleFocus}>Click me</button>
      
    </div>
  )
}

export default UseRef
