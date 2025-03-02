import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState:{
    movies: [],
    loading: true,
    error: false,
  },
  reducers: {

    movieLoading: (state, action)=>{
      state.loading = action.payload
      state.error = false
    },

    movieError: (state, action)=>{
      state.error = action.payload
      state.loading = false
    },

    movieData: (state, action)=>{
      state.movies = action.payload
      state.loading = false
    }

  }
})

export const {movieLoading, movieError, movieData} = movieSlice.actions
export default movieSlice.reducer