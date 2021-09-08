import { usePagination } from ".";
import $api from "../http/axios";
import { IApiBook, ISearchParams } from "../interfaces";
import { SET_BOOKS } from "../redux/reducers/booksReducer";
import { CHANGE_FETCH_STATUS } from "../redux/reducers/fetchStatusReducer";
import { useAppDispatch, useAppSelector } from "../redux/storeHooks";

interface IApiResponse {
   kind: string;
   totalItems: number;
   items: IApiBook[];
}

const useApi = () => {
   const { paginationSize } = usePagination();

   const state = useAppSelector((state) => state);

   const dispatch = useAppDispatch();

   const findBooks = async (params: ISearchParams) => {
      let query: string = getQuery(params.searchValue, params.subject);

      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));

      const response = await $api.get<IApiResponse>(`volumes`, {
         params: {
            q: query,
            startIndex: params.startIndex,
            orderBy: params.orderBy,
            maxResults: paginationSize,
         },
      });

      dispatch(
         SET_BOOKS({
            totalItems: response.data.totalItems,
            items: response.data.items,
         })
      );

      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));
   };

   const paginateBooks = async (startIndex: number) => {
      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));

      const query: string = state.query + "&startIndex=" + startIndex;

      const response = await $api.get("volumes?" + query);

      dispatch(
         SET_BOOKS({
            items: response.data.items,
         })
      );

      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));
   };

   const getQuery = (searchValue: string, subject: string): string => {
      let query: string = searchValue
         .split(" ")
         .map((str) => str.toLowerCase())
         .join("+");

      if (subject !== "all") {
         query += "+subject:" + subject;
      }

      console.log(query);

      return query;
   };

   return { paginateBooks, findBooks };
};

export default useApi;
