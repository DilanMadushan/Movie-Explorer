import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "27bd19d8fe0c86f850b375dbfe98c9cd";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const initialState = null;

export const findMovieById = createAsyncThunk(
  'movieDetail/findById',
  async (id) => {
    try {
      const response = await api.get(`/movie/${id}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch movie:", error);
      throw error;
    }
  }
);

const MovieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findMovieById.pending, () => {
        console.log("Movie is loading...");
        return null;
      })
      .addCase(findMovieById.fulfilled, (state, action) => {
        console.log("Movie loaded:", action.payload);
        return action.payload;
      })
      .addCase(findMovieById.rejected, (state, action) => {
        console.error("Failed to load movie:", action.error);
        return null;
      });
  },
});

export default MovieDetailSlice.reducer;
