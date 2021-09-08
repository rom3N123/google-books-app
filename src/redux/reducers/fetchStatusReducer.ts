import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFetchStatus {
   [setBooksStatus: string]: boolean;
}

export interface IFetchStatusState extends IFetchStatus {
   setBooksStatus: false;
}

type FetchStatusPayload = string;

const initialState: IFetchStatusState = {
   setBooksStatus: false,
};

const fetchStatusSlice = createSlice({
   name: "fetchStatus",
   initialState,
   reducers: {
      CHANGE_FETCH_STATUS: (
         state,
         action: PayloadAction<FetchStatusPayload>
      ) => {
         state[action.payload] = !state[action.payload];
      },
   },
});

export const { CHANGE_FETCH_STATUS } = fetchStatusSlice.actions;

export default fetchStatusSlice.reducer;
