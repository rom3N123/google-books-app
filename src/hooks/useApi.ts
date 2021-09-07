import $api from "../http/axios";
import { IApiBook, ISearchParams } from "../interfaces";
import { SET_BOOKS, ADD_BOOKS } from "../redux/reducers/booksReducer";
import { CHANGE_FETCH_STATUS } from "../redux/reducers/fetchStatusReducer";
import { SET_QUERY } from "../redux/reducers/queryReducer";
import { useAppDispatch, useAppSelector } from "../redux/storeHooks";

interface IApiResponse {
   kind: string;
   totalItems: number;
   items: IApiBook[];
}

const useApi = () => {
   const state = useAppSelector((state) => state);

   const dispatch = useAppDispatch();

   const findBooks = async (params: ISearchParams) => {
      const searchValue = getSystemReadableName(params.searchValue);

      const subject =
         params.subject === "all" ? "" : `+subject:${params.subject}`;

      const query = `q=${searchValue + subject}&orderBy=${params.orderBy}`;

      dispatch(SET_QUERY(query));

      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));

      const response = await $api.get<IApiResponse>(`volumes?` + query);

      dispatch(
         SET_BOOKS({
            totalItems: response.data.totalItems,
            items: response.data.items,
         })
      );

      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));
   };

   const loadMoreBooks = async (startIndex: number) => {
      dispatch(CHANGE_FETCH_STATUS("addBooksStatus"));

      const response = await $api.get<IApiResponse>(
         "volumes?" + state.query + "&startIndex=" + startIndex
      );

      dispatch(
         ADD_BOOKS({
            totalItems: response.data.totalItems,
            items: response.data.items,
         })
      );

      dispatch(CHANGE_FETCH_STATUS("addBooksStatus"));
   };

   const getSystemReadableName = (name: string): string => {
      return name
         .split(" ")
         .map((str) => str.toLowerCase())
         .join("+");
   };

   return { loadMoreBooks, findBooks };
};

export default useApi;
