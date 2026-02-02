import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: [],
  trendingMovies: [],
  popularMovies: [],
  topratedMovies: [],
  shows: [],
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = MovieSlice.actions;

export default MovieSlice.reducer;
