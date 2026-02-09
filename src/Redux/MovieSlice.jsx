import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allMovies: [],
  trendingMovies: [],
  ComingSoonMovies: [],
  popularMovies: [],
  topratedMovies: [],
  movieCasts: {},
};

export const getPopularMovies = createAsyncThunk(
  "getPopularMovies",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?&page=2",
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

export const getComingSoonMovies = createAsyncThunk(
  "getComingSoonMovies",
  async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?page=3",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      },
    );

    return response.data.results;
  },
);

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      console.log(action.payload.results);
      state.popularMovies = action.payload.results;
    });

    builder.addCase(getMovieCastById.fulfilled, (state, action) => {
      const { movieId, cast } = action.payload;
      state.movieCasts[movieId] = cast;
    });

    builder.addCase(getComingSoonMovies.fulfilled, (state, action) => {
      state.ComingSoonMovies = action.payload;
    });
  },
});

export const {} = MovieSlice.actions;

export default MovieSlice.reducer;
