import { books, fetchStatus, query } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
   reducer: {
      books,
      fetchStatus,
      query,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
