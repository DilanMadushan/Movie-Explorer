import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  initialState = {};

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/"
})

const API_KEY = "27bd19d8fe0c86f850b375dbfe98c9cd";

export const findMovieById = createAsyncThunk(
    '/movie/:id',
    async (id) => {
        try {
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: API_KEY,
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

const MovieDetailSlice = createSlice({
    name:'movieDetail',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(findMovieById.fulfilled,(state,action)=>{
            console.log(action.payload);
            return action.payload;
        }).addCase(findMovieById.rejected,(state,action)=>{
            console.log(action.payload);
        }).addCase(findMovieById.pending,(state,action)=>{
            console.log("pending.......");
        })
    }
})

export default MovieDetailSlice.reducer