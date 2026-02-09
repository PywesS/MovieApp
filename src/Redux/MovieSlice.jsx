import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allMovies: [],
  filteredMovies: [],
  trendingMovies: [],
  ComingSoonMovies: [],
  popularMovies: [],
  topratedMovies: [],
  movieCasts: {},
  genres: [],
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

export const getGenres = createAsyncThunk("getGenres", async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list",
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  return response.data.genres;
});

export const getAllMovies = createAsyncThunk("getAllMovies", async () => {
  const pages = [4,5];

  const responses = await Promise.all(
    pages.map((p) =>
      axios.get(`https://api.themoviedb.org/3/trending/movie/week?page=${p}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          accept: "application/json",
        },
      }),
    ),
  );

  const results = responses.flatMap((res) => res.data.results);
  return results;
});

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    filterMovies: (state, action) => {
      state.filteredMovies = state.allMovies.filter((movie) =>
        movie.genre_ids?.includes(action.payload),
      );
    },
  },
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

    builder.addCase(getGenres.fulfilled, (state, action) => {
      console.log(action.payload);
      state.genres = action.payload;
    });

    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.allMovies.push(...action.payload);
    });
  },
});

export const { filterMovies } = MovieSlice.actions;

export default MovieSlice.reducer;
