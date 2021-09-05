import { books, fetchStatus, query, book } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
   reducer: {
      books,
      fetchStatus,
      query,
      book,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
