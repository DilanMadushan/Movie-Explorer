import { createSlice } from "@reduxjs/toolkit";

const storedFavourites = localStorage.getItem("favourites");

export const initialState = storedFavourites
  ? JSON.parse(storedFavourites)
  : [];

const FavouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const exists = state.find((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
  },
});

export const { addFavourite, removeFavourite } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
