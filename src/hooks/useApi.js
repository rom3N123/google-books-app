import { useDispatch } from "react-redux";
import $api from "../http/axios";
import { setBooks } from "../redux/actions/books";
import { setFetch, unsetFetch } from "../redux/actions/fetch";

const useApi = () => {
   const dispatch = useDispatch();

   const findBooks = async (params) => {
      const newParams = Object.entries(params)
         .map(([fieldName, fieldValue]) => {
            return fieldName === "q"
               ? `${fieldName}=${getSystemReadableName(fieldValue)}`
               : `${fieldName}=${fieldValue}`;
         })
         .join("&");

      dispatch(setFetch());

      const response = await $api.get(`volumes?` + newParams);

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
