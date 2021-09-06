import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const querySlice = createSlice({
   name: "query",
   initialState,
   reducers: {
      SET_QUERY: (state, action: PayloadAction<string>) => {
         state = action.payload;
      },
   },
});

export const { SET_QUERY } = querySlice.actions;

export default querySlice.reducer;
