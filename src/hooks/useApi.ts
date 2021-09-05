import $api from "../http/axios";
import { IApiBook, ISearchParams } from "../interfaces";
import { setBooks, addBooks } from "../redux/actions/books";
import { setFetch, unsetFetch } from "../redux/actions/fetch";
import { setQuery } from "../redux/actions/query";
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

      dispatch(setQuery(query));

      dispatch(setFetch());

      const response = await $api.get<IApiResponse>(`volumes?` + query);

      dispatch(
         setBooks({
            totalItems: response.data.totalItems,
            items: response.data.items,
         })
      );

      dispatch(unsetFetch());
   };

   const loadMoreBooks = async () => {
      const startIndex = state.books.items.length;

      dispatch(setFetch());

      const response = await $api.get<IApiResponse>(
         "volumes?" + state.query + "&startIndex=" + startIndex
      );

      dispatch(
         addBooks({
            totalItems: response.data.totalItems,
            items: response.data.items,
         })
      );

      dispatch(unsetFetch());
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
