
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

  name: "todo",

  initialState: {
    value: "",
    todoList: ['task1', 'task2'],
  },

  reducers: {
    addTask(state){
      state.todoList.push(state.value)
      state.value = "";
    }, 
    setValue(state, action){
      state.value = action.payload
      console.log(action);
      // console.log(state)
    }
  }
})

export const { addTask, setValue } = todoSlice.actions
export default todoSlice.reducer