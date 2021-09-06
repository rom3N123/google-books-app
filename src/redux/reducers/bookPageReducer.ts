import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../interfaces";

export type BookType = IBook | null;

const initialState: IBook | null = null;

const bookSlice = createSlice({
   name: "book",
   initialState,
   reducers: {
      SET_BOOK: (state, action: PayloadAction<IBook>) => action.payload,

      UNSET_BOOK: (state) => null,
   },
});

export const { SET_BOOK, UNSET_BOOK } = bookSlice.actions;

export default bookSlice.reducer;
