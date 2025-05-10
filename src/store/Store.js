import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../slice/MovieSlice";
import MovieDetailsReducer from "../slice/MovieDetailSlice";
import FavouriteReducer from "../slice/FavouriteSlice";
import TrengingMovieReducer from "../slice/FavouriteSlice";

const store = configureStore({
    reducer:{
        movie:MovieReducer,
        movieDetailes:MovieDetailsReducer,
        favourite:FavouriteReducer,
        trending:TrengingMovieReducer
    }
});

export default store