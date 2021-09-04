import { combineReducers, createStore } from "redux";
import { books, fetchStatus } from "./reducers";

const rootReducer = combineReducers({
   books,
   fetchStatus,
});

const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
