import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, handleClick } from '../redux/todoSlice';

function Todolist() {
  
  // const[list, setList] = useState([])
  // const[curlist, setCurlist] = useState('');

  const list = useSelector((state)=>{
    return state.todoList.list
  })

  const curlist = useSelector((state) => {
    return state.todoList.curList
  })

  const dispatch = useDispatch();



  return (
    <div>
      <input type="text" 
      placeholder='Your task?'
      onChange= {(e)=> dispatch(handleChange(e.target.value))}
      value={curlist}/>
      <button onClick = {()=> dispatch(handleClick())}> Add to List</button>
      <ul>
      {list.map((items, index) => {
        return <li key={index}>{items}</li>
      })
    }
      </ul>
    </div>
  )
}

export default Todolist
