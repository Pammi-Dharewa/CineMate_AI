import React from 'react'
import { addTask, setValue} from './redux_fol/todoSlice';
import { useSelector, useDispatch } from 'react-redux';


function TodoRedux() {

  const value = useSelector((state)=> {
    return state.todo.value
  })

  const list = useSelector((state)=>{
    return state.todo.todoList
  })

  const dispatch = useDispatch()

  const handleChange = (ev)=>{
    dispatch(setValue(ev.target.value))
  }
  

  const handleClick = ()=>{
    dispatch(addTask());
  }
  
  // let list = ['taske1', 'task2'];
  return (
    <div>
      <h2>My Todo List</h2>
      <div style={{display: 'flex'}}>
        <div className='input-box'>
          <input type="text" value={value} onChange={handleChange} />
          <button onClick={handleClick}>click</button>
        </div>
        <div>
          <ul>
            {
            list.map((task, index)=>{
              return <li key={index}>{task}</li>
            })
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoRedux
