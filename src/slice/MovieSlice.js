import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = [];

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const API_KEY = "27bd19d8fe0c86f850b375dbfe98c9cd";

export const getAllMovies = createAsyncThunk("/movie/popular", async () => {
  try {
    const response = await api.get("/movie/popular", {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const findMoviebyName = createAsyncThunk(
  "/movie/search",
  async (movie) => {
    try {
      const response = await api.get("/search/movie", {
        params: {
          api_key: API_KEY,
          query: movie,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      return action.payload.results;
    }),
      builder.addCase(getAllMovies.rejected, (state, action) => {
        console.log(action.payload);
      }),
      builder.addCase(getAllMovies.pending, (state, action) => {
        console.log("pending.......");
      }),
      builder.addCase(findMoviebyName.fulfilled, (state, action) => {
        return action.payload.results;
      }),
      builder.addCase(findMoviebyName.rejected, (state, action) => {
        console.log(action.payload);
      }),
      builder.addCase(findMoviebyName.pending, (state, action) => {
        console.log("pending.......");
      });
  },
});

export default MovieSlice.reducer;
