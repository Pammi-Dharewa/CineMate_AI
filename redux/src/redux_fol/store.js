import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import TodoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // hello: counterReducer
    todo: TodoReducer
  },
})

export default store