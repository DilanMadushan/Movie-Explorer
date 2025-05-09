import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../slice/MovieSlice";
import MovieDetailsReducer from "../slice/MovieDetailSlice";

const store = configureStore({
    reducer:{
        movie:MovieReducer,
        movieDetailes:MovieDetailsReducer
    }
});

export default store