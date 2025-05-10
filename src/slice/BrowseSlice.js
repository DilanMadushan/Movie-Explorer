import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "27bd19d8fe0c86f850b375dbfe98c9cd";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const initialState = [];

export const browseMovie = createAsyncThunk(
  "movies/browse",
  async ({ searchText, genreId, year, rating }, { rejectWithValue }) => {
    try {
      let endpoint = "discover/movie";
      const params = {
        api_key: API_KEY,
        sort_by: "popularity.desc",
        with_genres: genreId || undefined,
        primary_release_year: year || undefined,
        "vote_average.gte": rating ? Number(rating) : undefined,
      };

      // If searchText is given, use search endpoint instead

      if (searchText && searchText.trim() !== "") {
        endpoint = "search/movie";
        params.query = searchText;
        delete params.sort_by;
        delete params.with_genres;
        delete params.primary_release_year;
        delete params["vote_average.gte"];
      }

      const response = await api.get(endpoint, { params });
      const results = response.data.results || [];

      // Manually filter 
      if (endpoint === "search/movie") {
        return results.filter((movie) => {
          const matchesGenre = genreId
            ? movie.genre_ids.includes(Number(genreId))
            : true;
          const matchesYear = year
            ? movie.release_date?.startsWith(year.toString())
            : true;
          const matchesRating = rating
            ? movie.vote_average >= Number(rating)
            : true;
          return matchesGenre && matchesYear && matchesRating;
        });
      }

      return results;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const BrowseSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(browseMovie.fulfilled, (_, action) => {
        return action.payload || [];
      })
      .addCase(browseMovie.rejected, (_, action) => {
        console.error("Movie fetch failed:", action.payload);
        return [];
      })
      .addCase(browseMovie.pending, (state) => {
        console.log("Fetching movies...");
        return state;
      });
  },
});

export default BrowseSlice.reducer;
