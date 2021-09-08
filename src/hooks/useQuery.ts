import { useAppDispatch } from "./../redux/storeHooks";
import { IQueryParams, ISearchParams } from "../interfaces";
import { SET_QUERY_PARAMS } from "../redux/reducers/queryReducer";
import { usePagination } from ".";

const useQuery = () => {
   const { paginationSize } = usePagination();

   const dispatch = useAppDispatch();

   const setQuery = (params: ISearchParams): void => {
      dispatch(
         SET_QUERY_PARAMS({
            params,
         })
      );
   };

   const getQuery = (searchValue: string, subject: string): string => {
      let query: string = searchValue
         .split(" ")
         .map((str) => str.toLowerCase())
         .join("+");

      if (subject !== "all") {
         query += "+subject:" + subject;
      }

      return query;
   };

   const getQueryParams = (
      searchParams: ISearchParams,
      startIndex?: number
   ): IQueryParams => {
      let query: string = getQuery(
         searchParams.searchValue,
         searchParams.subject
      );

      return {
         q: query,
         startIndex: startIndex ? startIndex : null,
         orderBy: searchParams.orderBy,
         maxResults: paginationSize,
      };
   };

   return {
      setQuery,
      getQueryParams,
   };
};

export default useQuery;
