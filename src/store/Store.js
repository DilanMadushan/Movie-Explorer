import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../slice/MovieSlice";
import MovieDetailsReducer from "../slice/MovieDetailSlice";
import FavouriteReducer from "../slice/FavouriteSlice";
import TrengingMovieReducer from "../slice/TrandingSlice";
import BrowserReducer from "../slice/BrowseSlice";

const store = configureStore({
  reducer: {
    movie: MovieReducer,
    movieDetailes: MovieDetailsReducer,
    favourite: FavouriteReducer,
    trending: TrengingMovieReducer,
    browse: BrowserReducer,
  },
});

export default store;
