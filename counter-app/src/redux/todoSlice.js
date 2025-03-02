
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    list: [],
    curList: '',
  },

  reducers: {

    handleChange: (state, action)=>{
      state.curList = action.payload
    },
  
    handleClick: (state)=>{
      if(state.curList.trim()){
        state.list.push(state.curList);
        state.curList = '';
      }
    }
  }
})

export const{handleChange, handleClick} = todoSlice.actions
export default todoSlice.reducer