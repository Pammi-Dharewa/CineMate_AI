import React from 'react'
// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux_fol/counterSlice';

function Counter() {
  // const[count, setCount] = useState(0);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();


  // function increment(){
  //   return setCount(count+1)
  // }

  // function decrement(){
  //   return setCount(count-1);
  // }


  return (
    <div>

        <button onClick={()=> dispatch(increment())}>increment</button>
        <div>Count: {count}</div>
        <button onClick={()=> dispatch(decrement())}>decrement</button>

    </div>
  )
}

export default Counter
