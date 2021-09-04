import { useDispatch, useSelector } from "react-redux";
import $api from "../http/axios";
import { setBooks, addBooks } from "../redux/actions/books";
import { setFetch, unsetFetch } from "../redux/actions/fetch";
import { setQuery } from "../redux/actions/query";

const useApi = () => {
   const state = useSelector((state) => state);

   const dispatch = useDispatch();

   const findBooks = async (params) => {
      const searchValue = getSystemReadableName(params.searchValue);

      const subject =
         params.subject === "all" ? "" : `+subject:${params.subject}`;

      const query = `q=${searchValue + subject}&orderBy=${params.orderBy}`;

      dispatch(setQuery(query));

      dispatch(setFetch());

      const response = await $api.get(`volumes?` + query);

      dispatch(setBooks(response.data));

      dispatch(unsetFetch());
   };

   const loadMoreBooks = async () => {
      const startIndex = state.books.items.length;

      dispatch(setFetch());
      const response = await $api.get(
         "volumes?" + state.query + "&startIndex=" + startIndex
      );

      dispatch(addBooks(response.data.items));

      dispatch(unsetFetch());
   };

   const getSystemReadableName = (name) => {
      return name
         .split(" ")
         .map((str) => str.toLowerCase())
         .join("+");
   };

   return { loadMoreBooks, findBooks };
};

export default useApi;
