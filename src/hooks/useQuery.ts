import { useAppDispatch } from "./../redux/storeHooks";
import { ISearchParams } from "../interfaces";
import { SET_QUERY } from "../redux/reducers/queryReducer";

const useQuery = () => {
   const dispatch = useAppDispatch();

   const setQuery = (params: ISearchParams): void => {
      dispatch(
         SET_QUERY({
            params,
         })
      );
   };

   return {
      setQuery,
   };
};

export default useQuery;
