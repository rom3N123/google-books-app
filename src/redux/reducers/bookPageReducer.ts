import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../interfaces";

export interface IBookState {
   item?: IBook | null;
}

const initialState: IBookState = {
   item: null,
};

const bookSlice = createSlice({
   name: "book",
   initialState,
   reducers: {
      SET_BOOK: (state, action: PayloadAction<IBook>) => ({
         ...state,
         item: action.payload,
      }),

      UNSET_BOOK: (state) => ({
         item: null,
      }),
   },
});

export const { SET_BOOK, UNSET_BOOK } = bookSlice.actions;

export default bookSlice.reducer;
