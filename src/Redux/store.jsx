import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "../Redux/MovieSlice";

export const store = configureStore({
  reducer: {
    Movies: MoviesReducer,
  },
});
