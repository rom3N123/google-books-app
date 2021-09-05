import { IBook, IReduxAction } from "../../interfaces";

export const setBook = (book: IBook): IReduxAction => ({
   type: "SET_BOOK",
   payload: book,
});

export const unsetBook = (): IReduxAction => ({
   type: "UNSET_BOOK",
});
