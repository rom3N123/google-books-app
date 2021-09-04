import { useDispatch } from "react-redux";
import $api from "../http/axios";
import { setBooks } from "../redux/actions/books";
import { setFetch, unsetFetch } from "../redux/actions/fetch";

const useApi = () => {
   const dispatch = useDispatch();

   const findBooks = async (params) => {
      const searchValue = getSystemReadableName(params.searchValue);

      const subject =
         params.subject === "all" ? "" : `+subject:${params.subject}`;

      const query = `q=${searchValue + subject}&orderBy=${params.orderBy}`;

      dispatch(setFetch());

      const response = await $api.get(`volumes?` + query);

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
