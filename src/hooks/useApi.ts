import { useAppSelector } from "./../redux/storeHooks";
import $api from "../http/axios";
import { useQuery } from ".";
import { IApiBook, ISearchParams } from "../interfaces";
import { SET_BOOKS } from "../redux/reducers/booksReducer";
import { CHANGE_FETCH_STATUS } from "../redux/reducers/fetchStatusReducer";
import { useAppDispatch } from "../redux/storeHooks";

interface IApiResponse {
   kind: string;
   totalItems: number;
   items: IApiBook[];
}

const useApi = () => {
   const state = useAppSelector((state) => state);

   const dispatch = useAppDispatch();

   const { getQueryParams, setQuery } = useQuery();

   const findBooks = async (searchParams: ISearchParams) => {
      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));

      const queryParams = getQueryParams(searchParams);

      const response = await $api.get<IApiResponse>(`volumes`, {
         params: queryParams,
      });

      dispatch(
         SET_BOOKS({
            totalItems: response.data.totalItems,
            items: response.data.items,
         })
      );

      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));

      setQuery(searchParams);
   };

   const paginateBooks = async (startIndex: number) => {
      dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));

      if (state.query.params) {
         const queryParams = getQueryParams(state.query.params, startIndex);

         const response = await $api.get("volumes?", { params: queryParams });

         dispatch(
            SET_BOOKS({
               items: response.data.items,
            })
         );

         dispatch(CHANGE_FETCH_STATUS("setBooksStatus"));
      }
   };

   return { paginateBooks, findBooks };
};

export default useApi;
