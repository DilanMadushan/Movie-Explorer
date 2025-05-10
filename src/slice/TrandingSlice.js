import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = [];

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/"
})

const API_KEY = "27bd19d8fe0c86f850b375dbfe98c9cd";

export const getAllTrandingMovies=createAsyncThunk(
    '/movie/trnding',
    async()=>{
        try{
            const response = await api.get('movie/popular', {
        params: {
          api_key: API_KEY,
        },
      });
            return response.data
        }catch(error){
            console.log(error)
        }
    }
);

const TrndingMovieSlice = createSlice({
    name:'tranding',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.
        addCase(getAllTrandingMovies.fulfilled, (state, action) => {
        console.log(action.payload);
        return action.payload.results;
      }),
      builder.
        addCase(getAllTrandingMovies.rejected,(state,action)=>{
            console.log(action.payload);
        }),
        builder.addCase(getAllTrandingMovies.pending,(state,action)=>{
            console.log("pending.......");
        })
    }
})

export default TrndingMovieSlice.reducer;