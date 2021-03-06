import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchParams } from "../../interfaces";

interface IQuery {
   params: ISearchParams | null;
}

const initialState: IQuery = {
   params: null,
};

const querySlice = createSlice({
   name: "query",
   initialState,
   reducers: {
      SET_QUERY_PARAMS: (state, action: PayloadAction<IQuery>) =>
         action.payload,
   },
});

export const { SET_QUERY_PARAMS } = querySlice.actions;

export default querySlice.reducer;
