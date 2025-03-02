import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counterSlice';


function Counter() {

  const count = useSelector((state) => {
    return state.counter.value
  })

  const dispatch = useDispatch()


  return (
    <div>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <div>count: {count}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default Counter
