import $api from "../http/axios";
import { IApiBook, ISearchParams } from "../interfaces";
import { SET_BOOKS } from "../redux/reducers/booksReducer";
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
      let searchValue: string = getSystemReadableName(params.searchValue);

      let query: string = `q=${searchValue}`;

      if (params.subject !== "all") {
         query += "+subject:" + params.subject;
      }

      if (params.startIndex) {
         query += "&startIndex=" + params.startIndex;
      }

      if (params.orderBy) {
         query += "&orderBy=" + params.orderBy;
      }

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

   const paginateBooks = async (startIndex: number) => {
      const query: string = state.query + "&startIndex=" + startIndex;

      const response = await $api.get("volumes?" + query);

      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));

      dispatch(
         SET_BOOKS({
            items: response.data.items,
         })
      );

      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));
   };

   const getSystemReadableName = (name: string): string => {
      return name
         .split(" ")
         .map((str) => str.toLowerCase())
         .join("+");
   };

   return { paginateBooks, findBooks };
};

export default useApi;
