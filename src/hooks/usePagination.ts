import React from "react";
import { PaginatonContext } from "./../contexts/PaginationContextProvider";

const usePagination = () => {
   return React.useContext(PaginatonContext);
};

export default usePagination;
