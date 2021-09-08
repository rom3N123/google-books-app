import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IQuery {
   params: IQueryParams | null;
}

type IQueryParams = {
   q: string;
   orderBy: string;
   subject: string;
   startIndex?: number;
};

const initialState: IQuery = {
   params: null,
};

const querySlice = createSlice({
   name: "query",
   initialState,
   reducers: {
      SET_QUERY: (state, action: PayloadAction<IQuery>) => action.payload,
   },
});

export const { SET_QUERY } = querySlice.actions;

export default querySlice.reducer;
