import { IApiBook, IBooksStore, IReduxAction } from "../../interfaces";

export const setBooks = (books: IBooksStore): IReduxAction => ({
   type: "SET_BOOKS",
   payload: books,
});

export const addBooks = (books: IBooksStore): IReduxAction => ({
   type: "ADD_BOOKS",
   payload: books,
});
