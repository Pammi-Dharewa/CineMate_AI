import {configureStore} from '@reduxjs/toolkit'
import PaginationReducer from './PaginationSlice'
import movieReducer from './movieSlice'

const store = configureStore({
  reducer:{
    pagination: PaginationReducer,
    movies: movieReducer,
  }
})

export default store