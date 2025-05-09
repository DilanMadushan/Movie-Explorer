import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../slice/MovieSlice";
import MovieDetailsReducer from "../slice/MovieDetailSlice";
import FavouriteReducer from "../slice/FavouriteSlice";

const store = configureStore({
    reducer:{
        movie:MovieReducer,
        movieDetailes:MovieDetailsReducer,
        favourite:FavouriteReducer
    }
});

export default store