import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../slice/MovieSlice";
import MovieDetailSlice from "../slice/MovieDetailSlice";

const store = configureStore({
    reducer:{
        movie:MovieReducer,
        movieDetailes:MovieDetailSlice
    }
});

export default store