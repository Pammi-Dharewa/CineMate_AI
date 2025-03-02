import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const PaginationSlice = createSlice({
  name: 'PaginationSlice',

  initialState:{
    pageNo: 1
  }, 
  reducers: {
    handlePrev: (state)=>{
      if(state.pageNo !== 1){
        state.pageNo = state.pageNo - 1
      }
    },
    handleNext: (state)=>{
      state.pageNo = state.pageNo + 1
    }
  }
})
export const {handleNext, handlePrev} = PaginationSlice.actions
export default PaginationSlice.reducer
