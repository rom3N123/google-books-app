import { IReduxAction } from "../../interfaces";

export const setQuery = (query: string): IReduxAction => ({
   type: "SET_QUERY",
   payload: query,
});
