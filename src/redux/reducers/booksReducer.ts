import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooksStore } from "../../interfaces";

const initialState: IBooksStore = {
   items: [],
};

const booksSlice = createSlice({
   name: "books",
   initialState,
   reducers: {
      SET_BOOKS: (state, action: PayloadAction<IBooksStore>) => action.payload,

      ADD_BOOKS: (state, action: PayloadAction<IBooksStore>) => ({
         ...state,
         items: [...state.items, ...action.payload.items],
      }),
   },
});

export const { SET_BOOKS, ADD_BOOKS } = booksSlice.actions;

export default booksSlice.reducer;
