import "./inputBox.css"
const InputBox = ()=>{
  return(
    <>
      <div className="container">
        <input type="text"  
        placeholder="Enter your Task" 
        onChange={handleChange}/>
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </>

  )
}

export default InputBox