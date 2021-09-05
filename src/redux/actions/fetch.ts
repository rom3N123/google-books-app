import { IReduxAction } from "../../interfaces";

export const setFetch = (): IReduxAction => ({
   type: "SET_FETCH",
});
export const unsetFetch = (): IReduxAction => ({
   type: "UNSET_FETCH",
});
