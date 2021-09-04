import { combineReducers, createStore } from "redux";
import { books, fetchStatus, query, book } from "./reducers";

const rootReducer = combineReducers({
   books,
   fetchStatus,
   query,
   book,
});

const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
