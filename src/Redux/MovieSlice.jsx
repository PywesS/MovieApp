import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allMovies: [],
  trendingMovies: [],
  popularMovies: [],
  topratedMovies: [],
  shows: [],
  movieCasts: {},
};

export const getPopularMovies = createAsyncThunk(
  "getPopularMovies",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?&page=1",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          accept: "application/json",
        },
      },
    );
    return response.data;
  },
);

export const getMovieCastById = createAsyncThunk(
  "getMovieCastById",
  async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      },
    );
    return { movieId, cast: response.data.cast };
  },
);



export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      console.log(action.payload)
      state.popularMovies = action.payload.results;
    });

    builder.addCase(getMovieCastById.fulfilled, (state, action) => {
      const { movieId, cast } = action.payload;
      state.movieCasts[movieId] = cast;
    });

  },
});

export const {} = MovieSlice.actions;

export default MovieSlice.reducer;
