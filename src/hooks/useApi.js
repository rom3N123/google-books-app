import { useDispatch } from "react-redux";
import $api from "../http/axios";
import { setBooks } from "../redux/actions/books";
import { setFetch, unsetFetch } from "../redux/actions/fetch";

const useApi = () => {
   const dispatch = useDispatch();

   const findBooks = async (params) => {
      const bookName = getSystemReadableName(params.searchValue);

      dispatch(setFetch());

      const response = await $api.get(`volumes?q=${bookName}`);

      dispatch(setBooks(response.data));

      dispatch(unsetFetch());
   };

   const getSystemReadableName = (name) => {
      return name
         .split(" ")
         .map((str) => str.toLowerCase())
         .join("+");
   };

   return { findBooks };
};

export default useApi;
