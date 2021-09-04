import { createStore } from "redux";
import books from "./booksReducer";

const store = createStore(
   books,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
