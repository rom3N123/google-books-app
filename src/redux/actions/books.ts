import { IApiBook, IReduxAction } from "../../interfaces";

export const setBooks = (books: IApiBook): IReduxAction => ({
   type: "SET_BOOKS",
   payload: books,
});

export const addBooks = (books: IApiBook): IReduxAction => ({
   type: "ADD_BOOKS",
   payload: books,
});
