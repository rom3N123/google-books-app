import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../interfaces";

type BookType = IBook | null;

const initialState: BookType = null;

const bookSlice = createSlice({
   name: "book",
   initialState,
   reducers: {
      SET_BOOK: (state: BookType, action: PayloadAction<IBook>) => {
         state = action.payload;
      },

      UNSET_BOOK: (state: BookType) => {
         state = null;
      },
   },
});

export const { SET_BOOK, UNSET_BOOK } = bookSlice.actions;

export default bookSlice.reducer;
