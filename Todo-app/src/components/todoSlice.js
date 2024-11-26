

import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: '',
    todoList: ['task1', 'task2']
  },

  reducers: {
    addTask(state){
      state.todoList.push(state.value)
    },
    setTodoInputValue(state, Action){
      
    }
  }
})